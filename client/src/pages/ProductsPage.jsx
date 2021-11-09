import React from 'react';
import {
  PageContentContainer,
  Header,
  Footer,
  Loading,
  Product,
  CategoriesSideBar,
} from '@components';
import { useFetch } from '@hooks';

export const ProductsPage = () => {
  const products = useFetch('products');

  if (!products) return <Loading />;

  return (
    <>
      <Header />
      <PageContentContainer className="flex my-5 max-w-screen-xl m-auto">
        <CategoriesSideBar />
        <div className="ml-10 flex flex-wrap">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
