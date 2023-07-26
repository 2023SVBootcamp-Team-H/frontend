import { useState, useCallback } from 'react';
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
} from '@/Recoil';
import grandma from '@/assets/images/category/grandma.png';
import waitLoading from '@/assets/images/waitLoading.png';
import SatisfactionModal from '@/components/SatisfactionModal';
import LoadingScreen from './LoadingScreen';

function findImage(tag: string) {
  return AllCharacter.map((x) => x.image)[
    AllCharacter.map((x) => x.name).findIndex((x) => x === tag)
  ];
}
function InputWorryR({ props: onClickToggleModal }: any) {
  const [showPersonality, setShowPersonality] =
    useRecoilState(personalityState);

  const loading = useRecoilValue(loadingState);
  const message = useRecoilValue(messageState);

  function currentLoading() {
    if (loading === 0) {
      return (
        <img
          className="w-[300px] opacity-30"
          src={waitLoading}
          alt="waitLoading"
        />
      );
    }
    if (loading === 1) {
      return <LoadingScreen />;
    }
    if (loading === 2) {
      return (
        <div className="flex flex-col justify-center items-center m-auto space-y-5">
          <div className="font-ham-m text-textTitle text-center text-[25px]">
            {`${showPersonality}`}의 답변
          </div>
          <img
            className=" w-[180px]"
            src={findImage(showPersonality)}
            alt={`${showPersonality}`}
          />
          <div className="w-[350px] h-[230px] text-center font-ham-l text-[16px] leading-6">
            {message}
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="w-72 py-2 text-[16px] invisible text-textTitle font-ham-l text-center bg-[#D8D7DA] rounded-full shadow-inner"
          >
            {`${showPersonality}`}의 답변을 만족하시나요?
          </button>
        </div>
      );
    }
    if (loading === 3) {
      return (
        <div className="flex flex-col justify-center items-center m-auto space-y-5">
          <div className="font-ham-m text-textTitle text-center text-[25px]">
            {`${showPersonality}`}의 답변
          </div>
          <img
            className="w-[180px]"
            src={findImage(showPersonality)}
            alt={`${showPersonality}`}
          />
          <div className="w-[350px] h-[230px] flex-wrap overflow-auto text-center font-ham-l text-[16px] leading-6">
            {message}
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="w-72  p-3 px-9 text-[13px] font-ham-m text-center  text-stone-600 
             bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner
              border border-stone-400"
          >
            <span className="font-bold text-textTitle">{`${showPersonality}`}</span>
            의 답변을 만족하시나요?
          </button>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto space-y-5">
      {currentLoading()}
    </div>
  );
}

export default InputWorryR;
