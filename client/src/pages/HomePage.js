import React from 'react';
import { Header, HeroSlider, ShopByCategory, BestSellers } from '@components';

export const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <ShopByCategory />
      <BestSellers />
    </>
  );
};
