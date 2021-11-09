import React from 'react';
import {
  PageContentContainer,
  Header,
  Footer,
  Loading,
  ListedProduct,
  CategoriesSideBar,
} from '@components';
import { useFetch, useIsMobile } from '@hooks';
import { useParams } from 'react-router';

export const CategoriesPage = () => {
  const { category } = useParams();
  const categories = useFetch(`categories/${category}`);
  const isMobile = useIsMobile();

  if (!categories) return <Loading />;

  return (
    <>
      <Header />
      <PageContentContainer className="flex flex-col my-5 max-w-screen-xl m-auto">
        <h2 className="text-3xl font-semibold text-center mb-7 md:mb-8 md:text-4xl">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <div className="flex w-full">
          {!isMobile && <CategoriesSideBar currentCategory={category} />}
          <div className="md:flex md:flex-wrap w-full px-2">
            {categories.slice(0, 12).map((product) => (
              <ListedProduct product={product} />
            ))}
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
