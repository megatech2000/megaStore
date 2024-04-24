"use client";

import dynamic from "next/dynamic";
import { bannerData } from "./data";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Banner = dynamic(() => import("../products/components/Banner"));
const Products = dynamic(() => import("../products/components/Products"));

const products = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? 0 : index);
  };

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
    <div>
      <Banner data={bannerData} handle={handleTabClick} activeTab={activeTab} />
      <Products
        Image={Image}
        data={bannerData}
        activeTab={activeTab}
        Link={Link}
        products={products}
      />
    </div>
  );
};

export default products;
