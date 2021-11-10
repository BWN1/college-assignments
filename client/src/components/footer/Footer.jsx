import React from 'react';
import { useFetch, useIsMobile } from '@hooks';
import { Loading, Button } from '@components';
import { FooterGroup } from './FooterGroup';
import { ReactComponent as Logo } from '@icons/logo-long.svg';

export const Footer = () => {
  const categories = useFetch('categories');
  const isMobile = useIsMobile();

  if (!categories) return <Loading className="w-32" />;

  return (
    <footer className="flex flex-col items-center border-t mb-8">
      <nav className="my-8 flex justify-center">
        <FooterGroup header="Explore" links={footerLinks.general} />
        {!isMobile && (
          <FooterGroup
            header="Categories"
            links={categories.map((category) => ({
              display: category,
              link: `/categories/${category}`,
            }))}
          />
        )}
        <FooterGroup header="Follow us" links={footerLinks.socials} />
      </nav>
      <Button link="/">
        <Logo />
      </Button>
    </footer>
  );
};

const footerLinks = {
  general: [
    { display: 'home', link: '/' },
    { display: 'Products', link: '/products' },
    { display: 'Sign up', link: '/signup' },
  ],
  socials: [
    { display: 'Twitter', link: 'https://www.twitter.com/shopmart' },
    { display: 'Instagram', link: 'https://www.instagram.com/shopmart' },
    { display: 'Facebook', link: 'https://www.facebook.com/shopmart' },
  ],
};
