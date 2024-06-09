const Testimonial = () => {
  return (
    <section className="relative">
      <div className="main-container pt-24 ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center">
            <p>TESTIMONIAL</p>
            <h2 className="text-4xl font-bold lg:w-1/4 text-center">
              What Our Users Say About Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 py-28">
            <div className="relative">
              <div className="absolute -top-20 left-24">
                <img
                  src="/Feature.png"
                  alt=""
                  className="w-80 h-80 rotate-180"
                />
              </div>
              <div className="absolute -top-48 left-10  ">
                <img
                  src="/Testimonial.png"
                  alt=""
                  className="w-[35rem] h-[35rem]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-72 md:pt-0">
              <h2 className="text-3xl font-bold md:w-3/4">
                The Best Financial Accounting App Ever!
              </h2>
              <p className="text-gray-600 text-sm md:w-3/4">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <img src="/Testi.png" alt="" className="w-[192px] h-[40px]" />
              <p className="text-base font-bold">Nick Jonas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-10 bottom-5 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 rotate-45" />
      </div>
      <div className="absolute right-52 top-5 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 " />
      </div>
    </section>
  );
};

export default Testimonial;
