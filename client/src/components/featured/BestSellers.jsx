import React from 'react';
import { useFetch, useIsMobile } from '@hooks';
import { Button, Loading, ProductImage } from '@components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { API_PATHS } from '../../staticConfig';

SwiperCore.use([Navigation]);

export const BestSellers = () => {
  const { data: products, loading } = useFetch(API_PATHS.bestSellers);
  const isMobile = useIsMobile();

  if (loading) return <Loading container="h-72" />;

  return (
    <section className="homepage-featured-section w-full px-10">
      <h3 className="header-sm md:header-md mb-4 self-start">Best Sellers</h3>
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
              styles="h-full flex flex-col hover:underline"
            >
              <div className="h-52">
                <ProductImage
                  url={item.photoURL}
                  size={500}
                  alt="best seller item"
                  styles="h-full w-full"
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
