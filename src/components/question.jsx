import { useState } from "react";

const Question = (props) => {
  const [isToggled, setToggle] = useState(false);

  console.log(isToggled, "dfad")

  const handleClick = () => {
    setToggle(!isToggled);
  }

  const { ask, answer } = props;
  return (
    <div className="mx-auto w-[350px] xs:w-[400px] sm:w-3/4 md:w-2/3 lg:w-1/2">    
      <div className="flex flex-col w-[100%] items-start">
        <div className="flex px-[24px] py-[20px] items-center w-full justify-between bg-[#0000001a] rounded-[10px] border border-solid border-transparent">
          <div className="font-bold text-[18px] tracking-[0] leading-[27px]">
            {ask}
          </div>
          {isToggled ? (
            // <img className="w-[32px] h-[32px]" onClick={()=>handleClick()} alt="Plus" src="images/plus.svg" />
            <p className="font-normal text-[32px] leading-[32px] w-[32px]" onClick={()=>handleClick()}>-</p>
          ) : (
            <p className="font-normal text-[32px] leading-[32px] w-[32px]" onClick={()=>handleClick()}>+</p>
          )}
        </div>
        {isToggled && <div className={`flex px-[24px] py-[20px] bg-[#0000001a] rounded-[10px]`}>{answer}</div> }
        
      </div>
    </div>
  );
};

export default Question;
