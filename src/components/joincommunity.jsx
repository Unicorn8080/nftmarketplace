import DownVector from "./downVector";

const JoinOurCommunity = () => {
  return (
    <div id="community" className="inline-flex flex-col items-center gap-[40px] relative">
      <DownVector className="absolute top-0 left-0 transform scale-x-[2]" />
      <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-[16px] relative flex-[0_0_auto]">
          <img
            className="relative w-[36px] h-[67px]"
            alt="Frame"
            src="images/frame.svg"
          />
          <div className="inline-flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[48.0px] whitespace-nowrap">
              Join the community
            </div>
            <p className="relative w-[364px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] text-center tracking-[0] leading-[24px]">
              Join our Discord channel or follow us on Twitter keep up to date
              with our latest work and announcements.
            </p>
          </div>
        </div>
        <img
          className="relative flex-[0_0_auto]"
          alt="Frame"
          src="images/frame-68.png"
        />
      </div>
      <div className="inline-flex items-start gap-[20px] relative flex-[0_0_auto]">
        <a href="https://discord.com">
          <div className="flex w-[225px] items-center justify-center gap-[10px] px-[40px] py-[24px] relative bg-[#5765f2] rounded-[60px] border border-solid">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Icon discord"
              src="images/icon-discord.svg"
            />
            <div className="relative w-fit mt-[-0.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              JOIN DISCORD
            </div>
          </div>
        </a>
        <a href="https://twitter/FabriXofficial">
          <div className="flex w-[225px] items-center justify-center gap-[10px] px-[40px] py-[24px] relative bg-[#36b9ff] rounded-[60px] border border-solid">
            <img
              className="ml-[-15.50px] relative w-[20px] h-[20px]"
              alt="Icon twitter"
              src="images/icon-twitter.svg"
            />
            <div className="relative w-fit mt-[-0.50px] mr-[-15.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              FOLLOW TWITTER
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
