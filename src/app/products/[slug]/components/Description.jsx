const Description = () => {
  return (
    <section className="section-width  section-padding">
      <div className="flex items-center justify-center">
        <div className="md:flex items-center w-[50%] p-3 justify-center gap-7 bg-[#edebeb] rounded-2xl text-center  md:rounded-full">
          <p className="hover:bg-[#fff] p-2 rounded-full cursor-pointer">
            Product description
          </p>
          <p className="hover:bg-[#fff] p-2 rounded-full cursor-pointer my-5 md:my-0">
            Additional info
          </p>
          <p className="hover:bg-[#fff] p-2 rounded-full cursor-pointer">
            Shipping
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="bg-[#edebeb] w-full md:w-[60%] p-10 rounded-2xl">
          <h2 className="font-semibold">Product description</h2>
          <p>
            Venenatis sollicitudin posuere elit consequat et enim. Neque tortor
            amet dictum tempor. Leo facilisis aliquet viverra scelerisque
            eleifend viverra est. At massa erat vel amet enim laoreet dictum
            pellentesque. Urna cursus quam pulvinar tellus.
          </p>
          <h3 className="mb-0 py-5">Product materials</h3>
          <p>
            Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed.
            Tincidunt porttitor in pharetra egestas sit neque ac lacus. Amet a
            nunc et cum. Odio at volutpat volutpat in leo eget ipsum diam
            elementum. Erat magna arcu orci lorem senectus orci fringilla.
            Tincidunt metus nisl vitae maecenas pretium aliquet.
          </p>
          <ul className="py-5 px-5">
            <li className="list-disc">
              Morbi fringilla molestie magna sed dictum. Praesent .
            </li>
            <li className="list-disc">
              Cras mi purus, viverra vitae felis sit amet, tincidunt.
            </li>
            <li className="list-disc">
              non mattis urna ex nec sem. Donec varius diam et.
            </li>
            <li className="list-disc">
              Quisque euismod posuere lacus sit amet volutpat.
            </li>
          </ul>
          <p>
            Quis faucibus massa sit egestas. Sit fermentum est ac pulvinar et
            sagittis sed sit ut. Quis faucibus aenean nibh vestibulum enim mi
            sit. Sollicitudin ultrices ultrices in ipsum urna fringilla massa
            leo. Sapien ultricies vitae rhoncus molestie purus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
