import React from 'react';

const Button = ({ className, link, children }) => {
  return (
    <div className={className}>
      <a href={link}>{children}</a>
    </div>
  );
};

export default Button;
