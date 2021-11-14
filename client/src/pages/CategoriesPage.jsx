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
import { useParams } from 'react-router';
import { API_PATHS } from '../staticConfig';

export const CategoriesPage = () => {
  const { category } = useParams();
  const { data: products, loading } = useFetch(
    `${API_PATHS.categories}${category}`
  );
  const isMobile = useIsMobile();

  if (loading) return <Loading fullscreen />;

  return (
    <>
      <Header />
      <PageContentContainer className="flex flex-col my-5 max-w-screen-xl m-auto">
        <h2 className="header-md text-center mb-7 md:mb-8 md:header-lg">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <div className="flex w-full">
          {!isMobile && <CategoriesSideBar currentCategory={category} />}
          <div className="md:flex md:flex-wrap w-full px-2 divide-y md:divide-y-0">
            {products.map((product) => (
              <ProductListing product={product} />
            ))}
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
