import { React, useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo-long.svg';

import { config } from '../../staticConfig';
import { Button } from '../common';
import SearchBar from './SearchBar';
import MobileHeader from './MobileHeader';

const Header = () => {
  const { MEDIA_BREAKPOINTS } = config;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MEDIA_BREAKPOINTS.sm
  );

  useEffect(() => {
    const handleWindowSizeChange = () =>
      setIsMobile(window.innerWidth <= MEDIA_BREAKPOINTS.sm);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [MEDIA_BREAKPOINTS]);

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
              className="text-xl ml-10 hover:text-accent-400 transition duration-75 ease-in-out"
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
