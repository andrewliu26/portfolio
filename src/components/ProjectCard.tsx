"use client";

import React from 'react';
import Link from 'next/link';
import ThemeImage from './ThemeImage';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  date: string;
  target?: string;
}

export default function ProjectCard({ 
  href, 
  imageSrc, 
  imageAlt, 
  projectName, 
  date, 
  target = "_self" 
}: ProjectCardProps) {
  return (
    <Link 
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="project-card"
    >
      <ThemeImage 
        src={imageSrc}
        alt={imageAlt}
        className="project-card-image"
      />
      <div className="project-card-content">
        <span className="project-card-name">
          {projectName}
        </span>
        <span className="project-card-date">
          {date}
        </span>
      </div>
    </Link>
  );
}
