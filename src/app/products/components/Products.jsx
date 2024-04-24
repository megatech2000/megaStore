const Products = ({ Image, Link, products }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 mt-[-50px] pb-36">
        {products.map((item, index) => (
          <Link href={`products/${item.id}`}>
            <div className="pb-10 cursor-pointer" key={index}>
              <div className="bg-gray-100 py-10 flex items-center justify-center rounded-3xl">
                <Image
                  className="w-72 image-zoom"
                  src={item.image}
                  alt="products images"
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <h5 className="text-black  mb-0 py-5 font-bold">
                  {item.title}
                </h5>
                <p className="text-black text-sm md:text-base">{item.desc}</p>
                <p className="text-black pt-5 font-bold">$ {item.price} USD</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
