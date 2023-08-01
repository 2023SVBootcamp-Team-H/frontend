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

// function InputWorryT({ selectedChar }: InputWorryLProps) {
function InputWorryT({ props: onClickToggleModal }: any) {
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
    return `w-[30%] py-[0.5vw] rounded-[39px] border shadow-inner text-stone-600 
    text-[0.2vw] origin-center leading-[13.20px] ${
      age === ageSelected
        ? 'bg-[#ECE6F5] border-[#7C5197]'
        : 'bg-[#ECE7DE] border-[#B1AAA2]'
    }`;
  };

  // 선택된 성별 버튼의 색상을 반환하는 함수
  const getGenderButtonStyle = (genderSelected: string) => {
    return `w-[40%] py-[0.5vw] rounded-[39px] border shadow-inner text-stone-600 
    text-[0.8vw] origin-center leading-[13.20px] ${
      gender === genderSelected
        ? 'bg-[#ECE6F5] border-[#7C5197]'
        : 'bg-[#ECE7DE] border-[#B1AAA2]'
    }`;
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
    console.log(data);
    try {
      setLoading(1);

      const response = await fetch('https://www.witchsmind.com/worry/sse/', {
        // const response = await fetch('http://127.0.0.1:8000/worry/sse', {
        method: 'POST',
        headers: {
          Connection: 'keep-alive',
          'Cache-Control': 'no-cache',
          'Content-Type': 'text/event-stream',
        },
        body: JSON.stringify(data),
      });
      setLoading(2);
      const reader = response
        .body!.pipeThrough(new TextDecoderStream())
        .getReader();
      let str = '';
      while (true) {
        // value: 서버에서 보내는 딸깍 단어, done: 스트림이 끝났는지 여부
        const { value, done } = await reader.read();
        console.log(value);
        // 스트림이 끝나면 break! (여기서 하고싶은 작업을 한다.. ex: 로딩창 제거)
        if (value === 'stop') {
          const { value, done } = await reader.read();
          setAnswerId(Number(value!));
          break;
        }
        // error 발생시 에러 메시지를 읽어올수있다.
        if (value === 'error_message') {
          const { value, done } = await reader.read();
          const error_message = value;
          console.log(error_message);
          break;
        }
        if (done === true) break;
        str += value;
        setMessage(str);
      }
      setLoading(3);
      //
      // setMessage(response.data.message);
      // setAnswerId(response.data.answerid);
    } catch (e) {
      console.log(e);
      setLoading(0);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center w-[100%] h-[100%] font-ham-m space-y-[2.5vw]">
      {/* 고민 입력 창 제목 */}
      <div className=" text-textTitle text-[3.5vw]">무엇이 고민인가요?</div>
      {/* 나이, 성별, 고민 입력 전체 배경 */}
      <div
        className="
        flex flex-col justify-around p-[1.2vw] w-[90%] h-[65%] 
      bg-[#E6DED3] rounded-[19px] shadow-inner"
      >
        <div className="flex justify-center items-center font-ham-m">
          <div className="w-[20%] text-textTitle text-[1vw] flex justify-center">
            나이대
          </div>

          <div className="flex flex-col justify-around w-[60%] px-2">
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
          <div className="w-[20%] font-ham-m text-textTitle text-[1vw] flex justify-center">
            성별
          </div>
          {/* 여자, 남자 버튼 */}
          <div className="flex justify-around w-[60%]">
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
          className="flex items-center justify-center w-[100%] h-[60%] p-[0.8vw] mt-[3%]"
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
        onClick={() => {
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

export default InputWorryT;