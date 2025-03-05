'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/project.module.css';
import Image from 'next/image';
const projects = [
  {
    title: "Wordle+",
    description: "Wordle, but more..",
    image: "/images/projects/wordleplus.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "Render"],
    slug: "wordle-plus",
    fullDescription: "A feature-rich version of the popular word game Wordle with additional gameplay modes, statistics tracking, and multiplayer capabilities.",
    githubUrl: "https://github.com/jeffreyyeet1/wordleplus",
    websiteUrl: "https://wordleplus.onrender.com"
  },
  {
    title: "MockMate",
    description: "Personal AI Interview Assistant",
    image: "/images/projects/mockmate.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS RDS", "Prisma", "Vercel"],
    slug: "mockmate",
    fullDescription: "An AI-powered interview preparation platform that provides personalized mock interviews, feedback, and improvement suggestions.",
    githubUrl: "https://github.com/tmanzhe/mockmate",
    websiteUrl: "https://www.youtube.com/watch?v=F-JwSP1WrHE"
  },
  {
    title: "Project 3",
    description: "A brief description of your third project",
    image: "/images/projects/project3.jpg",
    technologies: ["Python", "Django", "PostgreSQL"],
    slug: "project-3",
    fullDescription: "Detailed description of project 3 and its features.",
    githubUrl: "https://github.com/jeffreyyeet1/project3",
    websiteUrl: "https://project3.com"
  }
];

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);

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
        <Image src={project.image} alt={project.title} width={1000} height={1000} style={{ objectFit: 'cover' }} />
      </div>

      <div className={styles.projectContent}>
        <p className={styles.description}>
          {project.fullDescription}
        </p>
      </div>
    </div>
  );
} 