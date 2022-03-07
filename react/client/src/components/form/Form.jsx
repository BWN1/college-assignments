import React from 'react';

export const Form = ({ id, method, action, onSubmit, styles, children }) => {
  return (
    <form
      id={id}
      action={action}
      method={method}
      onSubmit={onSubmit}
      className={`flex flex-col space-y-4 ${styles}`}
    >
      {children}
    </form>
  );
};
