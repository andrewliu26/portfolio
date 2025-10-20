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
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        width: hovered ? "85px" : "40px",
        height: "40px",
        border: "1px solid #d0d0d0",
        borderRadius: "50px",
        backgroundColor: hovered ? "#f8f8f8" : "white",
        color: "#333",
        textDecoration: "none",
        overflow: "hidden",
        transition: "width 0.3s ease, background-color 0.2s ease",
        padding: "0 13px",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          flexShrink: 0, // keeps arrow from shifting
        }}
      >
        ←
      </span>
      <span
        style={{
          opacity: hovered ? 1 : 0,
          whiteSpace: "nowrap",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "0.875rem",
        }}
      >
        Back
      </span>
    </Link>
  );
}