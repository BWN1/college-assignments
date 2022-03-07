import { useState, useEffect } from 'react';
import { MEDIA_BREAKPOINTS } from '../staticConfig';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MEDIA_BREAKPOINTS.sm
  );

  const handleWindowSizeChange = () =>
    setIsMobile(window.innerWidth <= MEDIA_BREAKPOINTS.sm);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isMobile;
};

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= MEDIA_BREAKPOINTS.md &&
      window.innerWidth < MEDIA_BREAKPOINTS.lg
  );

  const handleWindowSizeChange = () =>
    setIsTablet(
      window.innerWidth >= MEDIA_BREAKPOINTS.md &&
        window.innerWidth < MEDIA_BREAKPOINTS.lg
    );

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isTablet;
};

export const useIsLargeScreen = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= MEDIA_BREAKPOINTS.lg &&
      window.innerWidth < MEDIA_BREAKPOINTS.xl
  );

  const handleWindowSizeChange = () =>
    setIsDesktop(
      window.innerWidth >= MEDIA_BREAKPOINTS.lg &&
        window.innerWidth < MEDIA_BREAKPOINTS.xl
    );

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isDesktop;
};

export const useIsXLScreen = () => {
  const [isXLScreen, setIsXLScreen] = useState(
    window.innerWidth >= MEDIA_BREAKPOINTS.xl
  );

  const handleWindowSizeChange = () =>
    setIsXLScreen(window.innerWidth >= MEDIA_BREAKPOINTS.lg);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isXLScreen;
};
