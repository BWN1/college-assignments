import React from 'react';
import { ReactComponent as Close } from '@icons/cancel.svg';
import { notificationText } from '../../staticConfig';

export const NotificationBanner = ({ showNotification, isError }) => {
  return (
    <div
      className={`py-2 w-full text-center ${
        isError ? 'bg-red-500 text-white' : 'bg-green-400'
      }`}
    >
      <span className="text-md inline-block w-64 ml-8 md:ml-10 md:w-auto">
        {isError
          ? notificationText.registration.error
          : notificationText.registration.success}
      </span>
      <Close
        className="float-right h-6 mr-4 mt-2 md:mt-0 hover:cursor-pointer"
        onClick={() => showNotification(false)}
      />
    </div>
  );
};
