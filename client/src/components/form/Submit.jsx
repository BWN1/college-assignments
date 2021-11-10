import React from 'react';
import { Loading } from '@components';

export const Submit = ({ form, isSubmitting, children }) => {
  return (
    <button
      form={form}
      className={`flex items-center justify-center w-full h-12 py-2 rounded text-white
      bg-accent-400 ${
        isSubmitting
          ? 'bg-gray-400'
          : 'hover:bg-accent-500 transition-colors hover:cursor-pointer'
      }`}
    >
      {isSubmitting ? <Loading width={'80%'} height={'80%'} /> : children}
    </button>
  );
};
