"use client";

import React from 'react';
import Image from 'next/image';

interface MediaItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  artist?: string;
  className?: string;
}

export default function MediaItem({
  imageSrc,
  imageAlt,
  title,
  artist,
  className = ''
}: MediaItemProps) {
  return (
    <div className={`media-item ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={40}
        height={40}
        className="media-item-image"
      />
      <div className="media-item-content">
        <p className="media-item-title">{title}</p>
        {artist && <p className="media-item-artist">{artist}</p>}
      </div>
    </div>
  );
}
