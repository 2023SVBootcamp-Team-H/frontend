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
    <div className="flex justify-center items-center">
      {/* 책 전체 요소 */}
      <div
        className="flex justify-center items-center
        w-[fit] h-[fit] p-4 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md 
       px-4 pt-5 pb-8"
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        "
        >
          <div>
            <InputWorryL />
            <button
              type="button"
              onClick={() => {
                attribute.handlePrevPage();
              }}
              className="px-6 py-1 mt-10 ml-40
               bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
               text-[#7C5197] font-ham-l text-center"
            >
              Prev
            </button>
          </div>
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className=" flex flex-col
          bg-pageBackgroud h-[620px] w-[450px]
            bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat "
        >
          <InputWorryR props={attribute.onClickToggleModal} />
        </div>
      </div>
    </div>
  );
}

export default BookPageThree;
