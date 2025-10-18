"use client";

import React from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  icon: string;
  children: React.ReactNode;
  target?: string;
}

export default function LinkButton({ href, icon, children, target }: LinkButtonProps) {
  return (
    <Link 
      href={href}
      target={target || "_blank"}
      rel="noopener noreferrer"
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "10px",
        textDecoration: "none",
        color: "inherit",
        fontFamily: "var(--font-geist-sans), sans-serif",
        fontSize: "0.875rem",
        margin: "0",
        transition: "color 0.2s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#111111";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "inherit";
      }}
    >
      <img src={icon} alt={children as string} style={{ height: "16px" }} />
      {children}
    </Link>
  );
}
