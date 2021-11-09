import React from 'react';
import { useFetch, useIsMobile } from '@hooks';
import { Button, Loading, ProductImage } from '@components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { ReactComponent as Arrow } from '@icons/arrow-right.svg';

SwiperCore.use([Navigation]);

export const BestSellers = () => {
  const products = useFetch('best-sellers');
  const isMobile = useIsMobile();

  if (!products) return <Loading className="h-80" />;

  return (
    <section className="homepage-featured-section w-full px-10">
      <h4 className="text-2xl md:text-3xl mb-4 self-start flex items-center">
        Best Sellers
        <Button
          link="/best-sellers"
          className="text-sm text-accent-500 hover:underline ml-3 pt-1"
        >
          see more <Arrow className="w-4 h-4 inline" />
        </Button>
      </h4>
      <Swiper
        navigation
        className="h-full w-full"
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={10}
      >
        {products.slice(0, 10).map((item) => (
          <SwiperSlide>
            <Button
              link={`products/${item.productId}`}
              className="h-full flex flex-col hover:underline"
            >
              <div className="h-52">
                <ProductImage
                  url={item.photoURL}
                  size={500}
                  alt="best seller item"
                  className="h-full w-full"
                />
              </div>
              <span className="mt-2">{item.name}</span>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
