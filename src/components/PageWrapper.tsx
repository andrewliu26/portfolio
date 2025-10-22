"use client";

import React, { useState, useEffect } from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  imageUrls?: string[];
}

export default function PageWrapper({ children, imageUrls = [] }: PageWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const handleImageLoad = () => {
      loadedCount++;
      setImagesLoaded(loadedCount);
      
      if (loadedCount === totalImages) {
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoaded(true);
        }, 100);
      }
    };

    const handleImageError = () => {
      loadedCount++;
      setImagesLoaded(loadedCount);
      
      if (loadedCount === totalImages) {
        setTimeout(() => {
          setIsLoaded(true);
        }, 100);
      }
    };

    // Preload all images
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      img.src = url;
    });

    return () => {
      // Cleanup if component unmounts
      imageUrls.forEach(url => {
        const img = new Image();
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return (
    <div
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(5px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
}
