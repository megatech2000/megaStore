"use client";

import { useState, useEffect } from "react";

const MoreProducts = ({ Image, Link }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/products/");
        if (!res.ok) {
          throw new Error("Something went wrong!!");
        }
        const data = await res.json();
        setProducts(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        setError(error.message);
        setIsLoading(false); // Set loading state to false if there's an error
      }
    };

    fetchData();
  }, []);

  // Check if data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {products.map((item, index) => (
            <Link href={`products/${item.id}`}>
              <div className="pb-10 cursor-pointer" key={index}>
                <div className="bg-gray-100 py-10 flex items-center justify-center rounded-3xl">
                  <Image
                    className="w-72 image-zoom"
                    src={item.image}
                    alt="proucts images"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  <h5 className="text-black  mb-0 py-5 font-bold">
                    {item.title}
                  </h5>
                  <p className="text-black text-sm md:text-base">{item.desc}</p>
                  <p className="text-black pt-5 font-bold">
                    $ {item.price} USD
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
