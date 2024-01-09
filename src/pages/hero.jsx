import MiddleRound from "../components/middleRound";
import DownVector from "../components/downVector";

const Hero = () => {
    return (
      <div className="relative flex flex-col items-center gap-[30px] mx-auto mt-[60px]">
        <MiddleRound className="absolute top-[-200px] left-[-350px]"/>
        <DownVector className="absolute top-0 left-[75px]"/>
        <div className="flex flex-col items-center gap-[10px]">
          <img className="w-[36px] h-[67px]" alt="ETH" src="images/frame.svg" />
          <h2 className="max-w-[768px] [font-family:'Inter-Bold', Helvetica] font-bold text-[70px] text-center traking-[0] leading-[65px]">
            Discover and collect super rare NFTs
          </h2>
          <p className="max-w-[480px] font-normal text-center tracking-[0] leading-[25px]">
            Digital marketplace for crypto collectibles and NFTs, buy, sell and discover exclusive digital assets today.
          </p>
          <div className="w-[264px] h-[70px] flex items-center justify-center px-[37px] py-[19px] rounded-[60px] [background:linear-gradient(180deg,rgb(255,64,96)_0%,rgb(255,128,196)_52%,rgb(109,94,234)_100%)]">
            <div className="w-fit text-[#000000] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">connect wallet</div>
          </div>
        </div>
        <div>
          <img className="w-[971px] h-[375px] z-[10]" alt="Characters" src="images/characters.png" />
        </div>        
      </div>
    );
}

export default Hero;