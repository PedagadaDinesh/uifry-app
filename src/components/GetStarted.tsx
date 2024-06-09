const GetStarted = () => {
  return (
    <section className="md:pb-20">
      <div className=" pb-24 relative overflow-hidden">
        <img src="/GetStartedBg.png" alt="" className="" />
        <div className="absolute main-container top-44 lg:left-16 left-0">
          <div className=" flex  justify-center items-center">
            <img src="/GetStarted.png" alt="" className=" no-drag" />
          </div>
        </div>
        <div className="absolute left-20 bottom-44 flex justify-center ">
          <img src="/Star11.png" alt="" className="w-10 h-10 rotate-45" />
        </div>
        <div className="absolute right-32 top-24 flex justify-center ">
          <img src="/Star11.png" alt="" className="w-10 h-10 " />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
