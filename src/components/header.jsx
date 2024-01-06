const Header = () => {
  return (
    <>
    <div className="flex w-full items-center justify-between relative bg-primary pt-[36px] lg:px-[50px] xl:px-[200px] 2xl:px-[400px]">
      <img
        className="w-[157px] h-[32px]"
        alt="Logo criptoart"
        src="https://c.animaapp.com/qW8jmQ6M/img/logo-criptoart.svg"
      />
      <div className="hidden md:flex items-start gap-[24px] flex-[0_0_auto]">
        <div className="w-fit mt-[-1.00px] font-bold text-[#50d71e] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">HOME</div>
        <div className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">ABOUT</div>
        <div className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">CHARACTERS</div>
        <div className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">FAQ</div>
        <div className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">COMMUNITY</div>
      </div>
      <div className="flex items-start gap-[17px] flex-[0_0_auto]">
        <img className="w-[18px] h-[18px]" alt="Github logo" src="images/git-hub-logo.svg" />
        <img className="w-[18px] h-[18px]" alt="Twitter logo" src="images/twitter-logo.svg" />
        <img className="w-[18px] h-[18px]" alt="Frame logo" src="images/instagram-logo.svg" />
      </div>
    </div>
    </>
  );
};
export default Header;