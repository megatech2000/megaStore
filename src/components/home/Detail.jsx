import { TbPlayerPlay } from "react-icons/tb";

const Detail = ({ Image }) => {
  return (
    <section className="relative">
      <div>
        <div className="h-full w-full">
          <Image
            className="w-full h-full rounded-xl "
            src="/images/home/detail-bg-img.jpg"
            alt=""
            width={2000}
            height={2000}
          />
        </div>
        <div className="absolute top-0 bg-gradient-to-r from-[#000] to-transparent rounded-l-xl h-full w-[70%] "></div>
        <div className="absolute top-0 left-[20px] md:left-[100px] lg:left-[150px] flex flex-col items-start justify-center h-full">
          <h1 className="mb-0 font-bold text-base md:text-6xl 2xl:text-[70px]">
            Elegance in <br />
            every detail
          </h1>
          <p className="max-w-[300px] md:max-w-[500px] text-white text-sm py-3 md:py-10">
            Lorem ipsum dolor sit amet consectetur platea nec ut augue
            sollicitudin a sagittis vel suscipit amet lacus adipiscing eget
            vitae neque in et in pulvinar enim.
          </p>
          <div className=" flex gap-10 items-center justify-center ">
            <button className="px-4 py-1 md:px-6 md:py-2 bg-[#fff] text-black rounded-full btn-style">
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
    </section>
  );
};

export default Detail;
