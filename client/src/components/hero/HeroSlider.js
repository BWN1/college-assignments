import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Button } from '../common';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg';
import {
  useFetch,
  useIsTablet,
  useIsLargeScreen,
  useIsXLScreen,
} from '../../hooks';

SwiperCore.use([Pagination, Autoplay]);

export const HeroSlider = () => {
  const products = useFetch('products');
  const isTablet = useIsTablet();
  const isLargeScreen = useIsLargeScreen();
  const isXLScreen = useIsXLScreen();
  const numSlides =
    (isTablet && 2) || (isLargeScreen && 3) || (isXLScreen && 4) || 1;

  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 6500, disableOnInteraction: true }}
      loopedSlides={numSlides}
      slidesPerView={numSlides}
      className="h-hero md:h-hero-md lg:h-hero"
    >
      <SwiperSlide className="px-10 py-4 flex flex-col items-start justify-evenly bg-accent-100">
        <h3 className="text-4xl font-bold">Browse all of our products</h3>
        <Button link="/products" className="cta-button flex justify-between">
          Shop Products <Arrow className="inline" />
        </Button>
      </SwiperSlide>
      {products.slice(0, 10).map((item) => (
        <SwiperSlide key={item.name}>
          <img
            src={item.photoURL}
            alt=""
            loading="eager"
            className="h-full w-full"
          />
          <div className="bg-gray-800 opacity-50 w-full h-full absolute top-0 left-0 transition-all"></div>
          <div className="absolute top-0 flex flex-col justify-evenly items-start p-10 h-full text-gray-100 font-semibold">
            <h3 className="text-4xl">{item.name}</h3>
            <Button
              link={`/products/${item.productId}`}
              className="hover:underline"
            >
              <span className="mr-2">View Product</span>
              <Arrow className="inline" />
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
