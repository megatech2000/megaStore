"use client";

import dynamic from "next/dynamic";
import { bannerData } from "./data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Banner = dynamic(() => import("../products/components/Banner"));
const Products = dynamic(() => import("../products/components/Products"));

const products = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? 0 : index);
  };

  return (
    <div>
      <Banner data={bannerData} handle={handleTabClick} activeTab={activeTab} />
      <Products
        Image={Image}
        data={bannerData}
        activeTab={activeTab}
        Link={Link}
      />
    </div>
  );
};

export default products;
