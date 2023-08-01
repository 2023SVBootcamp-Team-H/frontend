import React, { useState, MouseEvent } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import SelectCharB from '@/componentsV/SelectCharB';
import SelectCharT from '@/componentsV/SelectCharT';

type handleProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

function BookPageTwoV({ handlePrevPage, handleNextPage }: handleProps) {
  const [selectedChar, setSelectedChar] = useState<string | undefined>();

  const onSelectChar = (char: string) => {
    setSelectedChar(char);
  };

  return (
    // 배경
    <div className=" flex justify-center items-center hvr-curl-bottom-right w-[100%] h-[100%]">
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
            handlePrevPage();
          }}
          className="w-[20%] h-[4%] items-center text-[1vw] justify-self-end
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
        >
          Prev
        </button>
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  w-[100%] h-[46%]
        bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-b-[3px] border-[#D9D3C8] 
        flex flex-col items-center 
        "
        >
          {/* 왼쪽 이미지 */}
          <SelectCharT />
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud w-[100%] h-[46%]
      bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
  flex flex-col content-center items-center"
        >
          {/* 오른쪽 이미지 */}
          <SelectCharB onSelectChar={onSelectChar} />
        </div>
        <button
          type="button"
          onClick={() => {
            handleNextPage();
          }}
          className="w-[20%] h-[4%] items-center text-[1vw]
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookPageTwoV;
