"use client";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = ({ Image, data }) => {
  return (
    <>
      <section className="padding-top">
        <div className="section-width">
          <div className="text-center">
            <h2 className="font-extrabold">What they say about us</h2>
            <div className="flex items-center justify-center">
              <p className="w-[600px]">
                Lorem ipsum dolor sit amet consectetur platea nec ut augue
                sollicitudin a sagittis vel suscipit amet lacus adipiscing.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            loop: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          wrapperClassName="mySwiper"
        >
          {data.map((item, i) => (
            <SwiperSlide>
              <div className="flex  gap-5 pt-10 px-5">
                <div className="bg-[#eceaea] rounded-2xl w-full p-10" key={i}>
                  <div className="flex gap-7 items-center">
                    <Image
                      className="w-14"
                      src={item.icon}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                    <p>
                      <span className="font-bold">{item.title1}</span>
                      {item.title2}
                    </p>
                  </div>
                  <div className="pt-10 font-bold h-[100px]">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center py-10">
          <a href="/products">
            <button className="px-6 py-2 bg-[#000] text-white rounded-full btn-style">
              Order now
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
