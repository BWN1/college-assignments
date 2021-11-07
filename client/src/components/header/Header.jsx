import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo-long.svg';
import { Button } from '../common';
import SearchBar from './SearchBar';
import MobileHeader from './MobileHeader';
import { useIsMobile } from '../../hooks';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-center">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <nav className="flex items-center justify-between w-full max-w-screen-xl px-8 my-4">
          <div className="flex justify-center items-center">
            <Button link="/">
              <Logo className="header-logo" />
            </Button>
            <Button
              link="/products"
              className="text-xl mx-4 lg:mx-10 hover:text-accent-400 transition duration-75 ease-in-out"
            >
              Products
            </Button>
          </div>
          <div id="search" className="max-w-lg flex-grow-0 lg:flex-grow">
            <SearchBar />
          </div>
          <Button link="/signup" className="cta-button">
            Sign Up
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
