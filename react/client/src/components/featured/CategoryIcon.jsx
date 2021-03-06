import React from 'react';
import { useFetch } from '@hooks';
import { Loading, Button, ProductImage } from '@components';
import { API_PATHS } from '../../staticConfig';

export const CategoryIcon = ({ category }) => {
  const { display: categoryName, link: categoryLink } = category;
  const { data, loading } = useFetch(
    `${API_PATHS.categories}${categoryName.toLowerCase()}`
  );
  const [product] = data;

  if (loading) return <Loading size="50%" container="w-20 h-20" />;

  return (
    <Button
      link={categoryLink}
      styles="grid grid-cols-1 gap-y-4 text-accent-500 text-center hover:underline"
    >
      <ProductImage
        url={product.photoURL}
        alt="category item"
        styles="category-image"
      />
      <span>{categoryName}</span>
    </Button>
  );
};
