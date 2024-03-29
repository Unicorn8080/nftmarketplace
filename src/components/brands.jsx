const Brands = () => {

  const items = [
    { id: 1, path: "images/webflow-black.svg", style: "w-[182px] h-[44px]" },
    { id: 2, path: "images/relume-black.svg", style: "w-[183px] h-[52px]" },
    { id: 3, path: "images/webflow-black.svg", style: "w-[182px] h-[44px]" },
    { id: 4, path: "images/relume-black.svg", style: "w-[183px] h-[52px]" },
    { id: 5, path: "images/webflow-black.svg", style: "w-[182px] h-[44px]" },
    { id: 6, path: "images/relume-black.svg", style: "w-[183px] h-[52px]" },
  ];
  return (
    <div className="overflow-hidden">
      <div className="flex max-w-[1440px] items-center justify-center gap-[10px] px-[16px] py-[15px] bg-secondary">
        {items.map((item, index) => (
          <img
            key={"item-" + index}
            className={item.style}
            alt={item.path.split("/")[1].split(".")[0]}
            src={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
