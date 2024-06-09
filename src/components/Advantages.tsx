import { FiBell } from "react-icons/fi";

const Advantages = () => {
  return (
    <section className="relative">
      <section className="main-container py-24 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-6 pb-10 md:pb-0">
            <div className="flex flex-col">
              <p className="text-primary font-bold text-sm">ADVANTAGES</p>
              <h2 className="font-bold text-4xl">Why Choose UiFry? </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <div className="bg-primary p-2 text-white rounded-full">
                    <FiBell className="text-lg" />
                  </div>
                  <p className="text-base font-bold">Clever Notifications</p>
                </div>
                <p className="text-sm text-gray-600  md:w-3/4">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-32 left-20">
              <img src="/Feature.png" alt="" className="w-80 h-80 rotate-180" />
            </div>
            <div className="absolute -top-24 left-0  ">
              <img
                src="/AdvantageBg.png"
                alt=""
                className="w-[35rem] h-[35rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="absolute right-0 top-5 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 " />
      </div>
    </section>
  );
};

export default Advantages;
