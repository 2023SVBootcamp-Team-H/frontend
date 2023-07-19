import React, { useState } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import SelectCharL from '@/components/SelectCharL';
import SelectCharR from '@/components/SelectCharR';

function BookPageTwo() {
  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언

  const [selectedChar, setSelectedChar] = useState<string | undefined>();

  const onSelectChar = (char: string) => {
    setSelectedChar(char);
  };

  function toBookPageTwo() {
    // react-router-dom을 이용한 고민 입력 페이지로 이동 함수
    navigate('/book');
  }

  function toBookPageThree() {
    // react-router-dom을 이용한 고민 입력 페이지로 이동 함수
    navigate('/book3');
  }
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
            onClick={() => toBookPageTwo()}
            className="px-6 py-1 mt-72 items-center
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
          >
            Back
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
            onClick={() => toBookPageThree()}
            className="px-6 py-1 mt-12
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
