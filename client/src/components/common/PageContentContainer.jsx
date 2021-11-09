import React from 'react';

export const PageContentContainer = ({ className, children }) => {
  return (
    <main className={`max-w-screen-xl m-auto ${className}`}>{children}</main>
  );
};
