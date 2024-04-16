const Articles = ({ Image }) => {
  return (
    <section className="section-width">
      <div className="md:flex mb-10 md:mb-0">
        <div className="basis-1/2 py-5  md:py-10">
          <h2 className="text-black mb-0">News & articles</h2>
        </div>
        <div className="basis-1/2  flex items-center justify-start md:justify-end">
          <button className="px-16 py-2 text-black border border-[#000] rounded-full hover:bg-[#313131] hover:text-[#fff]">
            Browse all articles
          </button>
        </div>
      </div>
      <div className="md:flex ">
        <div className="basis-1/2 ">
          <div>
            <Image
              className="rounded-xl"
              src="/images/home/articles-img.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="py-10 md:py-24">
            <div className="flex items-center gap-10">
              <p className="bg-gray-100 px-5 py-2 rounded-full">Articles</p>
              <p>Jan 18,2024</p>
            </div>
            <div className="pt-5">
              <h5>Choosing the perfect headphones: Your comprehensive guide</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2  md:pl-10">
          <div>
            <div className="flex items-center gap-10">
              <p className="bg-gray-100 px-5 py-2 rounded-full">News</p>
              <p>Jan 18,2024</p>
            </div>
            <div className="pt-5">
              <h5>7 cool tech gadgets that you need to try out in 2025</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque.
              </p>
            </div>
          </div>
          <div className="py-10">
            <div className="flex items-center gap-10">
              <p className="bg-gray-100 px-5 py-2 rounded-full">Resources</p>
              <p>Jan 18,2024</p>
            </div>
            <div className="pt-5">
              <h5>
                Alexa vs Siri vs Google Home: Which smart assistant is the best?
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-10">
              <p className="bg-gray-100 px-5 py-2 rounded-full">Articles</p>
              <p>Jan 18,2024</p>
            </div>
            <div className="pt-5">
              <h5>How to create the perfect work from home setup</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
