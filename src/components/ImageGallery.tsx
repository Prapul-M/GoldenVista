"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (src: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [src]: true
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Navigation, Pagination, Thumbs]}
        className="h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-2 sm:mb-4 rounded-lg overflow-hidden"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
              {!imagesLoaded[image.src] && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                onLoad={() => handleImageLoad(image.src)}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-2 sm:mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            480: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnail-swiper h-16 sm:h-20 md:h-24"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer relative rounded-md overflow-hidden">
              <div
                className={`absolute inset-0 z-10 ${
                  activeIndex === index ? 'border-2 border-primary' : ''
                }`}
              ></div>
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 10vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ImageGallery; 