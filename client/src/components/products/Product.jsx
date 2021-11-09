import React from 'react';

export const Product = ({ product }) => {
  const { photoURL, name, price, category, bestSeller, productId } = product;
  const productUrl = `products/${productId}`;

  return (
    <div className="p-4 mx-2 my-4 w-72 border rounded-lg">
      <div className="grid grid-cols-1 grid-rows-auto gap-2 h-full w-full">
        {bestSeller && (
          <div className="bg-accent-300">
            <span>Best Seller</span>
          </div>
        )}
        <a href={productUrl} className="block h-3/4 w-full bg-gray-200">
          <img src={photoURL} alt="product" className="rounded" />
        </a>
        <div>
          <a
            href={productUrl}
            className="w-full inline-block overflow-ellipsis 
            overflow-hidden whitespace-nowrap font-semibold hover:underline"
          >
            {name}
          </a>
          <p>{`$${price}`}</p>
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
        </div>
      </div>
    </div>
  );
};
