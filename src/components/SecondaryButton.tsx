"use client";

import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function SecondaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  type = 'button',
  className = ''
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`secondary-button ${className}`}
    >
      {children}
    </button>
  );
}
