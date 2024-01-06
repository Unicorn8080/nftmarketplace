const About = () => {
  return (
    <div className="py-[120px] flex flex-col items-center justify-center gap-[60px]">
      <div className="flex flex-col items-center gap-[13px]">
        <p className="max-w-[616px] text-center text-[40px] font-bold tracking-[0] leading-[44.0px]">
          A new wave of collectibles is about to hit the blockchain
        </p>
        <p className="max-w-[728px] text-center text-[16px] font-normal tracking-[0] leading-[24px]">Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you've been waiting for.</p>
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="flex flex-col items-start gap-[24px] max-w-[506px]">
            <div className="flex flex-col items-start gap-[14px]">
              <div className="flex flex-col items-start gap-[4px]">
                <h3 className="font-bold text-secondary text-[24px] tracking-[0] leading-[28px]">
                  About
                </h3>
                <div className="[font-familly:'Roboto-Bold', Helvetica] font-bold text-[40px] tracking-[0] leading-[48px]">
                  Thousands of unique NFTs
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div></div>
    </div>
  )
}

export default About;