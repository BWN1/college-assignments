import React from 'react';

export const ExternalLink = ({ styles, link, children }) => {
  return (
    <a href={link} className={styles} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
