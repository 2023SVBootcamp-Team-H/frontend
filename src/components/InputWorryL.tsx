import React from 'react';
import 'animate.css';

function InputWorryL() {
  return (
    <div className=" flex flex-col mt-10 justify-center items-center space-y-8 ">
      {/* 고민 입력 창 제목 */}
      <div className="font-ham-m text-textTitle text-[25px]">
        무엇이 고민인가요?
      </div>
      {/* 나이, 성별, 고민 입력 전체 배경 */}
      <div className="w-[332px] h-[400px] bg-[#E6DED3] rounded-[19px] shadow-inner ">
        <div className="flex justify-center items-baseline font-ham-m space-x-4 space-y-8">
          <div className="font-ham-m text-textTitle text-[15px]">나이대</div>

          <div className="space-y-1">
            <div className="space-x-3">
              {/* 10대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner
              text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                10대
              </button>
              {/* 20대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
              text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                20대
              </button>
              {/* 30대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
              bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
              text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                30대
              </button>
            </div>
            <div className="space-x-3">
              {/* 40대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
          bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
          text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                40대
              </button>
              {/* 50대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
          bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
          text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                50대
              </button>
              {/* 60대 버튼 */}
              <button
                type="button"
                className=" w-[60px] h-[27px]
          bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
          text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
              >
                60대
              </button>
            </div>
          </div>
        </div>

        {/* 성별 선택 박스 */}
        <div className="flex justify-center items-center space-x-7 mt-6">
          {/* 성별 텍스트 */}
          <div className="font-ham-m text-textTitle text-[15px]">성별</div>
          {/* 여자, 남자 버튼 */}
          <div className="flex font-ham-m text-[15px] space-x-4">
            {/* 여자 버튼 */}
            <button
              type="button"
              className=" w-[94px] h-[27px]
          bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
          text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
            >
              여자
            </button>
            {/* 남자 버튼 */}
            <button
              type="button"
              className=" w-[94px] h-[27px]
          bg-white bg-opacity-25 rounded-[39px] border border-stone-400 shadow-inner 
          text-stone-600 text-xs font-normal origin-center leading-[13.20px] "
            >
              남자
            </button>
          </div>
        </div>
        {/* 고민 입력 박스 */}
        <input
          className="mt-7 ml-7
          w-[280px] h-[200px] bg-slate-100 bg-opacity-30 rounded-[19px] outline-none
        text-center font-ham-l text-[#505050] text-[14px]"
          placeholder="고민을 입력해주세요"
        />
      </div>
      {/* 고민 상담받기 버튼 */}
      <div>
        <button
          type="button"
          className=" m-auto text-center p-3 px-9 text-[13px]
         bg-stone-300 bg-opacity-25 rounded-[29px] shadow-inner border border-stone-400
         text-stone-600 font-ham-m "
        >
          할머니에게 고민 상담 받기
        </button>
      </div>
    </div>
  );
}
export default InputWorryL;
