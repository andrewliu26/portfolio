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
      className={`px-[20px] py-[10px] bg-[#111111] text-white rounded-full hover:bg-[#414141] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
