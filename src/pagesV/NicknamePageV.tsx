import React, { useState } from 'react';
import 'animate.css';
import NickameB from '@/componentsV/NickameB';
import NickameT from '@/componentsV/NickameT';

type handleProps = {
  handleNextPage: () => void;
};

function NicknamePageV({ handleNextPage }: handleProps) {
  return (
    <div
      id="1001"
      className=" flex justify-center items-center  hvr-curl-bottom-right w-[100%] h-[100%] "
    >
      <div
        id="1002"
        className=" 
        flex flex-col justify-center items-center hvr-curl-bottom-right
        w-[100%] h-[100%] p-[1%] bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md "
      >
        <div
          id="1003"
          className="bg-pageBackgroud  w-[100%] h-[50%]
        bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-b-[3px] border-[#D9D3C8] 
       flex justify-center items-center
        "
        >
          {/* Top 페이지 */}
          <NickameT />
        </div>
        <div
          className="bg-pageBackgroud w-[100%] h-[50%]
          bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
      flex flex-col content-center items-center"
        >
          {/* Bottom 페이지 */}
          <NickameB handleNextPage={handleNextPage} />
        </div>
      </div>
    </div>
  );
}

export default NicknamePageV;
