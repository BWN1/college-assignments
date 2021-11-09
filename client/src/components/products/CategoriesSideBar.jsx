import React from 'react';
import { useFetch } from '@hooks';
import { Loading } from '@components';

export const CategoriesSideBar = () => {
  const categories = useFetch('categories');

  if (!categories) return <Loading />;

  return (
    <nav className="flex flex-col items-start px-10 text-lg">
      <h4 className="font-semibold mb-2">Categories</h4>
      {categories.map((category) => (
        <a
          href={`categories/${category}`}
          className="my-1 hover:text-accent-300"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </a>
      ))}
    </nav>
  );
};
