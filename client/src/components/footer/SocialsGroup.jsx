import React from 'react';
import { ExternalLink } from '@components';

export const SocialsGroup = () => {
  return (
    <div className="flex flex-col px-10">
      <h3 className="subheader mb-1">Follow Us</h3>
      {socialLinks.map(({ display, link }) => (
        <ExternalLink key={display} link={link} className="my-1">
          {display}
        </ExternalLink>
      ))}
    </div>
  );
};

const socialLinks = [
  { display: 'Twitter', link: 'https://www.twitter.com/shopmart' },
  { display: 'Instagram', link: 'https://www.instagram.com/shopmart' },
  { display: 'Facebook', link: 'https://www.facebook.com/shopmart' },
];
