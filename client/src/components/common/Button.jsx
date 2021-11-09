import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ className, link, children }) => {
  return (
    <Link to={link} className={className}>
      {children}
    </Link>
  );
};
