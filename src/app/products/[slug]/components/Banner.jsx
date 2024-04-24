"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Banner = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-[#000] pt-36 pb-36 rounded-b-2xl">
      <div className="md:flex  section-width">
        <div className="basis-1/2  h-full">
          <div className=" w-full md:p-5">
            <div className="bg-[#161616] rounded-2xl flex items-center justify-center">
              <Image
                className="w-full"
                src={product.image}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex gap-5 md:p-5  py-5 md:py-0 w-full">
            <div className="basis-[100%] rounded-2xl bg-[#161616]">
              <Image
                className="w-full"
                src={product.image}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="basis-[100%] bg-[#161616] rounded-2xl">
              <Image
                className="w-full"
                src={product.image}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="basis-[100%] bg-[#161616] rounded-2xl">
              <Image
                className="w-full "
                src={product.image}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2  h-full md:px-10 order-3">
          <div className="">
            <h1 className="mb-0 text-left font-extrabold text-white">
              {product.title}
            </h1>
            <p className="py-5 text-white">{product.desc}</p>
            <h2 className="mb-0 font-extrabold text-white">
              $ {product.price} USD
            </h2>
          </div>
          <div className="flex items-center gap-5 pt-5">
            <div className="basis-[30%] ">
              <div className="p-3 rounded-full border border-[#262626] flex items-center justify-between">
                <p className="text-white">1</p>
                <div className="text-white">
                  <IoIosArrowUp />
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
            {/* dropdown start */}
            <div className="basis-[70%] relative">
              <div
                className="flex items-center justify-between p-3 border border-[#262626] rounded-full cursor-pointer"
                onClick={toggleDropdown}
              >
                <p className="text-white">select</p>
                <div className="text-white">
                  <IoIosArrowDown />
                </div>
              </div>
              {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-[#161616] border border-[#262626]  rounded-2xl shadow-lg">
                  {/* Dropdown options go here */}
                  <div className="p-2 text-white">Black</div>
                  <div className="p-2 text-white">White</div>
                </div>
              )}
            </div>
            {/* dropdown ends */}
          </div>
          <div className="pt-5">
            <button className="w-full py-2 text-black bg-[#fff] hover:bg-[#e9e7e7] rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
          <div className="py-10  ">
            <hr />
          </div>
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-white font-semibold">Product brand</p>
            </div>
            <div>
              <p className="text-white">Techware</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-10">
            <div>
              <p className="text-white font-semibold">Product size</p>
            </div>
            <div>
              <p className="text-white">16,5 x 18,0 x 40,5 mm</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-white font-semibold">Product weight</p>
            </div>
            <div>
              <p className="text-white">13.5 ounces</p>
            </div>
          </div>
          <div className="md:flex items-center justify-between mt-10 p-5 rounded-2xl bg-[#161616]">
            <div>
              <p className="text-white">Payment methods</p>
            </div>
            <div className="flex gap-5 pt-5 md:pt-0">
              <Image
                className="w-12"
                src="/images/products/payment-icons-1.svg"
                alt=""
                width={1000}
                height={1000}
              />
              <Image
                className="w-12"
                src="/images/products/payment-icons.svg"
                alt=""
                width={1000}
                height={1000}
              />
              <Image
                className="w-16"
                src="/images/products/payment-icons-2.svg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
