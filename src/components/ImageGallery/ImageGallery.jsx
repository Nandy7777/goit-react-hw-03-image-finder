import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery({ results }) {
  return (
    <>
      <Gallery>
        {results.map(result => (
          <ImageGalleryItem
            key={result.id}
            webformatURL={result.webformatURL}
            tegs={result.tags}
          />
        ))}
      </Gallery>
    </>
  );
}
