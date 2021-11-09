import React from 'react';
import { useResizeImage } from '@hooks';

export const ProductImage = ({
  url,
  size = 150,
  className,
  alt = 'product',
}) => {
  const resizedImage = useResizeImage(url, size);

  return (
    <img src={resizedImage} alt={alt} className={className} loading="eager" />
  );
};
