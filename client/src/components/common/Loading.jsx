import React from 'react';
import { ReactComponent as LoadingBlack } from '@icons/loading-black.svg';
import { ReactComponent as LoadingWhite } from '@icons/loading-white.svg';

export const Loading = ({ size, container, fullscreen, white }) => {
  return (
    <div className={`flex-center ${container || (fullscreen && 'h-screen')}`}>
      {white ? (
        <LoadingWhite width={size || 50} height={size || 50} />
      ) : (
        <LoadingBlack width={size || 50} height={size || 50} />
      )}
    </div>
  );
};
