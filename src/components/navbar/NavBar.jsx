"use client";

import Link from "next/link";
import { navBarData } from "./data";
import { HiMiniBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="absolute top-0 w-full z-[10000]">
      <div className="section-width">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white 2xl:text-4xl mb-0">
              MegaKart.
            </h3>
          </div>
          <div
            className={`menu-scroll md:flex items-center   gap-7 absolute top-[70px]   md:static bg-[#323131] md:bg-transparent  rounded-r-2xl md:rounded-none
          ${isOpen ? "left-0" : "left-[-100%]"} `}
          >
            {navBarData.map((item, i) => (
              <p
                className="text-white  pt-5  px-20 md:px-0 md:pt-0 2xl:text-xl font-semibold navbar-text-hover"
                onClick={closeMenu}
              >
                <Link href={item.path} key={i}>
                  {item.title}
                </Link>
              </p>
            ))}
            <div className="pt-5 pb-5 md:pb-0  md:pt-0 px-20 md:px-0">
              <p className="text-white 2xl:text-2xl">Cart(0)</p>
            </div>
            <div className="hidden md:block">
              <button className="w-32 py-2 2xl:w-40 2xl:py-3 bg-[#fff] text-black rounded-full btn-style">
                Order now
              </button>
            </div>
          </div>

          <div className="flex items-center gap-7 md:hidden">
            <button className="px-5 py-1 md:px-8 md:py-2 bg-[#fff] text-black rounded-full hover:bg-[#d6d6d6]">
              Order now
            </button>
            <div className="text-white">
              <div className="text-2xl cursor-pointer">
                {isOpen ? (
                  <IoCloseOutline onClick={toggleMenu} />
                ) : (
                  <HiMiniBars2 onClick={toggleMenu} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
