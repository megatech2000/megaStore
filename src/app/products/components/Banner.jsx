const Banner = ({ data, handle, activeTab }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#000]  pb-10 rounded-b-2xl">
      <div>
        <h1 className="mb-0 text-[50px] md:text-[90px] font-extrabold ">
          products
        </h1>
        <div className="flex items-center justify-center">
          <p className="w-[300px] md:w-[600px]  py-10  text-white text-center">
            Lorem ipsum dolor sit amet non id consectetur platea nec ut augue.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-[#141414] border border-[#2e2e2e] text-center md:text-left md:flex gap-5 p-5 rounded-t-2xl rounded-b-2xl md:rounded-full">
          {data.map((item, index) => (
            <div
              className={`${
                index === activeTab ? "bg-[#fff]" : "bg-none"
              } bg-hover hover:bg-[#fff]  px-2  md:px-10 py-2 rounded-full  cursor-pointer mt-5 md:mt-0`}
              key={index}
              onClick={() => handle(index)}
            >
              <p className="text-[#a7a6a6] hover:text-black">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
