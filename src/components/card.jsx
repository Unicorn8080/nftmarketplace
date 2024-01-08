const Card = (props) => {
  const {no, type, remainingTime, highestBid, imagePath} = props;
  return (
    <div className="w-[280px] flex flex-col items-start gap-[18px] px-[20px] py-[24px] relative rounded-[20px] overflow-hidden border border-solid border-transparent">
      <div className="inline-flex items-end gap-[4px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[25px] text-center tracking-[0] leading-[30.0px] whitespace-nowrap">
          {no}
        </div>
        <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[24.0px] whitespace-nowrap">
          {type}
        </div>
      </div>
      <div className="flex h-[240px] items-end justify-center relative bg-white rounded-[10px] [background:linear-gradient(180deg,rgb(115,100,235)_0%,rgb(60.71,41.34,215.69)_100%)]">
        <img
          className="relative self-stretch w-full h-[241px] ml-[-2.25px] mr-[-2.25px]"
          alt="Frame"
          src={imagePath}
        />
      </div>
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
            {remainingTime}
          </div>
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#575757] text-[12px] tracking-[0] leading-[14.4px] whitespace-nowrap">
            Remaning Time
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#cdfe02] text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
            {`${highestBid}ETH`}
          </div>
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#575757] text-[12px] tracking-[0] leading-[14.4px] whitespace-nowrap">
            Highest bid
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;