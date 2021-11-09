import React from 'react';
import {
  PageContentContainer,
  Header,
  Footer,
  Loading,
  Product,
  CategoriesSideBar,
} from '@components';
import { useFetch, useIsMobile } from '@hooks';

export const ProductsPage = () => {
  const products = useFetch('products');
  const isMobile = useIsMobile();

  if (!products) return <Loading />;

  return (
    <>
      <Header />
      <PageContentContainer className="flex flex-col my-5 max-w-screen-xl m-auto">
        <h2 className="text-3xl font-semibold text-center mb-7 md:mb-8 md:text-4xl">
          All Products
        </h2>
        <div className="flex w-full">
          {!isMobile && <CategoriesSideBar />}
          <div className="md:flex md:flex-wrap w-full px-2">
            {products.slice(0, 12).map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
