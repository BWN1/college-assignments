import React from 'react';
import { formErrorMessages } from '../../staticConfig';

export const Input = ({
  name,
  label,
  required = false,
  type = 'text',
  placeholder,
  onChange,
  onBlur,
  optional,
  fullWidth,
  showError,
}) => {
  return (
    <div className={`flex flex-col${fullWidth ? ' flex-1' : ''}`}>
      <label htmlFor={name} className="mb-1">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
        {optional && <span className="text-sm ml-1">(optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`border rounded w-full h-10 p-2 
            focus:border-2 outline-none focus:outline-none ${
              showError ? 'border-red-400' : 'border-gray-900'
            }`}
      />
      {showError && (
        <span className="text-red-400 text-sm">
          {formErrorMessages.signup[name]}
        </span>
      )}
    </div>
  );
};
