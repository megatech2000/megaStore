import dynamic from "next/dynamic";
import { bannerData } from "./data";
import Image from "next/image";

const Banner = dynamic(() => import("../products/components/Banner"));
const Products = dynamic(() => import("../products/components/Products"));

const products = () => {
  return (
    <div>
      <Banner data={bannerData} />
      <Products Image={Image} />
    </div>
  );
};

export default products;
