import React, { useState, useCallback } from 'react';
import 'animate.css';
import InputWorryB from '@/componentsV/InputWorryB';
import InputWorryT from '@/componentsV/InputWorryT';
import SatisfactionModal from '@/components/SatisfactionModal';

type handleProps = {
  onClickToggleModal: () => void;
  handlePrevPage: () => void;
};
function BookPageThreeV(attribute: handleProps) {
  // const [selectedChar, setSelectedChar] = useState<string | undefined>();

  // const onSelectChar = (char: string) => {
  //   setSelectedChar(char);
  // };

  return (
    // 배경
    <div className="flex justify-center items-center hvr-curl-bottom-right w-[100%] h-[100%]">
      {/* 책 전체 요소 */}
      <div
        className=" 
        flex flex-col justify-center items-center hvr-curl-bottom-right
        w-[100%] h-[100%] p-[1%] bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md "
      >
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
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  w-[100%] h-[100%]
        bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-b-[3px] border-[#D9D3C8] 
        flex flex-col items-center 
        "
        >
          <InputWorryT />
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud w-[100%] h-[100%]
      bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
  flex flex-col content-center items-center"
        >
          <InputWorryB props={attribute.onClickToggleModal} />
        </div>
      </div>
    </div>
  );
}

export default BookPageThreeV;
