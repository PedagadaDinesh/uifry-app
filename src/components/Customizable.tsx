import { IoMdStarOutline } from "react-icons/io";
import { PiCubeTransparentLight } from "react-icons/pi";
import { TbAlertHexagon } from "react-icons/tb";

const Customizable = () => {
  return (
    <section className="relative pt-56 md:pt-0">
      <section className="main-container pt-48 pb-20 md:pb-48 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="relative">
            <div className="absolute -bottom-44 right-28">
              <img src="/Feature.png" alt="" className="w-80 h-80 rotate-45" />
            </div>
            <div className="absolute -top-44 left-0  ">
              <img
                src="/FeatureBg.png"
                alt=""
                className="w-[35rem] h-[35rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-72 md:pt-0">
            <div className="flex gap-2 items-center">
              <div className="bg-primary p-2 text-white rounded-full">
                <IoMdStarOutline className="text-lg" />
              </div>
              <p className="text-base font-bold">Fully Customizable</p>
            </div>
            <p className="text-sm text-gray-600  md:w-3/4">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 top-5 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 rotate-45" />
      </div>
    </section>
  );
};

export default Customizable;
