import React from 'react';

export const PageContentContainer = ({ styles, children }) => {
  return <main className={`max-w-screen-xl m-auto ${styles}`}>{children}</main>;
};
