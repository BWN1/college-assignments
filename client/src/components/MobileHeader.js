import React from 'react';
import { ReactComponent as FullLogo } from '../assets/icons/logo-long.svg';
import { ReactComponent as MenuImg } from '../assets/icons/menu.svg';

const MobileHeader = () => {
  return (
    <nav className="grid grid-cols-mobile-menu items-center w-full px-8 my-7">
      <MenuImg />
      <a href="/" className="justify-self-center">
        <FullLogo className="header-logo" />
      </a>
    </nav>
  );
};

export default MobileHeader;
