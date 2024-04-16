"use client";
import { TbPlayerPlay } from "react-icons/tb";
import { motion } from "framer-motion";
import React, { createContext } from "react";

const Banner = ({ Image }) => {
  return (
    <section className="h-[100vh] ">
      <motion.div className="relative h-full">
        <Image
          className="w-full h-full rounded-b-2xl"
          src="/images/home/banner-bg.jpg"
          alt="banner image"
          width={2000}
          height={2000}
        />
      </motion.div>
      <div className="absolute top-[30%] w-full">
        <div>
          <motion.h1
            className="font-bold text-6xl mb-0"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            Discover next-
            <br />
            gen sound
          </motion.h1>
          <motion.div
            className="flex items-center justify-center"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <p className="text-[#b2b1b1] pt-5  text-center w-[400px] md:w-[500px] 2xl:w-[600px] ">
              Lorem ipsum dolor sit amet consectetur. Id maecenas quisque a amet
              quam egestas odio quis turpis est eget tempus sed sem sem vehicula
              faucibus.
            </p>
          </motion.div>
          <motion.div
            className="pt-5 md:pt-10 flex gap-10 items-center justify-center "
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <button className="px-6 py-2 bg-[#fff] text-black rounded-full btn-style">
              Order now
            </button>
            <button className="text-white text-md md:text-2xl flex items-center gap-5 btn-hover">
              <div className="text-sm md:text-4xl ">
                <TbPlayerPlay />
              </div>
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
