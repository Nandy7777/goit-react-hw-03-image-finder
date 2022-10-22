import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tegs={image.tags}
          largeImageURL={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
}
