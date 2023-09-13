"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../BlogCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

interface SliderProps {
  slides: any[];
}

const CustomPrevArrow = () => {
  return (
    <div className="custom-prev-arrow cursor-pointer bg-white w-fit z-[1] p-4 rounded-full absolute max-sm:left-2 left-[3rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

const CustomNextArrow = ({ onClick }: any) => {
  return (
    <div
      className="custom-next-arrow cursor-pointer bg-white w-fit z-[1] p-4 rounded-full absolute top-1/2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] max-sm:right-2 right-[3rem]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default function Slider({ slides }: SliderProps) {

  return (
    <div className="swiper-container-main relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={{
          prevEl: ".custom-prev-arrow", // Specify your custom previous arrow selector
          nextEl: ".custom-next-arrow", // Specify your custom next arrow selector
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 40,
            centeredSlides: false,
          },

        }}
        modules={[Navigation]}
        className="mySwiper custom-slide "
      >
        {slides.map((slide: any, idx: number) => (
          <SwiperSlide key={`slide_${idx}`}>
            <BlogCard blog={slide} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="relative grid place-items-center max-w-[350px] text-white h-[450px] max-sm:max-w-[80%] max-sm:mx-auto rounded-lg overflow-hidden  ease-in hover:shadow-[0px_40px_70px_-40px_#70d9dd] blog-card">
            <p className="text-lg underline hover:no-underline">View all</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <CustomPrevArrow />
      <CustomNextArrow />
    </div>
  );
}
