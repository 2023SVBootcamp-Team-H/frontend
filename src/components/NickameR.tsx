import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nicknameState } from '@/Recoil';

type handleProps = {
  handleNextPage: () => void;
};

function NickameR({ handleNextPage }: handleProps) {
  const [inputNickname, setInputNickname] = useRecoilState(nicknameState);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleButtonClick = () => {
    // Check if the input field is indeed present
    if (textareaRef.current) {
      // Focus on the input field
      textareaRef.current.focus();
    }
  };
  // 고민 입력 핸들러
  const handleInputNicknameChange = (event: any) => {
    setInputNickname(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <span className="mt-48 text-[20px] font-ham-m text-textTitle">
          닉네임을 입력해주세요
        </span>
        {/* <input
          className="w-[300px] h-[50px] px-3 font-ham
          bg-opacity-20 bg-[#DBD4C7]
           border border-solid border-[#DBD4C7] rounded-[20px]"
          type="text"
          placeholder="닉네임을 입력해주세요"
        /> */}
        {/* 고민 입력 박스 */}
        <button
          className="w-[280px] h-[200px] mt-12"
          onClick={handleButtonClick}
          type="button"
        >
          <textarea
            ref={textareaRef}
            className="z-50 py-4 px-4 leading-6
          w-[280px] h-[200px] bg-slate-100 bg-opacity-30 rounded-[19px] outline-none
         font-ham-l text-[#505050] text-[14px]"
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
          className="mt-8 p-3 px-6 text-[12px] font-ham-m text-center  text-stone-600 
             bg-[#d2c9be] bg-opacity-20 rounded-[29px] shadow-inner
              border border-stone-200"
        >
          완료
        </button>
      </div>
      <div className="flex justify-center" />
    </div>
  );
}

export default NickameR;
