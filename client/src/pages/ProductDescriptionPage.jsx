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
      <PageContentContainer className="flex-y-center flex-col md:flex-row p-4 mb-2">
        <ProductImage
          url={product.photoURL}
          size={512}
          className="w-full max-w-sm lg:max-w-lg self-center"
        />
        <div className="mt-5 md:ml-10 space-y-5 md:w-1/3">
          <div>
            <h2 className="header-md md:header-lg">
              {product.name}
            </h2>
            <p className="text-2xl text-accent-400 my-1">{`$${product.price}`}</p>
            <Button
              link={`/categories/${product.category}`}
              className="text-gray-500 text-xl font-normal"
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
