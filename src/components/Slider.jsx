import React, { useContext, useRef, useState } from 'react';
import styles from './Slider.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
 
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useFirebaseContext } from '../context/FirebaseContext';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import logo from '../assets/logo.jpg';

export default function Slider() {
  const { allUsersNews } = useFirebaseContext();

  return (
    <div className={`${styles.sliderContainer} container   z-2 `}>
      {/* style={{top:'-30px', position-fixed left:'10%'}} */}
      <Swiper
        className="mySwiper    "
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
          delay: 1500,
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        loop={allUsersNews?.length >= 3}
        modules={[Navigation, Autoplay]}
      >
        {!allUsersNews ? (
          <Loader />
        ) : (
          allUsersNews.map((slide) => {
            return (
              <SwiperSlide key={crypto.randomUUID()} className={` col-md-4 `}>
                <Link
                  to={`/news/${slide.id}`}
                  className={` cursor-pointer d-flex maxHeight position-relative  `}
                >
                  <img
                    src={slide.imgUrl ? slide.imgUrl : logo}
                    className={`  img-fluid  card-img-top object-fit-cover`}
                    alt={`img`}
                  />
                  <div
                    className=" w-100   position-absolute start-50 translate-middle-x bottom-0  "
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    <p className=" text-white    ">
                      {slide.headline?.substring(0, 50)} ....
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
}
