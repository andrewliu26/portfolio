"use client";

import React from 'react';
import Link from 'next/link';
import { FaFigma, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface LinkButtonProps {
  href: string;
  icon: string;
  children: React.ReactNode;
  target?: string;
}

export default function LinkButton({ href, icon, children, target }: LinkButtonProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'figma':
        return <FaFigma size={16} />;
      case 'linkedin':
        return <FaLinkedin size={16} />;
      case 'github':
        return <FaGithub size={16} />;
      case 'mail':
        return <FaEnvelope size={16} />;
      default:
        return <FaFigma size={16} />;
    }
  };

  return (
    <Link 
      href={href}
      target={target || "_blank"}
      rel="noopener noreferrer"
      className="link-button"
    >
      {getIcon(icon)}
      {children}
    </Link>
  );
}
