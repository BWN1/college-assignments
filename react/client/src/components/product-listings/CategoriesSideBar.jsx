import React from 'react';
import { useCategories } from '@hooks';
import { Loading } from '@components';
import { Button } from '../common/Button';

export const CategoriesSideBar = ({ currentCategory }) => {
  const categories = useCategories();

  if (!categories) return <Loading container="w-1/3 h-10" />;

  return (
    <nav className="flex flex-col items-start px-10 text-lg md:mr-10">
      <h3 className="subheader mb-2">Categories</h3>
      {categories.map(({ display, link }) => (
        <Button
          key={display}
          link={link}
          styles={`my-1 hover:text-accent-400 ${
            display.toLowerCase() === currentCategory && 'text-accent-300'
          }`}
        >
          {display}
        </Button>
      ))}
    </nav>
  );
};
