import { React, useState, useEffect } from 'react';
import { ReactComponent as FullLogo } from '@images/logo-long.svg';
import { ReactComponent as HamburgerMenuImg } from '@icons/menu.svg';

import { Button, Loading } from '@components';
import { MobileMenu } from './MobileMenu';
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
      <Button link="/" styles="justify-self-center">
        <FullLogo className="header-logo" />
      </Button>
      {showMenu && (
        <MobileMenu showMenu={setShowMenu} categories={categories} />
      )}
    </nav>
  );
};
