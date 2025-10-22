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
      className="link-button"
    >
      <img src={icon} alt={children as string} />
      {children}
    </Link>
  );
}
