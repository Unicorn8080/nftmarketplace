import Question from "../components/question";

const faqs = [
  {ask: "kksdfkdfdfslk", answer:"sfkdkkflasf"},
  {ask: "kksdfkdfdfslk", answer:"sfkdkkflasf"},
  {ask: "kksdfkdfdfslk", answer:"sfkdkkflasf"},
  {ask: "kksdfkdfdfslk", answer:"sfkdkkflasf"},
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
      {faqs.map((que, index) => {
        return (
          <div key={"faq-" + index}>
            <Question {...que} />
          </div>
        )
      })}
    </div>
  )
}

export default Faq;