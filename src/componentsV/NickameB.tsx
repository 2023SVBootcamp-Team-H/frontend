import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nicknameState } from '@/Recoil';
import witch from '@/assets/images/witch.png';
// eslint-disable-next-line import/no-unresolved
import 'hover.css/css/hover-min.css';
import 'justinaguilar.css';

type handleProps = {
  handleNextPage: () => void;
};

function NickameB({ handleNextPage }: handleProps) {
  const [inputNickname, setInputNickname] = useRecoilState(nicknameState);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleButtonClick = () => {
    // Check if the input field is indeed present
    if (textareaRef.current) {
      // Focus on the input field
      textareaRef.current.focus();
    }
  };
  // 닉네임 입력 핸들러
  const handleInputNicknameChange = (event: any) => {
    setInputNickname(event.target.value);
  };

  return (
    <div className="flex flex-col items-center ">
      <img className=" floating h-[48%] m-1 mt-2" src={witch} alt="witch" />

      {/* 닉네임 입력 박스 */}
      <button
        className="w-[90%] h-[10%] p-1"
        onClick={handleButtonClick}
        type="button"
      >
        <textarea
          id="1004"
          ref={textareaRef}
          className="z-50 item-center justify-center self-center
          w-[100%] h-[100%] bg-slate-100 bg-opacity-30 rounded-full outline-none
         font-ham-l text-[#505050] text-[1vw] text-center"
          value={inputNickname}
          onChange={handleInputNicknameChange}
          placeholder="닉네임을 입력해주세요."
        />
      </button>
      <button
        type="button"
        onClick={() => {
          handleNextPage();
        }}
        className="mt-1 w-[35%] h-[7%] text-[1vw] font-ham-m text-center  text-stone-600 
             bg-[#d2c9be] bg-opacity-20 rounded-[29px] shadow-inner
"
      >
        완료
      </button>
    </div>
  );
}

export default NickameB;
