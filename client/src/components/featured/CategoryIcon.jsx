import React from 'react';
import { useFetch } from '@hooks';
import { Loading, Button, ProductImage } from '@components';

export const CategoryIcon = ({ category }) => {
  const { data, loading } = useFetch(`categories/${category}`);
  const { display: categoryName, link: categoryLink } = category;
  const product = [data];

  if (loading) return <Loading />;

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
      <span>{categoryName}</span>
    </Button>
  );
};
