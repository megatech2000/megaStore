import { IoVolumeHighOutline } from "react-icons/io5";

const NewDesign = ({ Image, data }) => {
  return (
    <section className="margin-top rounded-2xl bg-[#000]">
      <div className="section-width  p-0 pt-36 pb-36">
        <div className="text-center px-5 md:px-0">
          <h1 className="mb-0 font-bold">
            Features designed to
            <br /> impress your ears
          </h1>
          <div className="flex items-center justify-center">
            <p className="py-7 text-[#c6c4c4] max-w-[400px] md:max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur platea nec ut augue
              sollicitudin a sagittis vel suscipit amet lacus adipiscing.
            </p>
          </div>
        </div>
        <div className="md:flex rounded-xl bg-[#111111] py-10 lg:py-0 mx-5 md:mx-0">
          <div className="basis-1/2  md:flex items-center  px-10 pt-5 md:pt-0 ">
            <div>
              <div>
                <div>
                  <Image
                    className="w-10"
                    src="/images/home/new-icon-4.svg"
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
                <h1 className="text-left mb-0 py-5">Immersive sound</h1>
                <p className="text-[#c6c4c4]">
                  Curabitur in ut tortor libero tincidunt fermentum sit non
                  iaculis hac aliquet felis quis purus et velit massa volutpat
                  pulvinar nec volutpat ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2  h-full w-full md:flex items-center justify-end pt-5 md:pt-0">
            <Image
              src="/images/home/newdesign-img-1.png"
              alt=""
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5  pt-5">
          {/* map start */}
          {data.map((item, i) => (
            <div className="text-white bg-[#111111] px-10 py-16 rounded-xl mx-5 md:mx-0">
              <div>
                <Image
                  className="w-10"
                  src={item.img}
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
              <div>
                <h4 className="text-white mb-0 py-5">{item.title}</h4>
                <p className="text-[#c6c4c4]">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* map ends */}
        </div>
        <div className="text-white text-center pt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <button className="w-32  py-2 bg-[#fff] text-black rounded-full btn-style">
              Order now
            </button>
            <button className="px-10 py-2 text-white border rounded-full btn-style">
              Browse all features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDesign;
