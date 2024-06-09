import { IoMdStarOutline } from "react-icons/io";
import { PiCubeTransparentLight } from "react-icons/pi";
import { TbAlertHexagon } from "react-icons/tb";

const Features = () => {
  return (
    <section className="relative">
      <section className="main-container py-24 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="relative">
            <div className="absolute -top-32 left-14">
              <img src="/Feature.png" alt="" className="w-80 h-80 " />
            </div>
            <div className="absolute -top-24 left-0  ">
              <img
                src="/FeatureBg.png"
                alt=""
                className="w-[35rem] h-[35rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-96 md:pt-0">
            <div className="flex flex-col">
              <p className="text-primary font-bold text-sm">FEATURES</p>
              <h2 className="font-bold text-4xl">UiFry Premium </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <IoMdStarOutline className="text-primary text-lg" />
                  <p className="text-sm font-bold">Budgeting Intervals</p>
                </div>
                <p className="text-sm text-gray-600  md:w-3/4">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <TbAlertHexagon className="text-primary text-lg" />
                  <p className="text-sm font-bold">Budgeting Intervals</p>
                </div>
                <p className="text-sm text-gray-600 md:w-3/4">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <PiCubeTransparentLight className="text-primary text-lg" />
                  <p className="text-sm font-bold">Budgeting Intervals</p>
                </div>
                <p className="text-sm text-gray-600  md:w-3/4">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute right-0 top-0">
        <img src="/FeatureSide.png" alt="" className="hidden md:block" />
      </div>
      <div className="absolute left-10 top-5 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 rotate-45" />
      </div>
    </section>
  );
};

export default Features;
