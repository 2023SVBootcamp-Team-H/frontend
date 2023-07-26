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
    console.log('캐릭터');
    console.log(character);
    console.log('인격');
    console.log(personality);
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
    <div className="justify-center items-center ml-2">
      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 할머니 버튼 */}
        <button
          type="button"
          onMouseOver={() => setIsHoveringGrandma(true)}
          onMouseOut={() => setIsHoveringGrandma(false)}
          onFocus={() => setIsHoveringGrandma(true)}
          onBlur={() => setIsHoveringGrandma(false)}
          onClick={() => handleCharButtonClick('할머니')}
        >
          {personality === '할머니' ? (
            <img
              className="flex items-center justify-center opacity-100 onclick:opacity-100 w-[140px]"
              src={grandma_on}
              alt="grandma_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[140px]"
              src={isHoveringGrandma ? grandma_on : grandma_off}
              alt="grandma_on"
            />
          )}
          <div className="flex justify-center">할머니</div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* F친구 버튼 */}
        <button
          type="button"
          onMouseOver={() => setIsHoveringF(true)}
          onMouseOut={() => setIsHoveringF(false)}
          onFocus={() => setIsHoveringF(true)}
          onBlur={() => setIsHoveringF(false)}
          onClick={() => handleCharButtonClick('맑눈광')}
        >
          {personality === '맑눈광' ? (
            <img
              className="flex items-center justify-center w-[180px] px-4"
              src={friendF_on}
              alt="friendF_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[180px] px-4"
              src={isHoveringF ? friendF_on : friendF_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">F 친구</div>
        </button>

        {/* T친구 버튼 */}
        <button
          type="button"
          onMouseOver={() => setIsHoveringT(true)}
          onMouseOut={() => setIsHoveringT(false)}
          onFocus={() => setIsHoveringT(true)}
          onBlur={() => setIsHoveringT(false)}
          onClick={() => handleCharButtonClick('친구')}
        >
          {personality === '친구' ? (
            <img
              className="flex items-center justify-center w-[180px] px-4"
              src={friendT_on}
              alt="friendT_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[180px] px-4"
              src={isHoveringT ? friendT_on : friendT_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">T 친구</div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 래퍼 버튼 */}
        <button
          type="button"
          onMouseOver={() => setIsHoveringRap(true)}
          onMouseOut={() => setIsHoveringRap(false)}
          onFocus={() => setIsHoveringRap(true)}
          onBlur={() => setIsHoveringRap(false)}
          onClick={() => handleCharButtonClick('래퍼')}
        >
          {personality === '래퍼' ? (
            <img
              className="flex items-center justify-center w-[180px] px-4"
              src={rapper_on}
              alt="rapper_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[180px] px-4"
              src={isHoveringRap ? rapper_on : rapper_off}
              alt="friendF_on"
            />
          )}
          <div className="flex justify-center">래퍼</div>
        </button>

        {/* 중2 버튼 */}
        <button
          type="button"
          onMouseOver={() => setIsHoveringGradeT(true)}
          onMouseOut={() => setIsHoveringGradeT(false)}
          onFocus={() => setIsHoveringGradeT(true)}
          onBlur={() => setIsHoveringGradeT(false)}
          onClick={() => handleCharButtonClick('중2병')}
        >
          {personality === '중2병' ? (
            <img
              className="flex items-center justify-center w-[180px] px-4"
              src={gradeTwo_on}
              alt="gradeTwo_on"
            />
          ) : (
            <img
              className="flex items-center justify-center opacity-70 hover:opacity-100 w-[180px] px-4"
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
