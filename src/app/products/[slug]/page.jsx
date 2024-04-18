import dynamic from "next/dynamic";
import Image from "next/image";

const Banner = dynamic(() => import("../[slug]/components/Banner"));
const Description = dynamic(() => import("./components/Description"));
const MoreProducts = dynamic(() => import("../[slug]/components/MoreProducts"));

const detailPage = () => {
  return (
    <div>
      <div>
        <Banner />
        <Description />
        <MoreProducts Image={Image} />
      </div>
    </div>
  );
};

export default detailPage;
