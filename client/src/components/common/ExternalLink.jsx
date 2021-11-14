import React from 'react';

export const ExternalLink = ({ className, link, children }) => {
  return (
    <a href={link} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
