import dynamic from "next/dynamic";
import Image from "next/image";
import { bannerData } from "../data";
import Link from "next/link";

const Banner = dynamic(() => import("../[slug]/components/Banner"));
const Description = dynamic(() => import("./components/Description"));
const MoreProducts = dynamic(() => import("../[slug]/components/MoreProducts"));

const getData = async (slug) => {
  const res = await fetch(`http://127.0.0.1:8000/products/${slug}`);

  if (!res.ok) {
    throw new Error("somthing worng");
  }
  return res.json();
};

const detailPage = async ({ params }) => {
  const { slug } = params;

  const productDetail = await getData(slug);

  return (
    <div>
      <div>
        <Banner data={bannerData} product={productDetail} />
        <Description />
        <MoreProducts Image={Image} product={productDetail} Link={Link} />
      </div>
    </div>
  );
};

export default detailPage;
