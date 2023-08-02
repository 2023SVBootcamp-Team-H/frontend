import React, { useState } from 'react';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/Recoil';
import course from '@/assets/images/category/course.png';
import family from '@/assets/images/category/family.png';
import friendship from '@/assets/images/category/friendship.png';
import job from '@/assets/images/category/job.png';
import love from '@/assets/images/category/love.png';
import study from '@/assets/images/category/study.png';
import { SelectWorryProps } from '@/pages/BookPage';

interface SelectWorryLProps {
  category: string;
  imageSrc: string;
  buttonText: string;
}

interface ButtonProps extends SelectWorryLProps {
  handleButtonClick: (buttonName: string) => void;
  activeButton: string | null;
}

function Button({
  category,
  imageSrc,
  buttonText,
  handleButtonClick,
  activeButton,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        handleButtonClick(buttonText);
        console.log(buttonText);
      }}
      className={`flex flex-col items-center justify-center opacity-70${
        activeButton === category ? 'text-textTitle opacity-100' : ''
      }`}
    >
      <img className="w-[50%] h-[50%]" src={imageSrc} alt={category} />
      <div className="mt-2">{buttonText}</div>
    </button>
  );
}

function SelectWorryL({
  selectedButton,
  handleSelectButton,
}: SelectWorryProps) {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState);

  const handleButtonClick = (category: string) => {
    setActiveButton(category);
  };

  return (
    <div className="flex flex-col w-[90%] h-[100%]">
      <div
        className="font-ham text-textTitle text-[1.3vw] mt-[3vw] mb-[1.2vw]
       flex justify-center items-center"
      >
        고민 카테고리를 골라주세요
      </div>
      <div className="flex-grow flex flex-col font-ham-m text-[1vw] ">
        <div className="flex flex-grow justify-around items-center ">
          <Button
            category="가족관계"
            imageSrc={family}
            buttonText="가족관계"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
          <Button
            category="학업"
            imageSrc={study}
            buttonText="학업"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
        </div>
        <div className="flex grow justify-around items-center">
          <Button
            category="직장/알바"
            imageSrc={job}
            buttonText="직장/알바"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
          <Button
            category="진로/취업"
            imageSrc={course}
            buttonText="진로/취업"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
        </div>
        <div className="flex grow justify-around items-center">
          <Button
            category="우정"
            imageSrc={friendship}
            buttonText="우정"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
          <Button
            category="연애"
            imageSrc={love}
            buttonText="연애"
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectWorryL;
