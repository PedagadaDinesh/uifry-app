import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative">
      <section className="main-container md:py-24 py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4 ">
            <div className="font-bold text-5xl">
              Make the Best Financial Decisions
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center px-4 py-2 rounded bg-black text-white ">
                <p>Get Started</p>
                <IoIosArrowRoundForward className="text-2xl" />
              </div>
              <div className="flex gap-2 items-center px-4 py-2  ">
                <MdOutlineSlowMotionVideo className="text-2xl" />
                <p>Watch Video</p>
              </div>
            </div>
            <div className="pt-2 relative">
              <img src="/AtoZ.png" alt="" />
              <div className="absolute left-32 top-20 flex justify-center ">
                <img src="/Star11.png" alt="" className="w-10 h-10 rotate-45" />
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div>
              <img src="/Eclipse.png" alt="" className="" />
            </div>
            <div className=" ">
              <div className="absolute -bottom-20 left-0  ">
                <img src="/Feature.png" alt="" className="" />
              </div>
            </div>
            <div className="absolute top-36 -right-28">
              <img src="/1.png" alt="" />
            </div>
            <div className="absolute top-20 right-2">
              <img src="/2.png" alt="" />
            </div>
            <div className="absolute top-0 -left-20">
              <img src="/1.png" alt="" />
            </div>
            <div className="absolute left-32 bottom-4 flex justify-center ">
              <img src="/Star11.png" alt="" className="w-10 h-10 " />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-10 top-5 flex justify-center ">
        <img
          src="/Star11.png"
          alt=""
          className="w-10 h-10 rotate-45 hidden md:block"
        />
      </div>
      <div className="absolute right-10 top-0 flex justify-center ">
        <img src="/Star11.png" alt="" className="w-10 h-10 hidden md:block" />
      </div>
    </section>
  );
};

export default HeroSection;
