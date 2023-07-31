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
import { SelectWorryProps } from '@/pagesV/BookPageV';

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
      className={`flex flex-col items-center justify-center font-ham-l ${
        activeButton === category ? 'opacity-100' : 'opacity-80'
      }`}
    >
      <img className="w-[55%]" src={imageSrc} alt={category} />
      <div className="text-[2vw] mt-2">{buttonText}</div>
    </button>
  );
}

function SelectWorryT({
  selectedButton,
  handleSelectButton,
}: SelectWorryProps) {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState);

  const handleButtonClick = (category: string) => {
    setActiveButton(category);
  };

  return (
    <div className="flex flex-col justify-around w-[100%] h-[100%]">
      <div className="flex justify-center items-center text-textTitle font-ham-m text-[3vw]">
        고민 카테고리를 골라주세요
      </div>
      <div className="flex justify-around">
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
        <Button
          category="직장/알바"
          imageSrc={job}
          buttonText="직장/알바"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="flex justify-around">
        <Button
          category="진로/취업"
          imageSrc={course}
          buttonText="진로/취업"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
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
  );
}

export default SelectWorryT;
