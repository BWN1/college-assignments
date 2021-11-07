import React from 'react';

const Button = ({ className, link, children }) => {
  return (
    <>
      <a href={link} className={className}>
        {children}
      </a>
    </>
  );
};

export default Button;
