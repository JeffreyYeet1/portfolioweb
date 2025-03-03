'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './styles/carousel.module.css'; // Assuming you have a CSS module for styling

const Carousel = () => {
  const [cellCount, setCellCount] = useState<number>(5);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);
  const [theta, setTheta] = useState<number>(360 / cellCount);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Add a loading state
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Add transitioning state
  const carouselRef = useRef<HTMLDivElement>(null); // Ref to track the carousel element

  // Recalculate theta whenever cellCount changes
  useEffect(() => {
    setTheta(360 / cellCount);
  }, [cellCount]);

  // Recalculate dimensions whenever cellCount or theta changes
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const calculateDimensions = () => {
      const cells = carousel.querySelectorAll(`.${styles.carousel__cell}`) as NodeListOf<HTMLElement>;
      const cellWidth = carousel.offsetWidth;

      const rotateFn = 'rotateY'; // Always horizontal
      const cellSize = cellWidth;
      const newRadius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
      setRadius(newRadius);

      cells.forEach((cell, i) => {
        if (i < cellCount) {
          const cellAngle = theta * i;
          cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${newRadius}px)`;
        } else {
          cell.style.opacity = '0';
          cell.style.transform = 'none';
        }
      });

      setIsLoading(false); // Mark as loaded after calculations
    };

    // Delay calculations to ensure the carousel is fully rendered
    const timeoutId = setTimeout(calculateDimensions, 100);

    return () => clearTimeout(timeoutId);
  }, [cellCount, theta]);

  // Rotate the carousel when selectedIndex changes
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isLoading) return;

    const rotateCarousel = () => {
      const angle = theta * selectedIndex * -1;
      const rotateFn = 'rotateY'; // Always horizontal

      const currentAngle = parseFloat(carousel.style.transform.match(/-?\d+/g)?.[1] || '0');
      const targetAngle = angle;
      const angleDifference = (targetAngle - currentAngle + 540) % 360 - 180;

      carousel.style.transform = `translateZ(${-radius}px) ${rotateFn}(${currentAngle + angleDifference}deg)`;

      // Set transitioning state to true
      setIsTransitioning(true);

      // Wait for the transition to complete
      const transitionDuration = 500; // Match this with your CSS transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    };

    rotateCarousel();
  }, [selectedIndex, radius, theta, isLoading]);

  // Update panel styles (scaling, opacity, visibility) when selectedIndex changes
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isLoading) return;

    const updatePanelStyles = () => {
      const cells = carousel.querySelectorAll(`.${styles.carousel__cell}`) as NodeListOf<HTMLElement>;

      cells.forEach((cell, i) => {
        const distance = Math.abs(i - selectedIndex);
        if (distance <= 2 || distance >= cellCount - 2) {
          // Panels within 2 positions of the selected index or wrapping around
          const scale = distance === 0 ? 2 : 1.3 - Math.min(distance, cellCount - distance) * 0.25; // Center panel is largest
          const opacity = distance === 0 ? 1 : 1 - Math.min(distance, cellCount - distance) * 0.3; // Center panel is fully opaque
          cell.style.opacity = `${opacity}`;
          cell.style.transform = `rotateY(${theta * i}deg) translateZ(${radius}px) scale(${scale})`;
          cell.style.visibility = 'visible';
        } else {
          // Panels beyond 2 positions are invisible
          cell.style.opacity = '0';
          cell.style.visibility = 'hidden';
        }
      });
    };

    updatePanelStyles();
  }, [selectedIndex, radius, theta, isLoading, cellCount]);

  // Handle next button click
  const handleNext = () => {
    if (isTransitioning) return; // Ignore if transitioning
    setSelectedIndex((prevIndex) => (prevIndex < cellCount - 1 ? prevIndex + 1 : 0));
  };

  // Handle previous button click
  const handlePrevious = () => {
    if (isTransitioning) return; // Ignore if transitioning
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cellCount - 1));
  };

  // Handle image click
  const handleImageClick = (index: number) => {
    console.log(`Clicked on image ${index + 1}`);
    // Add your custom logic here, e.g., open a modal or navigate to a new page
  };

  // Handle cell count change
  const handleCellCountChange = (newCellCount: number) => {
    if (newCellCount < 3 || newCellCount > 15) return; // Limit cell count
    setCellCount(newCellCount);
    setSelectedIndex((prevIndex) => Math.min(prevIndex, newCellCount - 1)); // Adjust selectedIndex if necessary
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.scene}>
        <div
          ref={carouselRef}
          className={styles.carousel}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }} // Hide until loaded
        >
          {Array.from({ length: cellCount }, (_, i) => (
            <div key={i} className={styles.carousel__cell}>
              <button
                onClick={() => handleImageClick(i)} // Add a click handler
                style={{ border: 'none', background: 'none', padding: 0, width: '100%', height: '100%' }} // Remove default button styles
              >
                <img
                  src={`/images/projects/project${i + 1}.png`} // Dynamically set the image source
                  alt={`Image ${i + 1}`} // Add alt text for accessibility
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Style the image
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navButtons}>
        <button className={styles.navButton} onClick={handlePrevious} disabled={isTransitioning}>
          &lt;
        </button>
        <button className={styles.navButton} onClick={handleNext} disabled={isTransitioning}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;