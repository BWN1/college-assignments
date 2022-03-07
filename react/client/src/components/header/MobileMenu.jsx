import React, { useEffect } from 'react';
import { ReactComponent as CloseMenuImg } from '@icons/cancel.svg';
import { ReactComponent as FullLogo } from '@images/logo-long.svg';
import { SearchBar } from './SearchBar';
import { Button } from '@components';

export const MobileMenu = ({ showMenu, categories }) => {
  useEffect(() => {
    document.getElementById('mobile-menu-shade').classList.remove('opacity-0');
  });

  const handleClick = () => {
    const menu = document.getElementById('mobile-menu-shade');
    menu.classList.add('opacity-0');
    menu.addEventListener('transitionend', () => showMenu(false));
    return menu.removeEventListener('transitionend', () => showMenu(false));
  };

  return (
    <div
      id="mobile-menu-shade"
      className="fixed top-0 left-0 w-screen h-screen 
            bg-gray-300 bg-opacity-50 z-10 opacity-0 transition-all duration-300"
    >
      <div id="mobile-menu" className="bg-white w-5/6 px-8 py-7 h-screen z-10">
        <div className="grid grid-cols-mobile-menu items-center mb-4">
          <CloseMenuImg className="w-8" onClick={handleClick} />
          <Button link="/" styles="justify-self-center">
            <FullLogo />
          </Button>
        </div>
        <div className="flex flex-col items-start space-y-4 text-lg">
          <SearchBar />
          <Button link="/signup">Sign Up</Button>
          <Button link="/products">Products</Button>
          <div className="flex flex-col items-start space-y-3 pt-2">
            <h3 className="subheader">Categories</h3>
            {categories.map(({ display, link }) => (
              <Button key={display} link={link}>
                {display}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
