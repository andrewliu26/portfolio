"use client";

import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function PrimaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  type = 'button',
  className = ''
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`primary-button ${className}`}
    >
      {children}
    </button>
  );
}
