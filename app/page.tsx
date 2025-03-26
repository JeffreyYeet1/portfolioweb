'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './styles/home.module.css';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPython, 
  SiApache, 
  SiDocker,
  SiLinkedin,
  SiGithub
} from 'react-icons/si';
import { FiDownload, FiFolder } from 'react-icons/fi';
import Image from 'next/image';
const Home = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const projects = [
    {
      title: "Wordle+",
      description: "Wordle, but more..",
      image: "/images/projects/wordleplus.png",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "Render"],
      slug: "wordle-plus"
    },
    {
      title: "Clash of Plans",
      description: "Productivity App with AI Assistant",
      image: "/images/projects/clashofplans.png",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase", "Docker", "Cohere", "LangChain", "Google Calendar"],
      slug: "clash-of-plans"
    },
    {
      title: "MockMate",
      description: "Personal AI Interview Assistant",
      image: "/images/projects/mockmate.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS RDS", "Prisma", "Vercel"],
      slug: "mockmate"
    },
  ];

  const galleryImages = [
    {
      src: '/images/gallery/skiing_result.jpg',
      alt: 'Skiing at Blue Mountain'
    },
    {
      src: '/images/gallery/cabohorsies_result.jpg',
      alt: 'Horse riding in Cabo'
    },
    {
      src: '/images/gallery/photoshoot_result.jpg',
      alt: 'Photoshoot with friends'
    },
    {
      src: '/images/gallery/shibuyasky_result.jpg',
      alt: 'Top of Shibuya Sky'
    },
    {
      src: '/images/gallery/eclipse_result.jpg',
      alt: 'Eclipse in Toronto'
    },
    {
      src: '/images/gallery/tdot_result.jpg',
      alt: 'Exploring Toronto'
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'projects' ? 50 : 
                    sectionId === 'about' ? -50 : 80; // Set about section to -50px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Error sending message:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hi, I&apos;m Jeffrey Ye</h1>
          <p className={styles.heroSubtitle}>Full Stack Developer</p>
          <p className={styles.heroLocation}>Based in Toronto</p>
          <div className={styles.heroButtons}>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={styles.primaryButton}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={styles.secondaryButton}
            >
              About Me
            </button>
          </div>
          <div className={styles.socialIcons}>
            <a 
              href="https://linkedin.com/in/jeffreyye1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
            >
              <SiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/jeffreyyeet1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
            >
              <SiGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="/resume.pdf" // 032525
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon}
            >
              <FiDownload />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.projectsContent}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <Link 
                key={index}
                href={`/projects/${project.slug}`}
                className={`${styles.projectCard} ${activeProject === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className={styles.projectImage}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImageContent}
                    width={1000}
                    height={1000}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Searching Text */}
      <div className={styles.searchingText}>
        Searching for<span className={styles.typewriter}>.. Professional Experience</span>
      </div>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                I&apos;m a passionate developer with a focus in building modern web applications.
                I love creating elegant solutions to complex problems and am always eager to learn new technologies.
              </p>
              <div className={styles.skills}>
                <h3>I&apos;m best when working with</h3>
                <div className={styles.skillTags}>
                  <span>
                    <SiReact />
                    React
                  </span>
                  <span>
                    <SiNextdotjs />
                    Next.js
                  </span>
                  <span>
                    <SiTypescript />
                    TypeScript
                  </span>
                  <span>
                    <SiJavascript />
                    JavaScript
                  </span>
                  <span>
                    <SiNodedotjs />
                    Node.js
                  </span>
                  <span>
                    <SiExpress />
                    Express
                  </span>
                  <span>
                    <SiMongodb />
                    MongoDB
                  </span>
                  <span>
                    <SiPython />
                    Python
                  </span>
                  <span>
                    <SiApache />
                    Java
                  </span>
                  <span>
                    <SiDocker />
                    Docker
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.portraitContainer}>
              <div className={styles.aboutImage}>
                <Image  
                  src="/images/regheadshot.jpg" 
                  alt="Portrait" 
                  className={styles.portrait}
                  width={1000}
                  height={1000}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.portraitDate}>Nov 16th, 2024</div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className={styles.photoGallery}>
            <a href="/gallery" className={styles.galleryLink}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                gallery/more <FiFolder style={{ verticalAlign: 'middle' }} />
              </span>
            </a>
            <div className={styles.carousel}>
              <div className={styles.carouselTrack}>
                {/* First set of slides */}
                {galleryImages.map((image, index) => (
                  <div key={`first-${index}`} className={styles.carouselSlide}>
                    <div className={styles.carouselImage}>
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        className={styles.carouselImageContent}
                        width={1000}
                        height={1000}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ))}
                {/* Second set of slides */}
                {galleryImages.map((image, index) => (
                  <div key={`second-${index}`} className={styles.carouselSlide}>
                    <div className={styles.carouselImage}>
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        className={styles.carouselImageContent}
                        width={1000}
                        height={1000}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
          <p className={styles.contactText}>
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className={styles.formTextarea}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
            {formStatus === 'success' && (
              <p className={styles.formSuccess}>✓ Message sent!</p>
            )}
            {formStatus === 'error' && (
              <p className={styles.formError}>× Failed to send. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
