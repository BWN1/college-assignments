import React from 'react';
import {
  PageContentContainer,
  Header,
  HeroSlider,
  ShopByCategory,
  BestSellers,
  Footer,
} from '@components';

export const HomePage = () => {
  return (
    <>
      <Header />
      <PageContentContainer>
        <HeroSlider />
        <ShopByCategory />
        <BestSellers />
      </PageContentContainer>
      <Footer />
    </>
  );
};
