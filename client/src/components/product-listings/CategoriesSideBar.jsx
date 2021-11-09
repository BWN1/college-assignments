import React from 'react';
import { useFetch } from '@hooks';
import { Loading } from '@components';
import { Button } from '../common/Button';

export const CategoriesSideBar = ({ currentCategory }) => {
  const categories = useFetch('categories');

  if (!categories) return <Loading />;

  return (
    <nav className="flex flex-col items-start px-10 text-lg md:mr-10">
      <h4 className="font-semibold mb-2">Categories</h4>
      {categories.map((category) => (
        <Button
          link={`/categories/${category}`}
          className={`my-1 hover:text-accent-400 ${
            category === currentCategory && 'text-accent-300'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </nav>
  );
};
