import React from 'react';
import { useFetch } from '@hooks';
import { Loading, Button, ProductImage } from '@components';

export const CategoryIcon = ({ category }) => {
  const categoryLink = `categories/${category}`;
  const [product] = useFetch(categoryLink);

  if (!product) return <Loading />;

  return (
    <Button
      link={categoryLink}
      className="grid grid-cols-1 gap-y-4 text-accent-500 text-center hover:underline"
    >
      <ProductImage
        url={product.photoURL}
        alt="category item"
        className="category-image"
      />
      <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
    </Button>
  );
};
