import React from 'react';
import { Button, ProductImage } from '@components';

export const ProductListing = ({ product }) => {
  const { photoURL, name, price, category, bestSeller, productId } = product;
  const productUrl = `/products/${productId}`;

  return (
    <div className="product-wrapper">
      <Button link={productUrl} styles="product-image">
        <ProductImage url={photoURL} alt={name} />
      </Button>
      <div className="ml-4 w-1/2 md:mt-4 md:ml-0 md:w-full md:flex-1">
        {bestSeller && <p className="text-accent-400 text-sm">Best Seller</p>}
        <Button link={productUrl} styles="product-name">
          {name}
        </Button>
        <p>{`$${price}`}</p>
        <p className="mt-1 text-sm">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      </div>
    </div>
  );
};
