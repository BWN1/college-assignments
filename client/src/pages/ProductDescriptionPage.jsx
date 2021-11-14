import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from '@hooks';
import {
  Loading,
  Header,
  Footer,
  ProductImage,
  PageContentContainer,
  Button,
} from '@components';
import { API_PATHS } from '../staticConfig';

export const ProductDescriptionPage = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`${API_PATHS.products}${id}`);

  if (loading) return <Loading fullscreen />;

  return (
    <>
      <Header />
      <PageContentContainer styles="flex-center flex-col lg:flex-row p-4 my-10">
        <ProductImage
          url={product.photoURL}
          size={512}
          styles="w-full max-w-xl px-4 lg:pt-12 lg:max-w-lg lg:self-start lg:sticky lg:top-0"
        />
        <div className="max-w-xl lg:w-2/5 mt-5 md:ml-10 space-y-10">
          <div>
            <h2 className="header-xs md:header-sm lg:header-md">
              {product.name}
            </h2>
            <p className="text-2xl text-accent-400 my-1">{`$${product.price}`}</p>
            <Button
              link={`/categories/${product.category}`}
              styles="text-gray-500 text-xl font-normal"
            >
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </Button>
          </div>
          <div className="divide-y">
            <h3 className="subheader pb-1">Description</h3>
            <p className="pt-2">{product.description}</p>
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
