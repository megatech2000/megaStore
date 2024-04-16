import { TbPlayerPlay } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" bg-[#000] rounded-xl">
      <div className="section-width">
        <div className="md:flex  items-center justify-center">
          <div className="text-center md:w-[700px] pt-28">
            <h2 className="font-extrabold mb-0 text-white">
              Get ready for the sound of the future
            </h2>
            <p className="py-10 text-white">
              Lorem ipsum dolor sit amet consectetur. Id maecenas quisque a amet
              quam egestas odio quis turpis est eget tempus sed sem sem vehicula
              faucibus.
            </p>
            <div className="flex gap-10 items-center justify-center ">
              <button className="px-5 py-1 md:px-6 md:py-2 bg-[#fff] text-black rounded-full btn-style">
                Order now
              </button>
              <button className="text-white text-md md:text-2xl flex items-center gap-5 btn-hover">
                <div className="text-sm md:text-4xl ">
                  <TbPlayerPlay />
                </div>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="section-width flex justify-between bg-[#1a1a1a] p-10 rounded-xl mt-10">
          <div>
            <p className="text-white text-xl md:text-2xl font-extrabold">
              MegaTech.
            </p>
          </div>
          <div className="text-white text-lg md:text-xl flex gap-5 md:gap-8">
            <FaFacebookF className="hover:text-[#828282] cursor-pointer" />
            <FaInstagram className="hover:text-[#828282] cursor-pointer" />
            <CiTwitter className="hover:text-[#828282] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#828282] cursor-pointer" />
          </div>
        </div>
        <div className="text-center py-10 ">
          <p className="text-[#d8d7d7]">
            &copy; {new Date().getFullYear()} MegaTech. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
