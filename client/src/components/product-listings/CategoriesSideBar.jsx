import React from 'react';
import { useCategories } from '@hooks';
import { Loading } from '@components';
import { Button } from '../common/Button';

export const CategoriesSideBar = ({ currentCategory }) => {
  const categories = useCategories();

  if (!categories) return <Loading />;

  return (
    <nav className="flex flex-col items-start px-10 text-lg md:mr-10">
      <h4 className="font-semibold mb-2">Categories</h4>
      {categories.map(({ display, link }) => (
        <Button
          key={display}
          link={link}
          className={`my-1 hover:text-accent-400 ${
            display.toLowerCase() === currentCategory && 'text-accent-300'
          }`}
        >
          {display}
        </Button>
      ))}
    </nav>
  );
};
