import { TbPlayerPlay } from "react-icons/tb";

const HeadPhone = ({ Image }) => {
  return (
    <section>
      <div className="section-width">
        <div className="md:flex">
          <div className="basis-1/2 ">
            <h2 className="mb-0 text-black font-bold text-left">
              Presenting the future of headphones
            </h2>
          </div>
          <div className="basis-1/2  flex items-end md:pl-20 py-5 md:py-0">
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci in habitasse
              ridiculus massa sed faucibus id. In ultricies a at sit elementum
              vel magna sit nisl. Odio donec.
            </p>
          </div>
        </div>
      </div>
      <div className="relative  md:pt-10">
        <Image
          className="w-full h-auto rounded-xl"
          src="/images/home/headphone-img.jpg"
          alt=""
          width={1000}
          height={1000}
        />
        <div className="bg-red-100 w-full flex  items-center justify-center z-50">
          <button className="text-white absolute top-[50%]   text-md md:text-2xl flex items-center gap-5 btn-hover">
            <div className="text-sm md:text-4xl ">
              <TbPlayerPlay />
            </div>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeadPhone;
