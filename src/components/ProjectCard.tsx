"use client";

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  date: string;
  target?: string;
}

export default function ProjectCard({ 
  href, 
  imageSrc, 
  imageAlt, 
  projectName, 
  date, 
  target = "_self" 
}: ProjectCardProps) {
  return (
    <Link 
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s ease, opacity 0.2s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.opacity = "0.9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
      <img 
        src={imageSrc}
        alt={imageAlt}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "12px"
        }}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#111111"
        }}>
          {projectName}
        </span>
        <span style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "0.813rem",
          color: "#4e4e4e",
        }}>
          {date}
        </span>
      </div>
    </Link>
  );
}
