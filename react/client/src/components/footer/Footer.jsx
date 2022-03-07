import React from 'react';
import { useIsMobile, useCategories } from '@hooks';
import { Loading, Button } from '@components';
import { FooterGroup } from './FooterGroup';
import { SocialsGroup } from './SocialsGroup';
import { ReactComponent as Logo } from '@images/logo-long.svg';

export const Footer = () => {
  const categories = useCategories();
  const isMobile = useIsMobile();

  if (!categories) return <Loading container="h-32" />;

  return (
    <footer className="flex-x-center flex-col pb-8 bg-gray-100">
      <nav className="my-8 flex-y-center">
        <FooterGroup header="Explore" links={footerLinks.general} />
        {!isMobile && <FooterGroup header="Categories" links={categories} />}
        <SocialsGroup />
      </nav>
      <Button link="/">
        <Logo />
      </Button>
    </footer>
  );
};

const footerLinks = {
  general: [
    { display: 'Home', link: '/' },
    { display: 'Products', link: '/products' },
    { display: 'Sign up', link: '/signup' },
  ],
};
