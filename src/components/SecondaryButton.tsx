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
      className={`px-[20px] py-[10px] bg-[#f0f0f0] text-[#111111] rounded-full hover:bg-[#e9e9e9] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        fontFamily: 'var(--font-geist-sans), sans-serif',
        fontSize: '0.875rem',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
}
