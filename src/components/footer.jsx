const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] text-white bg-primary py-[36px] w-full">
      <div className="flex flex-col items-center justify-center gap-[23px]">
        <div className="relative w-[159px] h-[32px]">
          <div className="absolute w-[30px] h-[32px] top-0 left-0 bg-[url(https://c.animaapp.com/qW8jmQ6M/img/logotipo.svg)] bg-[100% 100%]" />
          <div className="absolute top-[8px] left-[40px] [font-family:'Inter-ExtraBold', Helvetica] font-extrabold text-[24px] tracking-[0] leading-[13px] whitespace-nowrap">
            Cryptoart
          </div>
        </div>
        <p className="relative w-fit  font-normal text-white text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
          <span className="text-white  font-normal text-white text-[14px] tracking-[0] leading-[21px]">
            © 2023{" "}
          </span>
          <a href="https://twitter.com/nahlourencao" rel="noopener noreferrer" target="_blank">
            <span className="underline">Nathalia Lourencao</span>
          </a>
          <span className=" font-normal text-white text-[14px] tracking-[0] leading-[21px]">
            {" "}
            | Made with ❤️
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer;