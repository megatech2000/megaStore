const Devices = ({ Image }) => {
  return (
    <section className=" padding-top padding-bottom">
      <div>
        <div className="flex flex-col items-start md:items-center justify-start md:justify-center px-5 lg:px-0">
          <h1 className="text-black mb-0 font-bold">Works with all devices</h1>
          <p className="text-black text-left md:text-center max-w-[700px] pt-5">
            Lorem ipsum dolor sit amet consectetur tellus tellus sit posuere
            arcu massa et nunc sed in blandit sed fermentum leo placerat dolor
            blandit in quam lectus orci ut in enim.
          </p>

          <div className="flex gap-0  md:gap-36 items-center justify-center pt-10 scroll   md:pl-0">
            <Image
              className="w-40 ml-60   md:ml-0"
              src="/images/home/devices-icon-1.svg"
              alt=""
              width={2000}
              height={2000}
            />
            <Image
              className="w-28 ml-10 md:ml-0"
              src="/images/home/devices-icon-3.svg"
              alt=""
              width={2000}
              height={2000}
            />
            <Image
              className="w-16 ml-10 md:ml-0"
              src="/images/home/devices-icon-4.svg"
              alt=""
              width={2000}
              height={2000}
            />
            <Image
              className="w-40 ml-10 md:ml-0"
              src="/images/home/devices-icon-2.svg"
              alt=""
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
