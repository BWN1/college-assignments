import React from 'react';
import { ReactComponent as LoadingAnimation } from '@icons/loading.svg';

export const Loading = ({ width, height, color }) => {
  return <LoadingAnimation width={width} height={height} color={color} />;
};
