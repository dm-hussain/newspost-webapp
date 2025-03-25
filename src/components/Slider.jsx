import React, { useContext, useRef, useState } from 'react';
import styles from './Slider.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { LatestSliderContext } from '../contexts/LatestSliderContext';
 

export default function Slider() {
  const { latestNewsData } = useContext(LatestSliderContext);

  return (
    <div className={`${styles.sliderContainer} container `}>
      <Swiper
        className="mySwiper  "
        accordion="true"
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile: Show 1 slide per view
          768: { slidesPerView: 2 }, // Tablet: Show 2 slides per view
          1024: { slidesPerView: 3 }, // Desktop: Show 3 slides per view
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
      >
        {latestNewsData.map((slide) => {
          return (
            <SwiperSlide key={crypto.randomUUID()} className={` col-md-4 `}>
              <div
                className={` cursor-pointer d-flex maxHeight position-relative  `}
              >
                <img
                  src={slide.imgLink}
                  className={`  img-fluid  card-img-top object-fit-cover`}
                  alt={`img`}
                />
                <div className=" w-100   position-absolute start-50 translate-middle-x bottom-0  " 
                style= { {backgroundColor: 'rgba(0, 0, 0, 0.4)'}} >
                  <p className=" text-white    ">
                    {slide.title.substring(0, 50)} ....
                  </p>

                  {/* <div
                    class="position-relative bg-dark p-3"
                    style="background-color: rgba(0, 0, 0, 0.5) !important;"
                  >
                    <p class="text-white">This paragraph has 100% opacity!</p>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
