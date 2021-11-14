import React from 'react';
import { ReactComponent as Logo } from '@images/logo-long.svg';
import { Button } from '@components';
import { SearchBar } from './SearchBar';
import { MobileHeader } from './MobileHeader';
import { useIsMobile } from '@hooks';

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="flex-center bg-gray-50">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <nav className="flex-x-center justify-between w-full max-w-screen-xl px-8 my-4">
          <div className="flex-center">
            <Button link="/">
              <Logo className="header-logo" />
            </Button>
            <Button
              link="/products"
              styles="text-xl mx-4 lg:mx-10 hover:text-accent-400 transition duration-75 ease-in-out"
            >
              Products
            </Button>
          </div>
          <div id="search" className="max-w-lg flex-grow-0 lg:flex-grow">
            <SearchBar />
          </div>
          <Button link="/signup" styles="cta-button">
            Sign Up
          </Button>
        </nav>
      )}
    </header>
  );
};
