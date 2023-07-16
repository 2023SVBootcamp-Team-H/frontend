import React from 'react';
import 'animate.css';
import frame from '@/assets/images/frame.png';

function Book() {
  return (
    <div
      className="bg-pageBackgroud outline outline-[15px] rounded-md outline-pageOutline w-fit h-fit
    flex "
    >
      {/* 푸시 확인용 주석 */}
      <img className="p-3" src={frame} alt="frame" />
      <div className="border-solid border-x-2 h-auto border-[#A9A9A9] blur-sm" />
      <img className="p-3" src={frame} alt="frame" />
    </div>
  );
}

export default Book;
