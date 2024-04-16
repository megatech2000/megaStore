import { TbPlayerPlay } from "react-icons/tb";

const Future = ({ Image }) => {
  return (
    <section className="section-width padding-top">
      <div className="md:flex">
        <div className="basis-1/2 ">
          <div>
            <h1 className="text-black text-left mb-0 font-semibold">
              Designing the future of sound
            </h1>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur blandit lacus sit urna sit
              eu fusce viverra varius eleifend commodo nunc amet.
            </p>
          </div>
        </div>
        <div className="basis-1/2  flex items-end justify-start pt-10 md:pt-0 md:justify-end">
          <div className=" flex gap-10 items-center justify-center ">
            <button className="px-6 py-2 bg-[#000] text-white rounded-full btn-style">
              Order now
            </button>
            <button className="text-black text-md md:text-2xl flex items-center gap-5 btn-hover">
              <div className="text-sm text-black md:text-4xl">
                <TbPlayerPlay />
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex gap-5 pt-10">
        <div className="basis-1/2  h-full">
          <div>
            <Image
              className="rounded-2xl w-full "
              src="/images/home/future-img-1.jpg"
              alt=""
              width={600}
              height={600}
            />
            <div className="pt-3 2xl:pt-10">
              <h5 className="2xl:font-bold">Enhanced comfort</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur blandit lacus sit urna
                sit eu fusce viverra varius eleifend commodo nunc amet.
              </p>
            </div>
          </div>
          <div className="pt-5 2xl:pt-10">
            <Image
              className="rounded-2xl w-full"
              src="/images/home/future-img-2.png"
              alt=""
              width={600}
              height={600}
            />
            <div className="pt-5 2xl:pt-5">
              <h5 className="2xl:font-bold">Ergonomic fit</h5>
              <p>
                Tempus risus vestibulum diam aliquam. Hac in sit aenean non amet
                nunc. In est quam turpis suspendisse purus eu eget
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-full pt-10 md:pt-0">
          <div>
            <Image
              className="rounded-2xl w-full h-full"
              src="/images/home/future-img-4.jpg"
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div className="pt-16">
            <h5 className="2xl:font-bold">Compact design</h5>
            <p>
              Porta nisl nulla porttitor convallis elit lacinia posuere odio
              est. Lorem ullamcorper ultrices in a odio libero id habitasse ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
