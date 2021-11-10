import React from 'react';

export const Row = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0">
      {children}
    </div>
  );
};
