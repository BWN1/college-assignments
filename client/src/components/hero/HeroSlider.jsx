import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Button, Loading, ProductImage } from '@components';
import { ReactComponent as Arrow } from '@icons/arrow-right.svg';
import { useFetch, useIsMobile } from '@hooks';
import { API_PATHS } from '../../staticConfig';

SwiperCore.use([Pagination, Autoplay]);

export const HeroSlider = () => {
  const { data: products, loading } = useFetch(API_PATHS.products);
  const isMobile = useIsMobile();
  const numSlides = (isMobile && 1) || 2;

  if (loading) return <Loading container="h-80 lg:h-96" />;

  return (
    <section className="h-80 lg:h-96">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 6500, disableOnInteraction: true }}
        loopedSlides={numSlides}
        slidesPerView={numSlides}
        className="w-full h-full"
      >
        <SwiperSlide className="px-10 py-4 flex flex-col items-start justify-evenly bg-accent-100">
          <h3 className="text-4xl lg:text-5xl font-bold">
            Browse all of our products
          </h3>
          <Button link="/products" className="cta-button flex justify-between">
            Shop Products <Arrow className="inline" />
          </Button>
        </SwiperSlide>
        {products.slice(0, 10).map((item) => (
          <SwiperSlide key={item.name}>
            <ProductImage
              url={item.photoURL}
              size={500}
              className="h-full w-full"
            />
            <div className="bg-gray-800 opacity-50 w-full h-full absolute top-0 left-0 transition-all"></div>
            <div className="hero-item">
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
    </section>
  );
};
