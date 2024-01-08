const About = () => {
  return (
    <div className="py-[120px] flex flex-col items-center justify-center gap-[60px]">
      <div className="flex flex-col items-center gap-[13px]">
        <p className="max-w-[616px] text-center text-[40px] font-bold tracking-[0] leading-[44.0px]">
          A new wave of collectibles is about to hit the blockchain
        </p>
        <p className="max-w-[728px] text-center text-[16px] font-normal tracking-[0] leading-[24px]">Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you've been waiting for.</p>
      </div>
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-end lg:justify-center">
        <img className="flex-1 max-w-[536px]" alt="Group" src="images/group-71.png" />
        <div className="flex-1 max-w-[506px]">
          <div className="flex flex-col items-center lg:items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[14px]">
              <div className="flex flex-col items-start gap-[4px]">
                <h3 className="font-bold text-secondary text-[24px] tracking-[0] leading-[28px]">
                  About
                </h3>
                <div className="[font-family:'Roboto-Bold', Helvetica] font-bold text-[40px] tracking-[0] leading-[48px]">
                  Thousands of unique NFTs
                </div>
              </div>
              <p className="font-normal text-base">
                Each character is entirely unique and is generated by combining attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind.
              </p>
            </div>
            <div className="flex w-[225px] h-[70px] items-center justify-center gap-[10px] px-[37px] py-[19px] relative rounded-[60px] border border-solid border-transparent overflow-hidden before:block before:absolute before:inset-0 before:z-[-1] before:border-[1px] [background-clip: padding-box] before:rounded-[60px] before:bg-gradient">
              <div className="[background-clip:text!important] w-fit [background:linear-gradient(180deg,rgb(255,64,96)_0%,rgb(255,128.56,196.74)_52.08%,rgb(109,94,234)_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                PLACE A BID
              </div>
            </div>
          </div>

          
        </div>

      </div>
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-end lg:justify-center">
        <div className="flex-1 max-w-[506px]">
          <div className="flex flex-col items-center lg:items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[14px]">
              <div className="flex flex-col items-start gap-[4px]">
                <h3 className="font-bold text-secondary text-[24px] tracking-[0] leading-[28px]">
                  About
                </h3>
                <div className="[font-family:'Roboto-Bold', Helvetica] font-bold text-[40px] tracking-[0] leading-[48px]">
                  Secure the most rare
                </div>
              </div>
              <p className="font-normal text-base">
                Even Though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and raw materials - the rarer the attributes, the rarer your character will be.
              </p>
            </div>
            <div className="flex w-[225px] h-[70px] items-center justify-center gap-[10px] px-[37px] py-[19px] relative rounded-[60px] border border-solid border-transparent overflow-hidden before:block before:absolute before:inset-0 before:z-[-1] before:border-[1px] [background-clip: padding-box] before:rounded-[60px] before:bg-gradient">
              <div className="[background-clip:text!important] w-fit [background:linear-gradient(180deg,rgb(255,64,96)_0%,rgb(255,128.56,196.74)_52.08%,rgb(109,94,234)_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                PLACE A BID
              </div>
            </div>
          </div>          
        </div>
        <img className="flex-1 max-w-[536px] rounded-[50px]" alt="Group" src="images/group-72.png" />
      </div>
      <div className="flex">
        <img className="w-[25vw]" alt="Spline" src="images/spline-18.png" />
        <img className="w-[50vw]" alt="Spline" src="images/spline-13.png" />
        <img className="w-[25vw]" alt="Spline" src="images/spline-17.png" />
      </div>
    </div>
  )
}

export default About;