import React from 'react';
import 'animate.css';
import grandma from '@/assets/images/category/grandma.png';

function InputWorryR() {
  return (
    <div className="flex flex-col justify-center items-center m-auto space-y-5">
      <div className="font-ham-m text-textTitle text-center text-[25px]">
        할머니의 답변
      </div>
      <img className=" opacity-60 w-[150px]" src={grandma} alt="grandma" />
      <div className="w-[350px] h-[270px] text-center font-ham-l text-[16px] leading-6">
        아이고, 내 별님아, 어려운 날이 있죠. 그런s데 그게 다 살아가는
        과정이란다. 우선은 차분하게 마음을 가라앉히고, 따뜻한 차 한 잔도 괜찮을
        거 같네. 때론 이야기를 친구나 가족에게 나누는 것도 마음을 가볍게
        해준다네. 그런 후에 오늘 무슨 일이 힘들게 했는지 좀 생각해봐. 내일은
        어떻게 그 문제를 극복할지, 혹은 더 나은 하루를 만들어볼 수 있는 방법을
        생각해봐, 내 새끼야. 그리고 잊지 말고 자기 전에 따뜻한 목욕도 한 번
        즐겨봐. 그게 마음을 편안하게 해줄 거라네.
      </div>
      <button
        type="button"
        className="w-72 py-2 text-[16px]  text-textTitle font-ham-l text-center bg-[#D8D7DA] rounded-full shadow-inner"
      >
        할머니의 답변을 만족하시나요?
      </button>
    </div>
  );
}
export default InputWorryR;
