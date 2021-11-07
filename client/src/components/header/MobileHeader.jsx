import { React, useState } from 'react';
import { ReactComponent as FullLogo } from '@icons/logo-long.svg';
import { ReactComponent as HamburgerMenuImg } from '@icons/menu.svg';
import { ReactComponent as CloseMenuImg } from '@icons/cancel.svg';

import { Button } from '@components';
import { SearchBar } from './SearchBar';

export const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="grid grid-cols-mobile-menu items-center w-full px-8 my-7 md:hidden">
      <HamburgerMenuImg onClick={() => setShowMenu(true)} />
      <Button link="/" className="justify-self-center">
        <FullLogo className="header-logo" />
      </Button>
      {showMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-300 bg-opacity-50">
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
            <div>
              <SearchBar />
              <Button link="/products" className="text-lg my-3">
                Products
              </Button>
              <Button link="/signup" className="text-lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
