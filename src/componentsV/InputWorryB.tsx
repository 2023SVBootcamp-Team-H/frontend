import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import AllCharacter from '@/Character';
import {
  categoryState,
  personalityState,
  ageState,
  genderState,
  contentState,
  loadingState,
  messageState,
  charcterButtonState,
} from '@/Recoil';
import grandma from '@/assets/images/category/grandma.png';
import popularbuttonIconBr from '@/assets/images/popularbuttonIconBr.svg';
import waitLoading from '@/assets/images/waitLoading.png';
import SatisfactionModal from '@/components/SatisfactionModal';
import LoadingScreenV from './LoadingScreenV';

function findImage(tag: string) {
  return AllCharacter.map((x) => x.image)[
    AllCharacter.map((x) => x.name).findIndex((x) => x === tag)
  ];
}
function InputWorryB({ props: onClickToggleModal }: any) {
  const navigate = useNavigate();

  function toMain() {
    navigate('/');
  }

  const [showPersonality, setShowPersonality] =
    useRecoilState(personalityState);

  // 버튼에서 받아온 사용자가 선택한 인격
  const [CharacterButton, setCharacterButton] =
    useRecoilState(charcterButtonState);

  const loading = useRecoilValue(loadingState);
  const message = useRecoilValue(messageState);

  function currentLoading() {
    if (loading === 0) {
      return (
        <img
          className="w-[35vw] opacity-30"
          src={waitLoading}
          alt="waitLoading"
        />
      );
    }
    if (loading === 1) {
      return <LoadingScreenV />;
    }
    if (loading === 2) {
      return (
        <div className="w-[100%] h-[100%] flex flex-col justify-around items-center">
          <div className="font-ham-m mt-[2vw] text-textTitle text-center text-[1.5vw]">
            {`${CharacterButton}`}의 답변
          </div>
          <img
            className="w-[40%]"
            src={findImage(CharacterButton)}
            alt={`${CharacterButton}`}
          />
          <div className="w-[85%] h-[40%] flex-wrap overflow-auto text-center font-ham-l text-[1vw] leading-6">
            {message}
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="invisible
            w-[60%] py-3 text-[0.9vw] font-ham-m text-center text-stone-600
           bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner
            border border-stone-400"
          >
            <span className="font-bold text-[0.9vw] text-textTitle">
              {CharacterButton}
            </span>
            의 답변을 만족하시나요?
          </button>
          <button
            type="button"
            onClick={() => toMain()}
            className="invisible
            w-[100%] h-[4%] flex justify-center items-center text-[0.8vw] text-stone-600 font-ham"
          >
            홈으로 돌아가기
            <img
              className="w-[14px] ml-1 "
              src={popularbuttonIconBr}
              alt="popularbuttonIconBr"
            />
          </button>
        </div>
      );
    }
    if (loading === 3) {
      return (
        <div className="w-[100%] h-[100%] flex flex-col justify-around items-center">
          <div className="font-ham-m mt-[2vw] text-textTitle text-center text-[1.5vw]">
            {`${CharacterButton}`}의 답변
          </div>
          <img
            className="w-[40%]"
            src={findImage(CharacterButton)}
            alt={`${CharacterButton}`}
          />
          <div className="w-[85%] h-[40%] flex-wrap overflow-auto text-center font-ham-l text-[1vw] leading-6">
            {message}
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="w-[60%] py-3 text-[0.9vw] font-ham-m text-center text-stone-600 
             bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner
              border border-stone-400"
          >
            <span className="font-bold text-[0.9vw] text-textTitle">
              {CharacterButton}
            </span>
            의 답변을 만족하시나요?
          </button>
          <button
            type="button"
            onClick={() => toMain()}
            className="w-[100%] h-[4%] flex justify-center items-center text-[0.8vw] text-stone-600 font-ham"
          >
            홈으로 돌아가기
            <img
              className="w-[14px] ml-1 "
              src={popularbuttonIconBr}
              alt="popularbuttonIconBr"
            />
          </button>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
      {currentLoading()}
    </div>
  );
}

export default InputWorryB;
