import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'animate.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryState,
  personalityState,
  ageState,
  genderState,
  contentState,
  loadingState,
  messageState,
  answeridState,
  activeButtonState,
  charcterButtonState,
  nicknameState,
} from '@/Recoil';

// interface InputWorryLProps {
//   selectedChar: string;
// }

// function InputWorryL({ selectedChar }: InputWorryLProps) {
function InputWorryL({ props: onClickToggleModal }: any) {
  // Recoil
  const [age, setAge] = useRecoilState(ageState);
  const [gender, setGender] = useRecoilState(genderState);
  const [inputText, setInputText] = useRecoilState(contentState);
  const [inputNickname, setInputNickname] = useRecoilState(nicknameState);

  const [showPersonality, setShowPersonality] =
    useRecoilState(personalityState);

  const [, setLoading] = useRecoilState(loadingState);

  const activeButton = useRecoilValue(activeButtonState); // 선택된 카테고리
  const personality = useRecoilValue(personalityState); // 선택된 인격
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useRecoilState(messageState);
  const [answerId, setAnswerId] = useRecoilState(answeridState);

  const [CharacterButton, setCharacterButton] =
    useRecoilState(charcterButtonState);

  const handleButtonClick = () => {
    // Check if the input field is indeed present
    if (textareaRef.current) {
      // Focus on the input field
      textareaRef.current.focus();
    }
  };
  // 나이 버튼 클릭 핸들러
  const handleAgeButtonClick = (ageSelected: number) => {
    setAge(ageSelected);
  };

  // 성별 버튼 클릭 핸들러
  const handleGenderButtonClick = (genderSelected: string) => {
    setGender(genderSelected);
  };

  // 고민 입력 핸들러
  const handleInputTextChange = (event: any) => {
    setInputText(event.target.value);
  };

  // 선택된 나이 버튼의 색상을 반환하는 함수
  const getAgeButtonStyle = (ageSelected: number) => {
    return `w-[30%] py-[0.5vw] text-[0.8vw]  bg ${
      age === ageSelected ? 'bg-[#ECE6F5]' : 'bg-[#ECE7DE]'
    } rounded-[39px] border ${
      age === ageSelected ? 'border-[#7C5197]' : 'border-[#B1AAA2]'
    } shadow-inner text-stone-600 text-[0.8vw] font-normal origin-center leading-[13.20px]`;
  };

  // 선택된 성별 버튼의 색상을 반환하는 함수
  const getGenderButtonStyle = (genderSelected: string) => {
    return `w-[40%] py-[0.5vw] text-[0.8vw]  bg ${
      gender === genderSelected ? 'bg-[#ECE6F5]' : 'bg-[#ECE7DE]'
    } rounded-[39px] border ${
      gender === genderSelected ? 'border-[#7C5197]' : 'border-[#B1AAA2]'
    } shadow-inner text-stone-600 text-[0.8vw] font-normal origin-center leading-[13.20px] `;
  };

  // 고민 상담받기 버튼 활성화 여부 확인 함수
  const isSubmitButtonDisabled = () => {
    return !(age && gender && inputText.trim().length > 0);
  };

  // 고민 상담받기 버튼 비활성화일 때 투명도 조정을 위한 클래스 반환 함수
  const getSubmitButtonOpacityClass = () => {
    return isSubmitButtonDisabled() ? 'opacity-60' : '';
  };

  const handleWorrySubmit = async () => {
    const data = {
      gender,
      age,
      job: '민아',
      nickname: inputNickname,
      address: '123rf',
      content: inputText,
      category: activeButton,
      personality,
    };
    try {
      setLoading(1);
      const response = await fetch('https://www.witchsmind.com/worry/sse/', {
        // const response = await fetch('http://127.0.0.1:8000/worry/sse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const answer = await response.json();
      const answerList = answer.message;
      const answerId = answer.answer_id;
      // 0보다 작으면 error message 출력
      answerId <= 0 ? setLoading(4) : setLoading(2);

      let str = '';
      for (let i = 0; i < answerList.length; i += 1) {
        str += answerList[i];
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 30));
        setMessage(str);
      }

      if (answerId > 0) {
        setAnswerId(answerId);
      }
    } catch (e) {
      setLoading(0);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center w-[100%] h-[100%] font-ham-m space-y-[2.5vw]">
      {/* 고민 입력 창 제목 */}
      <div className=" text-textTitle text-[1.5vw] mt-[2vw]">
        무엇이 고민인가요?
      </div>
      {/* 나이, 성별, 고민 입력 전체 배경 */}
      <div className="p-[1.2vw] m-[1.2vw] mt-[2vw] flex flex-col justify-center w-[80%] h-[65%] bg-[#E6DED3] rounded-[19px] shadow-inner">
        <div className="flex justify-center items-center font-ham-m mt-[1vw]">
          <div className="w-[30%] text-textTitle text-[1vw] flex justify-center">
            나이대
          </div>

          <div className="flex flex-col justify-around w-[70%] px-2 ">
            <div className="flex justify-around">
              {/* 10대 버튼 */}
              <button
                type="button"
                value={10}
                className={getAgeButtonStyle(10)}
                onClick={() => handleAgeButtonClick(10)}
              >
                10대
              </button>
              {/* 20대 버튼 */}
              <button
                type="button"
                value={20}
                className={getAgeButtonStyle(20)}
                onClick={() => handleAgeButtonClick(20)}
              >
                20대
              </button>
              {/* 30대 버튼 */}
              <button
                type="button"
                value={30}
                className={getAgeButtonStyle(30)}
                onClick={() => handleAgeButtonClick(30)}
              >
                30대
              </button>
            </div>
            <div className="flex justify-around mt-[0.5vw]">
              {/* 40대 버튼 */}
              <button
                type="button"
                value={40}
                className={getAgeButtonStyle(40)}
                onClick={() => handleAgeButtonClick(40)}
              >
                40대
              </button>
              {/* 50대 버튼 */}
              <button
                type="button"
                value={50}
                className={getAgeButtonStyle(50)}
                onClick={() => handleAgeButtonClick(50)}
              >
                50대
              </button>
              {/* 60대 버튼 */}
              <button
                type="button"
                value={60}
                className={getAgeButtonStyle(60)}
                onClick={() => handleAgeButtonClick(60)}
              >
                60대
              </button>
            </div>
          </div>
        </div>

        {/* 성별 선택 박스 */}
        <div className="flex justify-center items-center mt-[1vw]">
          {/* 성별 텍스트 */}
          <div className="w-[30%] font-ham-m text-textTitle text-[1vw] flex justify-center">
            성별
          </div>
          {/* 여자, 남자 버튼 */}
          <div className="flex justify-around w-[70%]">
            {/* 여자 버튼 */}
            <button
              type="button"
              className={getGenderButtonStyle('female')}
              onClick={() => handleGenderButtonClick('female')}
            >
              여자
            </button>
            {/* 남자 버튼 */}
            <button
              type="button"
              className={getGenderButtonStyle('male')}
              onClick={() => handleGenderButtonClick('male')}
            >
              남자
            </button>
          </div>
        </div>
        {/* 고민 입력 박스 */}
        <button
          className="h-[70%] p-[0.8vw] mt-[8%]"
          onClick={handleButtonClick}
          type="button"
        >
          <textarea
            ref={textareaRef}
            className="leading-6 p-[0.8vw]
          w-[100%] h-[100%] bg-slate-100 bg-opacity-30 rounded-[19px] outline-none
         font-ham-l text-[#505050] text-[1vw]"
            value={inputText}
            onChange={handleInputTextChange}
            placeholder="고민을 입력해주세요."
          />
        </button>
      </div>
      {/* 고민 상담받기 버튼 */}
      <button
        type="button"
        className={`w-[60%] text-center py-[0.8vw] text-[0.8vw]
          bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner border border-stone-400
          text-stone-600 font-ham-m ${getSubmitButtonOpacityClass()}`}
        disabled={isSubmitButtonDisabled()}
        onClick={async () => {
          if (inputNickname === '' || activeButton === null) {
            setMessage('');
            setLoading(4);
            const answerList =
              inputNickname === ''
                ? '닉네임을 입력해주세요.'
                : '등록된 카테고리가 없습니다.';

            let str = '';
            for (let i = 0; i < answerList.length; i += 1) {
              str += answerList[i];
              // eslint-disable-next-line no-promise-executor-return
              await new Promise((resolve) => setTimeout(resolve, 30));
              setMessage(str);
            }
            return;
          }
          handleWorrySubmit();
          setCharacterButton(showPersonality);
        }}
      >
        {showPersonality === ''
          ? '선택된 인격이 없습니다.'
          : `${showPersonality}에게 고민 상담 받기`}
      </button>
    </div>
  );
}

export default InputWorryL;
