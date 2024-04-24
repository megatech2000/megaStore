"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navBarData } from "./data";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <section className="absolute top-0 w-full z-[10000]">
        <div className="section-width">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <h3 className="font-bold text-white 2xl:text-4xl mb-0">
                  MegaKart.
                </h3>
              </a>
            </div>
            <div
              className={`menu-scroll md:flex items-center justify-end gap-7 absolute top-[70px] left-0 w-full md:static bg-[#fff] md:bg-transparent px-5 ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              {navBarData.map((item, i) => (
                <p
                  className="text-black md:text-white 2xl:text-xl font-light pt-3 md:pt-0"
                  key={i}
                >
                  <Link href={item.path}>{item.title}</Link>
                </p>
              ))}
              <div
                className="hidden md:block cursor-pointer"
                onClick={handleCartClick}
              >
                <p className="text-white 2xl:text-xl">Cart(0)</p>
              </div>
              <div className="pt-3 pb-3">
                <a href="/products">
                  <button className="w-full py-1 md:w-36  2xl:w-40 2xl:py-3 bg-[#000] md:bg-[#fff] text-[#fff] md:text-black rounded-full btn-style cursor-pointer">
                    Order now
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="md:hidden cursor-pointer"
                onClick={handleCartClick}
              >
                <p className="text-white 2xl:text-2xl">Cart(0)</p>
              </div>
              {!isMenuOpen && (
                <div
                  className="text-white text-3xl md:hidden flex items-center gap-5 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <HiBars3BottomRight />
                </div>
              )}
              {isMenuOpen && (
                <div
                  className="text-white text-3xl md:hidden flex items-center gap-5 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <IoMdClose />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {isCartOpen && (
        <section className="flex items-center justify-center scale-zoom ">
          <div className="bg-[#fff] absolute top-[20%] z-50 p-10 rounded-2xl mx-5 md:mx-0 ">
            <div className="w-full pb-5">
              <div className="flex justify-between items-center">
                <p className="text-black font-bold">Your Cart</p>
                <div
                  className="text-black text-2xl cursor-pointer"
                  onClick={() => setIsCartOpen(false)}
                >
                  <IoMdClose />
                </div>
              </div>
            </div>
            <hr />
            {/* product 1 */}
            <div className="sm:flex gap-10 sm:gap-36 md:gap-56 items-center justify-between py-10">
              <div className="flex gap-10 items-center ">
                <div className="w-20 h-20 bg-[#000] rounded-xl">
                  <Image
                    className="w-full h-full"
                    src="/images/products/product-1.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  <p className="font-extrabold">Water bottle</p>
                  <p className="py-2">$ 14.99 USD</p>
                  <p>Color: Black</p>
                  <a href="">
                    <p className="py-2 underline">Remove</p>
                  </a>
                </div>
              </div>
              <div className=" px-12 py-3 rounded-full border">
                <p>1</p>
              </div>
            </div>
            {/* product 2 */}

            <hr />
            <div>
              <div className="flex justify-between items-center py-5">
                <p className="text-black">Subtotal</p>
                <p className="text-black">$ 29.98 USD</p>
              </div>
              <div>
                <button className="w-full py-2 bg-[#000] text-white rounded-full hover:bg-[#101010]">
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NavBar;
