import React from 'react';
import { useCategories } from '@hooks';
import { CategoryIcon } from './CategoryIcon';
import { Loading } from '@components';

export const ShopByCategory = () => {
  const categories = useCategories();

  if (!categories) return <Loading container="h-80" />;

  return (
    <section className="homepage-featured-section">
      <h4 className="text-2xl md:text-3xl mb-8">Shop by category</h4>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8">
        {categories.map((category) => (
          <CategoryIcon key={category.display} category={category} />
        ))}
      </div>
    </section>
  );
};
