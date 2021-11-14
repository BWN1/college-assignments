import React from 'react';
import {
  PageContentContainer,
  Header,
  Footer,
  Loading,
  ProductListing,
  CategoriesSideBar,
} from '@components';
import { useFetch, useIsMobile } from '@hooks';
import { API_PATHS } from '../staticConfig';

export const ProductsPage = () => {
  const { data: products, loading } = useFetch(API_PATHS.products);
  const isMobile = useIsMobile();

  if (loading) return <Loading fullscreen />;

  return (
    <>
      <Header />
      <PageContentContainer styles="flex-center flex-col my-5">
        <h2 className="header-md md:header-lg mb-7 md:mb-8">All Products</h2>
        <div className="flex w-full">
          {!isMobile && <CategoriesSideBar />}
          <div className="md:flex md:flex-wrap w-full px-2 divide-y md:divide-y-0">
            {products.map((product) => (
              <ProductListing key={product.name} product={product} />
            ))}
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
