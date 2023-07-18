import React, { useState } from 'react';
import 'animate.css';

function InputWorryL() {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');

  // 나이 버튼 클릭 핸들러
  const handleAgeButtonClick = (age: number) => {
    setSelectedAge(age);
  };

  // 성별 버튼 클릭 핸들러
  const handleGenderButtonClick = (gender: string) => {
    setSelectedGender(gender);
  };

  // 고민 입력 핸들러
  const handleInputTextChange = (event: any) => {
    setInputText(event.target.value);
  };

  // 선택된 나이 버튼의 색상을 반환하는 함수
  const getAgeButtonStyle = (age: number) => {
    return `w-[60px] h-[27px] bg ${
      selectedAge === age ? 'bg-[#ECE6F5]' : 'bg-[#ECE7DE]'
    } rounded-[39px] border ${
      selectedAge === age ? 'border-[#7C5197]' : 'border-[#B1AAA2]'
    } shadow-inner text-stone-600 text-xs font-normal origin-center leading-[13.20px]`;
  };

  // 선택된 성별 버튼의 색상을 반환하는 함수
  const getGenderButtonStyle = (gender: string) => {
    return `w-[94px] h-[27px] bg ${
      selectedGender === gender ? 'bg-[#ECE6F5]' : 'bg-[#ECE7DE]'
    } rounded-[39px] border ${
      selectedGender === gender ? 'border-[#7C5197]' : 'border-[#B1AAA2]'
    } shadow-inner text-stone-600 text-xs font-normal origin-center leading-[13.20px] `;
  };

  // 고민 상담받기 버튼 활성화 여부 확인 함수
  const isSubmitButtonDisabled = () => {
    return !(selectedAge && selectedGender && inputText.trim().length > 0);
  };

  // 고민 상담받기 버튼 비활성화일 때 투명도 조정을 위한 클래스 반환 함수
  const getSubmitButtonOpacityClass = () => {
    return isSubmitButtonDisabled() ? 'opacity-60' : '';
  };

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
                className={getAgeButtonStyle(10)}
                onClick={() => handleAgeButtonClick(10)}
              >
                10대
              </button>
              {/* 20대 버튼 */}
              <button
                type="button"
                className={getAgeButtonStyle(20)}
                onClick={() => handleAgeButtonClick(20)}
              >
                20대
              </button>
              {/* 30대 버튼 */}
              <button
                type="button"
                className={getAgeButtonStyle(30)}
                onClick={() => handleAgeButtonClick(30)}
              >
                30대
              </button>
            </div>
            <div className="space-x-3">
              {/* 40대 버튼 */}
              <button
                type="button"
                className={getAgeButtonStyle(40)}
                onClick={() => handleAgeButtonClick(40)}
              >
                40대
              </button>
              {/* 50대 버튼 */}
              <button
                type="button"
                className={getAgeButtonStyle(50)}
                onClick={() => handleAgeButtonClick(50)}
              >
                50대
              </button>
              {/* 60대 버튼 */}
              <button
                type="button"
                className={getAgeButtonStyle(60)}
                onClick={() => handleAgeButtonClick(60)}
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
              className={getGenderButtonStyle('여자')}
              onClick={() => handleGenderButtonClick('여자')}
            >
              여자
            </button>
            {/* 남자 버튼 */}
            <button
              type="button"
              className={getGenderButtonStyle('남자')}
              onClick={() => handleGenderButtonClick('남자')}
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
          value={inputText}
          onChange={handleInputTextChange}
        />
      </div>
      {/* 고민 상담받기 버튼 */}
      <div>
        <button
          type="button"
          className={`m-auto text-center p-3 px-9 text-[13px]
          bg-stone-300 bg-opacity-25 rounded-[29px] shadow-inner border border-stone-400
          text-stone-600 font-ham-m ${getSubmitButtonOpacityClass()}`}
          disabled={isSubmitButtonDisabled()}
        >
          할머니에게 고민 상담 받기
        </button>
      </div>
    </div>
  );
}
export default InputWorryL;
