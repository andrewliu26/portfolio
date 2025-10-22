"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="back-button"
    >
      <ArrowLeft size={14} className="arrow" />
      <span className="text">Back</span>
    </Link>
  );
}