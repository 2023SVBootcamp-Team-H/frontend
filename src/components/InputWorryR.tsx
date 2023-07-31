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
import LoadingScreen from './LoadingScreen';

function findImage(tag: string) {
  return AllCharacter.map((x) => x.image)[
    AllCharacter.map((x) => x.name).findIndex((x) => x === tag)
  ];
}
function InputWorryR({ props: onClickToggleModal }: any) {
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
          className="w-[25vw] opacity-30"
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
        <div className="w-[100%] h-[100%] flex flex-col justify-around items-center">
          <div className="font-ham-m mt-[2vw] text-textTitle text-center text-[1.5vw]">
            {`${CharacterButton}`}의 답변
          </div>
          <img
            className="w-[40%]"
            src={findImage(CharacterButton)}
            alt={`${CharacterButton}`}
          />
          <div className="w-[85%] h-auto flex-grow flex-wrap overflow-auto text-center font-ham-l text-[1.2vw] leading-6">
            {message}
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="w-[60%] py-3 text-[1vw] font-ham-m text-center text-stone-600 
             bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner
              border border-stone-400"
          >
            <span className="font-bold text-textTitle">{`${showPersonality}할머니`}</span>
            의 답변을 만족하시나요?
          </button>
          <button
            type="button"
            onClick={() => toMain()}
            className="w-[100%] h-[4%] flex invisible justify-center items-center text-[1vw] text-stone-600 font-ham"
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
            {/* {`${CharacterButton}`}의 답변 */}
            할머니의 답변
          </div>
          <img
            className="w-[40%]"
            // src={findImage(CharacterButton)}
            // alt={`${CharacterButton}`}
            src={grandma}
            alt={grandma}
          />
          <div className="w-[85%] h-[40%] flex-wrap overflow-auto text-center font-ham-l text-[1vw] leading-6">
            {/* {message} */}
            아이고, 내 별님아, 어려운 날이 있죠. 그런데 그게 다 살아가는
            과정이란다. 우선은 차분하게 마음을 가라앉히고, 따뜻한 차 한 잔도
            괜찮을 거 같네. 때론 이야기를 친구나 가족에게 나누는 것도 마음을
            가볍게 해준다네. 그런 후에 오늘 무슨 일이 힘들게 했는지 좀 생각해봐.
            내일은 어떻게 그 문제를 극복할지, 혹은 더 나은 하루를 만들어볼 수
            있는 방법을 생각해봐, 내 새끼야. 그리고 그렇게 생각해본 후에는
            아이고, 내 별님아, 어려운 날이 있죠. 그런데 그게 다 살아가는
            과정이란다. 우선은 차분하게 마음을 가라앉히고, 따뜻한 차 한 잔도
            괜찮을 거 같네. 때론 이야기를 친구나 가족에게 나누는 것도 마음을
            가볍게 해준다네. 그런 후에 오늘 무슨 일이 힘들게 했는지 좀 생각해봐.
            내일은 어떻게 그 문제를 극복할지, 혹은 더 나은 하루를 만들어볼 수
            있는 방법을 생각해봐, 내 새끼야. 그리고 그렇게 생각해본 후에는
          </div>
          <button
            type="button"
            onClick={onClickToggleModal}
            className="w-[60%] py-3 text-[0.7vw] font-ham-m text-center text-stone-600 
             bg-[#E5DDD2] bg-opacity-20 rounded-[29px] shadow-inner
              border border-stone-400"
          >
            <span className="font-bold text-textTitle">{CharacterButton}</span>
            의 답변을 만족하시나요?
          </button>
          <button
            type="button"
            onClick={() => toMain()}
            className="w-[100%] h-[4%] flex justify-center items-center text-[0.7vw] text-stone-600 font-ham"
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

export default InputWorryR;
