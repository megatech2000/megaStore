"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navBarData } from "./data";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
            <div className="hidden md:block cursor-pointer">
              <p className="text-white 2xl:text-2xl">Cart(0)</p>
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
            <div className="md:hidden cursor-pointer">
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
  );
};

export default NavBar;
