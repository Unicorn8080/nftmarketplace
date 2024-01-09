import RoundEffect from '../components/roundEffect';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <>
    <div className="relative flex w-full items-center justify-between relative bg-primary pt-[36px] lg:px-[50px] xl:px-[200px] 2xl:px-[400px]">
      <RoundEffect className="absolute left-[-302px] top-[-258px]"/>
      <RoundEffect className="absolute right-[-400px] top-[-420px]"/>
      <img
        className="w-[157px] h-[32px]"
        alt="Logo criptoart"
        src="https://c.animaapp.com/qW8jmQ6M/img/logo-criptoart.svg"
      />
      <div className="hidden md:flex items-start gap-[24px] flex-[0_0_auto] z-[100]">
        <Link smooth={true} duration={500} className="cursor-pointer" to=""><p className="w-fit mt-[-1.00px] font-bold text-[#50d71e] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">HOME</p></Link>
        <Link smooth={true} duration={500} className="cursor-pointer" to="about"><p className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">ABOUT</p></Link>
        <Link smooth={true} duration={500} className="cursor-pointer" to="character"><p className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">CHARACTERS</p></Link>
        <Link smooth={true} duration={500} className="cursor-pointer" to="faq"><p className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">FAQ</p></Link>
        <Link smooth={true} duration={500} className="cursor-pointer" to="community"><p className="w-fit mt-[-1.00px] font-bold text-white text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">COMMUNITY</p></Link>
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