import React, { useState } from 'react';
import 'animate.css';
import NickameL from '@/components/NickameL';
import NickameR from '@/components/NickameR';

type handleProps = {
  handleNextPage: () => void;
};

function BookPage({ handleNextPage }: handleProps) {
  return (
    <div className="flex justify-center items-center  hvr-curl-bottom-right ">
      <div
        className="flex justify-center items-center w-[fit] h-[fit] p-4
       bg-pageBackgroud outline-pageOutline outline outline-[15px] rounded-md px-4 pt-5 pb-8 "
      >
        <div
          className="bg-pageBackgroud h-[620px] w-[450px]
          bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
          flex flex-col items-center justify-center       
          border-solid border-r-[3px] border-[#D9D3C8] "
        >
          {/* 왼쪽 페이지 */}
          <NickameL />
        </div>
        <div
          className="bg-pageBackgroud h-[620px] w-[450px] 
          bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
      flex flex-col items-center"
        >
          {/* 오른쪽 페이지 */}
          <NickameR handleNextPage={handleNextPage} />
          {/* 
          <button
            type="button"
            onClick={() => {
              handleNextPage();
            }}
            className="px-6 py-1 bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197] text-[#7C5197] font-ham-l text-center"
          >
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default BookPage;
