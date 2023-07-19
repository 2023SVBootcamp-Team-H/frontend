import React, { useState, useCallback } from 'react';
import 'animate.css';
import InputWorryL from '@/components/InputWorryL';
import InputWorryR from '@/components/InputWorryR';
import SatisfactionModal from '@/components/SatisfactionModal';

function BookPageThree({ props: onClickToggleModal }: any) {
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
          <InputWorryL />
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className=" flex flex-col
          bg-pageBackgroud h-[620px] w-[450px]
            bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat "
        >
          <InputWorryR props={onClickToggleModal} />
        </div>
      </div>
    </div>
  );
}

export default BookPageThree;
