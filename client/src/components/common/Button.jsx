import React from 'react';

export const Button = ({ className, link, children }) => {
  return (
    <a href={link} className={className}>
      {children}
    </a>
  );
};
