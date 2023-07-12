import React from 'react';
import 'animate.css';

function InputWorryL() {
  return (
    <div className=" ">
      {/* 고민 입력 창 제목 */}
      <div
        className="font-ham-m text-textTitle text-[25px] mt-10 flex justify-center items-center text-center 
        leading-[55px] tracking-wider font-medium
        "
      >
        무엇이 고민인가요?
      </div>
      {/* 나이, 성별, 고민 입력 박스 */}
      <div className="w-[332px] h-[400px] bg-[#E6DED3] rounded-[19px] shadow-inner ml-12 mt-4">
        {/* 나이 선택 박스 */}
        <div
          className="flex flex-row
          "
        >
          {/* 나이대 텍스트 */}
          <div className="font-ham-m text-textTitle text-[15px] ml-9 mt-11">
            나이대
          </div>
          {/* 나이 버튼 박스 */}
          <div className="felx flex-col">
            {/* 10대, 20대, 30대 버튼 */}
            <div className="flex font-ham-m text-[15px] mt-9">
              {/* 10대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-6"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  10대
                </div>
              </button>
              {/* 20대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-2"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  20대
                </div>
              </button>
              {/* 30대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-2"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  30대
                </div>
              </button>
            </div>
            {/* 40대, 50대, 60대 버튼 */}
            <div className="flex font-ham-m text-[15px]">
              {/* 40대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-6"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  40대
                </div>
              </button>
              {/* 50대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-2"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  50대
                </div>
              </button>
              {/* 60대 버튼 */}
              <button
                type="button"
                className="flex justify-center items-center w-[60px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-2"
              >
                <div
                  className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
                >
                  60대
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* 성별 선택 박스 */}
        <div
          className="flex flex-row
          "
        >
          {/* 성별 텍스트 */}
          <div className="font-ham-m text-textTitle text-[15px] ml-10 mt-8">
            성별
          </div>
          {/* 여자, 남자 버튼 */}
          <div className="flex font-ham-m text-[15px] ml-2.5 mt-6">
            {/* 여자 버튼 */}
            <button
              type="button"
              className="flex justify-center items-center w-[94px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-6"
            >
              <div
                className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
              >
                여자
              </div>
            </button>
            {/* 남자 버튼 */}
            <button
              type="button"
              className="flex justify-center items-center w-[94px] h-[27px] 
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner mt-1 ml-2"
            >
              <div
                className="flex justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px] h-screen"
              >
                남자
              </div>
            </button>
          </div>
        </div>
        {/* 고민 입력 박스 */}
        <div className="flex w-[280px] h-[200px] bg-slate-100 bg-opacity-30 rounded-[19px] ml-7 mt-7">
          {/* 나이대 텍스트 */}
          <div className="font-ham-l justify-center text-center text-[#9A9999] text-[14px] ml-20 mt-24">
            고민을 입력해주세요
          </div>
        </div>
      </div>
      {/* 고민 상담받기 버튼 */}
      <div>
        <button
          type="button"
          className="flex justify-center items-center 
          w-[222px] h-[37px] bg-stone-300 bg-opacity-25 rounded-[29px] shadow-inner border border-stone-400
          mt-6 ml-2 "
        >
          <div
            className="flex font-ham-m justify-center items-center text-center 
                text-stone-600 text-xs font-normal origin-center leading-[13.20px]"
          >
            할머니에게 고민 상담 받기
          </div>
        </button>
      </div>
    </div>
  );
}
export default InputWorryL;
