import React, { useState, useCallback } from 'react';
import 'animate.css';
import InputWorryL from '@/components/InputWorryL';
import InputWorryR from '@/components/InputWorryR';
import SatisfactionModal from '@/components/SatisfactionModal';

type handleProps = {
  onClickToggleModal: () => void;
  handlePrevPage: () => void;
};
function BookPageThree(attribute: handleProps) {
  // const [selectedChar, setSelectedChar] = useState<string | undefined>();

  // const onSelectChar = (char: string) => {
  //   setSelectedChar(char);
  // };

  return (
    // 배경
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      {/* 책 전체 요소 */}
      <div
        className="flex justify-center items-center
        w-[100%] h-[100%] px-2 pt-3 pb-1 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md 
       "
      >
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          {/* 왼쪽 페이지 */}
          <div
            className="flex flex-col bg-pageBackgroud  w-[100%] h-[100%]
        bg-bookframe bg-center  p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        "
          >
            <InputWorryL />
          </div>
          <button
            type="button"
            onClick={() => {
              attribute.handlePrevPage();
            }}
            className="w-[20%] h-[4%] text-[1vw] self-center mt-auto
               bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
               text-[#7C5197] font-ham-l text-center"
          >
            Prev
          </button>
        </div>

        {/* 오른쪽 페이지 */}
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          <div
            className=" flex flex-col bg-pageBackgroud  w-[100%] h-[100%]
            bg-bookframe bg-center  p-3 bg-contain bg-no-repeat 
            "
          >
            <InputWorryR props={attribute.onClickToggleModal} />
          </div>
          <button
            type="button"
            onClick={() => {
              attribute.handlePrevPage();
            }}
            className=" flex-grow
            w-[20%] h-[4%] text-[1vw] self-center mt-auto
               bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
               text-[#7C5197] font-ham-l text-center"
          >
            Prev
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPageThree;
