import React from 'react';
import { useFetch } from '@hooks';
import { Loading } from '@components';
import { FooterGroup } from './FooterGroup';

export const Footer = () => {
  const categories = useFetch('categories');

  if (!categories) return <Loading className="w-32" />;

  return (
    <footer className="flex items-center justify-center border-t">
      <nav className="my-8 flex">
        <FooterGroup header="Shopmart" links={footerLinks.general} />
        <FooterGroup
          header="Categories"
          links={categories.map((category) => ({
            display: category,
            link: `/categories/${category}`,
          }))}
        />
        <FooterGroup header="Follow us" links={footerLinks.socials} />
      </nav>
    </footer>
  );
};

const footerLinks = {
  general: [
    { display: 'home', link: '/' },
    { display: 'Products', link: '/products' },
    { display: 'Best sellers', link: '/best-sellers' },
    { display: 'Sign up', link: '/signup' },
  ],
  socials: [
    { display: 'Twitter', link: 'https://www.twitter.com/shopmart' },
    { display: 'Instagram', link: 'https://www.instagram.com/shopmart' },
    { display: 'Facebook', link: 'https://www.facebook.com/shopmart' },
  ],
};
