import React from 'react';
import { Loading } from '@components';

export const Submit = ({ form, disabled, isSubmitting, children }) => {
  return (
    <button
      form={form}
      className={`flex-center w-full h-12 py-2 rounded text-white transition-colors duration-300 ${
        disabled || isSubmitting
          ? 'bg-gray-400 cursor-default'
          : 'bg-accent-400 hover:bg-accent-500 hover:cursor-pointer'
      }`}
      disabled={disabled}
    >
      {isSubmitting ? (
        <Loading size="30" container="w-full h-full mt-1" white />
      ) : (
        children
      )}
    </button>
  );
};
