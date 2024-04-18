const MoreProducts = ({ Image }) => {
  return (
    <section className="section-width py-20">
      <div>
        <div className="md:flex text-center md:text-left  items-center justify-between">
          <h2>More products</h2>
          <div className="">
            <button className="px-10 py-2 border border-[#9d9c9c] text-black rounded-full hover:bg-[#000] hover:text-white">
              Browse all article
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5">
          <div className="pb-10 cursor-pointer">
            <div className="bg-gray-100 py-10 flex items-center justify-center rounded-3xl">
              <Image
                className="w-72 image-zoom"
                src="/images/products/product-1.png"
                alt="proucts images"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h5 className="text-black  mb-0 py-5 font-bold">
                Wireless keyboard
              </h5>
              <p className="text-black text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur tellus tellus sit posuere
                arcu massa et
              </p>
              <p className="text-black pt-5 font-bold">$ 49.99 USD</p>
            </div>
          </div>
          <div className="pb-10 cursor-pointer">
            <div className="bg-gray-100 py-10 flex items-center justify-center rounded-3xl">
              <Image
                className="w-72 image-zoom"
                src="/images/products/product-1.png"
                alt="proucts images"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h5 className="text-black  mb-0 py-5 font-bold">
                Wireless keyboard
              </h5>
              <p className="text-black text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur tellus tellus sit posuere
                arcu massa et
              </p>
              <p className="text-black pt-5 font-bold">$ 49.99 USD</p>
            </div>
          </div>
          <div className="pb-10 cursor-pointer">
            <div className="bg-gray-100 py-10 flex items-center justify-center rounded-3xl">
              <Image
                className="w-72 image-zoom"
                src="/images/products/product-1.png"
                alt="proucts images"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h5 className="text-black  mb-0 py-5 font-bold">
                Wireless keyboard
              </h5>
              <p className="text-black text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur tellus tellus sit posuere
                arcu massa et
              </p>
              <p className="text-black pt-5 font-bold">$ 49.99 USD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
