import { useState, useEffect } from "react";

const Question = (props) => {
  const [isToggled, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!isToggled);
  }

  const { ask, answer } = props;
  return (
    <div className="flex flex-col items-start">
      <div className="flex px-[24px] py-[20px] bg-[#0000001a] rounded-[10px] border border-solid border-transparent">
        <div className="w-[652px] font-bold text-[18px] tracking-[0] leading-[27px]">
          {ask}
        </div>
        {isToggled ? (
          <img className="w-[32px] h-[32px]" onClick={()=>handleClick()} alt="Plus" src="images/plus.svg" />
        ) : (
          <p className="font-normal text-[32px] leading-[32px]" onClick={()=>handleClick()}>-</p>
        )}
      </div>
      <div className={`box flex px-[24px] py-[20px] bg-[#0000001a] rounded-[10px] transition-all duration-1000 ease-in-out ${isToggled ? 'expanded' : ''}`}>{answer}</div>
      
    </div>
  );
};

export default Question;
