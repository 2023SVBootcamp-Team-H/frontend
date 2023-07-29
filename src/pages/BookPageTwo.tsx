import React, { useState, MouseEvent } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import SelectCharL from '@/components/SelectCharL';
import SelectCharR from '@/components/SelectCharR';

type handleProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

function BookPageTwo({ handlePrevPage, handleNextPage }: handleProps) {
  const [selectedChar, setSelectedChar] = useState<string | undefined>();

  const onSelectChar = (char: string) => {
    setSelectedChar(char);
  };

  return (
    // 배경
    <div className=" flex justify-center items-center w-[100%] h-[100%]">
      {/* 책 전체 요소 */}
      <div
        className=" 
        flex justify-center items-center hvr-curl-bottom-right
        w-[100%] h-[100%] p-4 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md "
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  w-[100%] h-[100%]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        flex flex-col justify-center items-center 
        "
        >
          {/* 왼쪽 이미지 */}
          <SelectCharL />
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
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud w-[100%] h-[100%]
      bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
  flex flex-col items-center"
        >
          {/* 오른쪽 이미지 */}
          <SelectCharR onSelectChar={onSelectChar} />
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
    </div>
  );
}

export default BookPageTwo;
