import { React, useState, useEffect } from 'react';
import { ReactComponent as FullLogo } from '@images/logo-long.svg';
import { ReactComponent as HamburgerMenuImg } from '@icons/menu.svg';
import { ReactComponent as CloseMenuImg } from '@icons/cancel.svg';

import { Button, Loading } from '@components';
import { SearchBar } from './SearchBar';
import { useCategories } from '@hooks';

export const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const categories = useCategories();

  useEffect(() => {
    const bodyClasses = document.body.classList;
    showMenu
      ? bodyClasses.add('overflow-hidden')
      : bodyClasses.remove('overflow-hidden');
  }, [showMenu]);

  if (!categories) return <Loading container="my-4" size="50" />;

  return (
    <nav className="grid grid-cols-mobile-menu items-center w-full px-8 my-7 md:hidden">
      <HamburgerMenuImg onClick={() => setShowMenu(true)} />
      <Button link="/" className="justify-self-center">
        <FullLogo className="header-logo" />
      </Button>
      {showMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-300 bg-opacity-50 z-10">
          <div className="bg-white w-5/6 px-8 py-7 h-full">
            <div className="grid grid-cols-mobile-menu items-center mb-4">
              <CloseMenuImg
                className="w-8"
                onClick={() => setShowMenu(false)}
              />
              <Button link="/" className="justify-self-center">
                <FullLogo />
              </Button>
            </div>
            <div className="flex flex-col space-y-4 text-lg">
              <SearchBar />
              <Button link="/signup">Sign Up</Button>
              <Button link="/products">Products</Button>
              <div className="flex flex-col space-y-3 pt-2">
                <h3 className="font-bold">Categories</h3>
                {categories.map(({ display, link }) => (
                  <Button link={link}>{display}</Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
