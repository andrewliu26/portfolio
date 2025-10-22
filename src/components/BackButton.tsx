"use client";

import React, { useState } from "react";
import Link from "next/link";

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
      <span className="arrow">←</span>
      <span className="text">Back</span>
    </Link>
  );
}