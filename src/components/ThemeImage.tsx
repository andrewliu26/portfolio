"use client";

import React, { useState, useEffect } from 'react';

interface ThemeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function ThemeImage({ src, alt, width, height, style, className }: ThemeImageProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkTheme();

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Generate dark theme image path
  const getDarkSrc = (originalSrc: string) => {
    // Extract directory and filename
    const lastSlash = originalSrc.lastIndexOf('/');
    const directory = originalSrc.substring(0, lastSlash);
    const filename = originalSrc.substring(lastSlash + 1);
    
    // Insert 'dark/' before filename
    return `${directory}/dark/${filename.replace('.', '-dark.')}`;
  };

  const imageSrc = isDark ? getDarkSrc(src) : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
    />
  );
}
