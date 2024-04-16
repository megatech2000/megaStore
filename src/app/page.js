import Image from "next/image";
import dynamic from "next/dynamic";
import {
  devicesData,
  newDesignData,
  testimonialsData,
} from "@/components/home/data";

const Banner = dynamic(() => import("../components/home/Banner"));
const Future = dynamic(() => import("../components/home/Future"));
const NewDesign = dynamic(() => import("../components/home/NewDesign"));
const SetUp = dynamic(() => import("../components/home/SetUp"));
const Detail = dynamic(() => import("../components/home/Detail"));
const Devices = dynamic(() => import("../components/home/Devices"));
const HeadPhone = dynamic(() => import("../components/home/HeadPhone"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Articles = dynamic(() => import("../components/home/Articles"));

export default function Home() {
  return (
    <div>
      <div>
        <Banner Image={Image} />
        <Future Image={Image} />
        <NewDesign Image={Image} data={newDesignData} />
        <SetUp Image={Image} />
        <Detail Image={Image} />
        <Devices Image={Image} data={devicesData} />
        <HeadPhone Image={Image} />
        <Testimonials Image={Image} data={testimonialsData} />
        <Articles Image={Image} />
      </div>
    </div>
  );
}
