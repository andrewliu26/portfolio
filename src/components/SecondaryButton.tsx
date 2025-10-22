"use client";

import React from 'react';
import Link from 'next/link';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
}

export default function SecondaryButton({ 
  children, 
  onClick, 
  href,
  disabled = false, 
  type = 'button',
  className = '',
  target
}: SecondaryButtonProps) {
  const buttonClasses = `secondary-button ${className}`;

  if (href) {
    return (
      <Link 
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        style={{ textDecoration: 'none' }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
