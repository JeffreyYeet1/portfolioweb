'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/project.module.css';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: "Wordle+",
    description: "Wordle, but more..",
    media: [
      { type: 'image', url: "/images/projects/wordleplus.png", alt: "Wordle+ Screenshot" },
      { type: 'image', url: "/images/projects/wordleplus1.png", alt: "Wordle+ Gameplay" },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "Render"],
    slug: "wordle-plus",
    fullDescription: `<h1>Wordle+</h1>

<p><strong>Wordle+</strong> is a full-stack word game hub inspired by classics like the New York Times' Wordle, built using <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>

<p>Designed as a centralized platform for Wordle-inspired games (like Quordle, Octordle, and more), Wordle+ aims to take the single-player experience to the next level with <strong>social</strong> and <strong>competitive</strong> features. While the core Wordle game is currently implemented, the platform already supports a <strong>global leaderboard</strong>, with future plans for <strong>friends lists</strong> and <strong>multiplayer modes</strong>.</p>

<p>This is a passion project born from a serious <strong>Wordle addiction</strong> back in 12th grade computer science class—now evolving into a growing, feature-rich web app for word game lovers everywhere.</p>

<p>Deployed on <strong>Render</strong>.</p>`,
    githubUrl: "https://github.com/jeffreyyeet1/wordleplus",
    websiteUrl: "https://wordleplus.onrender.com"
  },
  {
    title: "MockMate",
    description: "Personal AI Interview Assistant",
    media: [
      { type: 'youtube', url: "F-JwSP1WrHE", alt: "MockMate Demo" },
      { type: 'image', url: "/images/projects/mockmate1.png", alt: "MockMate Landing Page" },
      { type: 'image', url: "/images/projects/mockmate.png", alt: "MockMate Interview" },
      { type: 'image', url: "/images/projects/mockmate2.png", alt: "MockMate Interview" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS RDS", "Prisma", "Vercel"],
    slug: "mockmate",
    fullDescription: `<h1>MockMate</h1>

<p><strong>MockMate</strong> is an AI-powered interview preparation assistant designed to simulate realistic interview experiences right in your browser. Built with <strong>Next.js</strong> and <strong>TypeScript</strong>, MockMate leverages the power of modern web technologies to help users practice and improve their interview skills.</p>

<p>Using the OpenAI API, MockMate dynamically generates tailored interview questions based on user-provided prompts (e.g., "SWE @ Amazon"), mimicking the adaptability of a real interviewer. It then analyzes spoken responses and provides constructive feedback to help users refine their answers.</p>

<p>To create an immersive environment, MockMate utilizes <strong>WebkitSpeechRecognition</strong> for real-time speech input and <strong>Azure Text-to-Speech</strong> for lifelike voice output. It also includes a camera feature to simulate a video interview setup, making the practice experience more authentic.</p>

<p>On the backend, MockMate uses <strong>Prisma</strong> as an ORM to interact with a <strong>PostgreSQL</strong> database hosted on <strong>AWS RDS</strong>, ensuring scalable and efficient data management.</p>`,
    githubUrl: "https://github.com/tmanzhe/mockmate",
    websiteUrl: "https://dorahacks.io/buidl/21737"
  },
  {
    title: "Clash of Plans",
    description: "Productivity App with AI Assistant",
    media: [
      { type: 'youtube', url: "BGD3t1tdqqc", alt: "Clash of Plans Demo" },
      { type: 'image', url: "/images/projects/clashofplans.png", alt: "Clash of Plans Screenshot" },
      { type: 'image', url: "/images/projects/clashofplans1.png", alt: "Clash of Plans Screenshot" },
      { type: 'image', url: "/images/projects/clashofplans2.png", alt: "Clash of Plans Screenshot" },
      { type: 'image', url: "/images/projects/clashofplans3.png", alt: "Clash of Plans Screenshot" },
      { type: 'image', url: "/images/projects/clashofplans4.png", alt: "Clash of Plans Screenshot" },      
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase", "Docker", "Cohere", "LangChain", "Google Calendar"],
    slug: "clash-of-plans",
    fullDescription: `<h1>Clash of Plans</h1>

<p>Clash of Plans was inspired by the realization that while many task management and calendar applications exist, few effectively integrate these two essential productivity tools into a seamless experience. The name "Clash of Plans" playfully reflects the struggle of juggling competing priorities and time commitments while striving for productivity and efficiency.</p>

<h2>What it does</h2>
<p>Clash of Plans is a modern web application designed to streamline productivity by seamlessly integrating task management and scheduling. It offers:</p>
<ul>
  <li>A dynamic task management system with priority levels and duration tracking</li>
  <li>An interactive calendar with drag-and-drop event management</li>
  <li>Seamless interaction between tasks and calendar events</li>
  <li>Real-time updates for a smooth user experience</li>
  <li>A visually appealing, responsive UI with intuitive modals for effortless task and event management</li>
</ul>

<h2>How we built it</h2>
<p>The application is built using modern web technologies:</p>

<h3>Frontend Stack</h3>
<p><strong>Next.js:</strong> delivers lightning-fast, server-rendered React with seamless navigation for an ultra-smooth user experience.</p>
<p><strong>TypeScript:</strong> ensures rock-solid, type-safe code, eliminating runtime errors before they happen.</p>
<p><strong>Tailwind CSS:</strong> provides sleek, responsive styling with utility-first magic for effortless design.</p>

<h3>Backend Stack</h3>
<p><strong>FastAPI:</strong> powers a high-performance, async-driven backend with blazing-fast API responses.</p>
<p><strong>LangChain:</strong> with RAG (Retrieval-Augmented Generation) supercharges AI-driven task automation with intelligent, context-aware insights. aka another fancy way of saying Wrapper</p>
<p><strong>Cohere:</strong> AI Agent brings "cutting-edge" NLP to enhance user interactions with natural, fluid responses.</p>
<p><strong>Supabase:</strong> acts as a real-time, scalable backend powerhouse, handling data storage and authentication effortlessly.</p>

<h2>Challenges we ran into</h2>
<p>One of the biggest challenges we faced was integrating UI/UX design while ensuring a seamless user experience without inadvertently mimicking platforms like Notion. Striking a balance between inspiration and originality was difficult.</p>

<p>Additionally, working as a team on this type of application was a new experience for us, which led to struggles in setting up and effectively utilizing CI/CD pipelines for streamlined development and deployment.</p>

<p>Furthermore, we encountered significant hurdles with new technologies such as Docker and Supabase. Since it was our first time using these tools, we faced various configuration and compatibility issues, which required extensive troubleshooting and learning on the go.</p>

<h2>Accomplishments that we're proud of</h2>
<p>One of our biggest accomplishments was successfully integrating task management and calendar functionality into our experience. We created an intuitive drag-and-drop system that allows users to manage their schedules effortlessly while ensuring real-time updates for a smooth workflow. Additionally, designing a clean and responsive UI/UX was a huge milestone. We focused on balancing functionality and aesthetics, ensuring that users can easily navigate the platform while being visually appealing.</p>

<p>Asides from that was how nice it was working with langchain and rag models :)</p>

<h2>What we learned</h2>
<p>Throughout this project, we learned the importance of effective collaboration and version control, especially when working in a team environment. Using CI/CD pipelines helped streamline our deployment workflows, reinforcing best practices for software development. We also gained hands-on experience with new technologies, such as Docker and Supabase. Understanding how to containerize applications and manage backend services efficiently was a crucial learning experience. Moreover, integrating AI-powered features using LangChain and Cohere taught us how to leverage machine learning models for productivity tools. This opened up exciting possibilities for future enhancements.</p>

<h2>What's next for Clash of Plans</h2>
<p>Moving forward, we plan to expand Clash of Plans' AI capabilities by introducing intelligent task prioritization and scheduling suggestions. By analyzing user habits, the application will be able to offer smart recommendations that optimize productivity. We also aim to enhance collaboration features, allowing users to create shared workspaces and receive real-time updates when working in teams. This will make Clash of Plans even more effective for group projects and professional use. Additionally, mobile support is a key priority. We want to ensure a seamless experience across all devices so users can manage their tasks and schedules on the go. Lastly, integrate more third-party APIs such as Gmail and Notion as an all-in-one application.</p>`,
    githubUrl: "https://github.com/jeffreyyeet1/cop",
    websiteUrl: "https://devpost.com/software/clash-of-plans?ref_content=my-projects-tab&ref_feature=my_projects"
  }
];

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project not found</h1>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? project.media.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === project.media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        ← Back to Home
      </Link>
      
      <div className={styles.projectHeader}>
        <h1>{project.title}</h1>
        <div className={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.projectImage}>
        <div className={styles.projectLinks}>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.projectLink}
          >
            <SiGithub /> Github
          </a>
          <a 
            href={project.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.projectLink}
          >
            <FiExternalLink /> Link
          </a>
        </div>
        
        <div className={styles.carousel}>
          <div className={styles.carouselIndicators}>
            {project.media.map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselIndicator} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <div className={styles.carouselInner}>
            {project.media.map((media, index) => (
              <div 
                key={index} 
                className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
              >
                {media.type === 'image' && (
                  <Image 
                    src={media.url} 
                    alt={media.alt} 
                    width={1000} 
                    height={1000} 
                    style={{ objectFit: 'cover' }} 
                  />
                )}
                {media.type === 'video' && (
                  <video 
                    controls 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {media.type === 'youtube' && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${media.url}`}
                    title={media.alt}
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>
          
          <button 
            className={styles.carouselControlPrev} 
            onClick={handlePrev}
          >
            ←
          </button>
          
          <button 
            className={styles.carouselControlNext} 
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.projectContent}>
        <div 
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
        />
      </div>
    </div>
  );
} 