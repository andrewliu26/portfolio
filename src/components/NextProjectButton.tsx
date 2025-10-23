"use client";

import React from 'react';
import Link from 'next/link';
import ThemeImage from './ThemeImage';
import { ArrowRight } from 'lucide-react';

interface NextProjectButtonProps {
  href: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  projectTitle: string;
  target?: string;
}

export default function NextProjectButton({ 
  href, 
  thumbnailSrc, 
  thumbnailAlt, 
  projectTitle, 
  target = "_self" 
}: NextProjectButtonProps) {
  return (
    <Link 
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="next-project-button"
    >
      <ThemeImage 
        src={thumbnailSrc}
        alt={thumbnailAlt}
        className="next-project-thumbnail"
      />
      <div className="next-project-content">
        <span className="next-project-label">NEXT PROJECT</span>
        <span className="next-project-title">{projectTitle}</span>
      </div>
      <ArrowRight size={16} className="next-project-arrow" style={{ marginRight: "10px" }} />
    </Link>
  );
}
