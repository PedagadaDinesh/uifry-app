const FrequentlyAsked = () => {
  const frequentlyQuestion = [
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "bg-primary text-white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "bg-primary text-white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "bg-primary text-white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      content:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      className: "",
    },
  ];
  return (
    <section className="py-24 main-container">
      <div className="flex flex-col gap-6 relative">
        <div className="flex flex-col">
          <p className="text-primary font-bold text-sm">FAQ</p>
          <h2 className="font-bold text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {frequentlyQuestion.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 p-4 rounded-md ${item.className}`}
            >
              <p className="text-lg font-bold">{item.title}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-[35rem] top-5 flex justify-center ">
          <img src="/Star11.png" alt="" className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
