import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  openModal,
  tags,
}) {
  return (
    <GalleryItem key={id} onClick={openModal}>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
      />
    </GalleryItem>
  );
}
