const SetUp = ({ Image }) => {
  return (
    <section className="section-padding">
      <div className="section-width p-0">
        <div className="md:flex h-full">
          <div className="basis-1/2 px-5 md:px-0 flex items-center justify-center">
            <div>
              <Image
                src="/images/home/setup-img.png"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="basis-1/2  flex items-center px-5 pt-5 md:pt-0 md:pl-10">
            <div>
              <h1 className="mb-0  max-w-[400px] text-left font-bold text-black">
                A simple way to set it up
              </h1>
              <p className="py-5 2xl:w-[700px]">
                Lorem ipsum dolor sit amet consectetur platea nec ut augue
                sollicitudin a sagittis vel suscipit amet lacus adipiscing eget
                vitae neque.
              </p>
              <button className="w-32  py-2 bg-[#000] text-white rounded-full btn-style">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetUp;
