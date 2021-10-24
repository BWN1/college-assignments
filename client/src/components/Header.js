import { React, useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/icons/logo-long.svg';
import { ReactComponent as SearchImg } from '../assets/icons/search.svg';

import { default as MobileHeader } from './MobileHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleWindowSize = () =>
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return (
    <header className="flex items-center justify-center">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <nav className="flex flex-col w-screen my-4">
          <div id="nav-top" className="nav-container">
            <div className="nav-content mb-4">
              <div id="nav-top-left" className="flex items-center">
                <a href="/">
                  <Logo className="header-logo" />
                </a>
              </div>
              <div id="search" className="max-w-lg flex-grow-0 lg:flex-grow">
                <form action="/" method="post" className="search-form">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="search-form-input"
                  />
                  <button type="submit">
                    <SearchImg />
                  </button>
                </form>
              </div>
              <div id="nav-top-right" className="flex items-center">
                <a href="/signup" className="cta-button">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div id="nav-bottom" className="nav-container bg-gray-200">
            <div className="nav-content py-2">
              <ul>
                <li>
                  <a href="/products" className="product-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/categories" className="product-link">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
