import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ styles, link, children }) => {
  return (
    <Link to={link} className={styles}>
      {children}
    </Link>
  );
};
