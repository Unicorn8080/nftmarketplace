import Question from "../components/question";
import JoinOurCommunity from "../components/joincommunity";

const faqs = [
  {ask: "What is an NFT?", answer:"NFT stands for 'Non-Fungible Token.' An NFT is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are unique and cannot be exchanged on a like-for-like basis."},
  {ask: "What makes our NFT special?", answer:"Our NFT stands out due to the uniqueness of the digital content it represents. Each token is one-of-a-kind, offering collectors something truly special and exclusive"},
  {ask: "Who's the team behind our NFT?", answer:"Our NFT is backed by a team of highly skilled professionals with diverse backgrounds and extensive experience in Fabrix"},
  {ask: "When does minting begin?", answer:"coming soon"},
  {ask: "Who can mint one?", answer:"Everyone can mint via this site"},
];

const Faq = () => {
  
  return(
    <div className="flex flex-col items-center mt-[100px] gap-[46px]">
      <div className="flex flex-col items-center">
        <div className="w-fit font-bold text-secondary text-[30px] tracking-[0] leading-[36px] whitespace-nowrap">
          FAQ
        </div>
        <div className="w-fit font-bold text-[#ffffff] text-[40px] tracking-[0] leading-[48px] whitespace-nowrap">
          Your questions, answered
        </div>
      </div>
      <div className="flex flex-col gap-[16px] transition-all duration-300 ease-in-out">
      {faqs.map((que, index) => {
        return (
          <div key={"faq-" + index}>
            <Question {...que} />
          </div>
        )
      })}
      </div>
      <JoinOurCommunity />
    </div>
  )
}

export default Faq;