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

export const ProductDescriptionPage = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`products/${id}`);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <PageContentContainer className="flex flex-col md:flex-row p-4 justify-center m-auto mb-2">
        <ProductImage
          url={product.photoURL}
          size={512}
          className="w-full max-w-sm lg:max-w-lg self-center"
        />
        <div className="mt-5 md:ml-10 space-y-5 md:w-1/3">
          <div>
            <h4 className="text-3xl md:text-4xl font-semibold">
              {product.name}
            </h4>
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
            <h4 className="text-lg font-semibold pb-1">Description</h4>
            <p className="pt-2">{product.description}</p>
          </div>
        </div>
      </PageContentContainer>
      <Footer />
    </>
  );
};
