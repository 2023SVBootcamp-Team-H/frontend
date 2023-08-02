import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { personalityState } from '@/Recoil';
import friendF_off from '@/assets/images/character/friendF_off.png';
import friendF_on from '@/assets/images/character/friendF_on.png';
import friendT_off from '@/assets/images/character/friendT_off.png';
import friendT_on from '@/assets/images/character/friendT_on.png';
import gradeTwo_off from '@/assets/images/character/gradeTwo_off.png';
import gradeTwo_on from '@/assets/images/character/gradeTwo_on.png';
import grandma_off from '@/assets/images/character/grandma_off.png';
import grandma_on from '@/assets/images/character/grandma_on.png';
import rapper_off from '@/assets/images/character/rapper_off.png';
import rapper_on from '@/assets/images/character/rapper_on.png';

interface SelectCharRProps {
  onSelectChar: (character: string) => void;
}

function SelectCharR({ onSelectChar }: SelectCharRProps) {
  // 사용자가 선택한 인격 저장할 Recoil
  const [personality, setPersonality] = useRecoilState(personalityState);

  const handleCharButtonClick = (character: string) => {
    setPersonality(character);
    onSelectChar(character);
  };

  // const [currentClick, setCurrentClick] = useState(null);
  // const [prevClick, setPrevClick] = useState(null);

  // const onClick = (e: string) => {
  //   setCurrentClick(character);
  // };

  // useEffect(
  //   (e) => {
  //     if (currentClick !== null) {
  //       const current = document.getElementById(currentClick);
  //     }
  //     if (prevClick !== null) {
  //       const prev = document.getElementById(prevClick);
  //     }
  //     setPrevClick(currentClick);
  //   },
  //   [currentClick],
  // );

  const [isHoveringGrandma, setIsHoveringGrandma] = useState(false);
  const [isHoveringF, setIsHoveringF] = useState(false);
  const [isHoveringT, setIsHoveringT] = useState(false);
  const [isHoveringGradeT, setIsHoveringGradeT] = useState(false);
  const [isHoveringRap, setIsHoveringRap] = useState(false);

  return (
    <div
      className="flex flex-col justify-around w-[100%] h-[100%]
    font-ham-m text-textCategory text-[1.2vw]"
    >
      <button
        className="w-[50%] self-center"
        type="button"
        onMouseOver={() => setIsHoveringGrandma(true)}
        onMouseOut={() => setIsHoveringGrandma(false)}
        onFocus={() => setIsHoveringGrandma(true)}
        onBlur={() => setIsHoveringGrandma(false)}
        onClick={() => handleCharButtonClick('할머니')}
      >
        {personality === '할머니' ? (
          <img
            className="w-[100%] flex items-center justify-center opacity-100 onclick:opacity-100 px-8"
            src={grandma_on}
            alt="grandma_on"
          />
        ) : (
          <img
            className="w-[100%] flex items-center justify-center opacity-70 hover:opacity-100 px-8"
            src={isHoveringGrandma ? grandma_on : grandma_off}
            alt="grandma_on"
          />
        )}
        <div className="flex justify-center">할머니</div>
      </button>

      {/* <div className="font-ham-m text-textCategory flex justify-center items-center">
        할머니 버튼
      </div> */}

      <div className=" flex justify-center items-center">
        {/* F친구 버튼 */}
        <button
          className="w-[50%]"
          type="button"
          onMouseOver={() => setIsHoveringF(true)}
          onMouseOut={() => setIsHoveringF(false)}
          onFocus={() => setIsHoveringF(true)}
          onBlur={() => setIsHoveringF(false)}
          onClick={() => handleCharButtonClick('F 친구')}
        >
          {personality === 'F 친구' ? (
            <img
              className="flex items-center justify-center w-[100%]  px-8 "
              src={friendF_on}
              alt="friendF_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[100%]  px-8"
              src={isHoveringF ? friendF_on : friendF_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">F 친구</div>
        </button>

        {/* T친구 버튼 */}
        <button
          className="w-[50%]"
          type="button"
          onMouseOver={() => setIsHoveringT(true)}
          onMouseOut={() => setIsHoveringT(false)}
          onFocus={() => setIsHoveringT(true)}
          onBlur={() => setIsHoveringT(false)}
          onClick={() => handleCharButtonClick('T 친구')}
        >
          {personality === 'T 친구' ? (
            <img
              className="flex items-center justify-center w-[100%]  px-8"
              src={friendT_on}
              alt="friendT_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[100%]  px-8"
              src={isHoveringT ? friendT_on : friendT_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">T 친구</div>
        </button>
      </div>

      <div className="flex justify-center items-center">
        {/* 래퍼 버튼 */}
        <button
          className="w-[50%]"
          type="button"
          onMouseOver={() => setIsHoveringRap(true)}
          onMouseOut={() => setIsHoveringRap(false)}
          onFocus={() => setIsHoveringRap(true)}
          onBlur={() => setIsHoveringRap(false)}
          onClick={() => handleCharButtonClick('래퍼')}
        >
          {personality === '래퍼' ? (
            <img
              className="flex items-center justify-center w-[100%]  px-8"
              src={rapper_on}
              alt="rapper_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[100%]  px-8"
              src={isHoveringRap ? rapper_on : rapper_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">래퍼</div>
        </button>

        {/* 중2 버튼 */}
        <button
          className="w-[50%]"
          type="button"
          onMouseOver={() => setIsHoveringGradeT(true)}
          onMouseOut={() => setIsHoveringGradeT(false)}
          onFocus={() => setIsHoveringGradeT(true)}
          onBlur={() => setIsHoveringGradeT(false)}
          onClick={() => handleCharButtonClick('중2')}
        >
          {personality === '중2' ? (
            <img
              className="flex items-center justify-center w-[100%]  px-8"
              src={gradeTwo_on}
              alt="gradeTwo_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[100%]  px-8"
              src={isHoveringGradeT ? gradeTwo_on : gradeTwo_off}
              alt="gradeTwo_on"
            />
          )}
          <div className="flex justify-center mt-4">중2</div>
        </button>
      </div>
    </div>
  );
}

export default SelectCharR;
