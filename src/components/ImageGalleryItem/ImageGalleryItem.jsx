import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  id,
  webformatURL,
  // largeImageURL,
  // onClick,
  tags,
}) {
  return (
    <GalleryItem key={id}>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        // onClick={() => onClick(largeImageURL, tags)}
      />
    </GalleryItem>
  );
}
