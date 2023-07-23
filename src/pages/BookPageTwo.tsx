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
    <div className=" flex justify-center items-center">
      {/* 책 전체 요소 */}
      <div
        className=" 
        flex justify-center items-center
        w-[fit] h-[fit] p-4 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md 
       px-4 pt-5 pb-8"
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        flex flex-col items-center
        "
        >
          {/* 왼쪽 이미지 */}
          <SelectCharL />
          <button
            type="button"
            onClick={() => {
              handlePrevPage();
            }}
            className="px-6 py-1 mt-[290px] items-center
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
          >
            Prev
          </button>
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud h-[620px] w-[450px]
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
            className="px-6 py-1 mt-[50px]
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
