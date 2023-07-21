import React, { useState } from 'react';
import 'animate.css';
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
      onClick={() => handleButtonClick(category)}
      className={`flex flex-col items-center justify-center opacity-60 mr-9 ml-9 ${
        activeButton === category ? 'text-textTitle opacity-90' : ''
      }`}
    >
      <img className="w-[110px] h-[110px]" src={imageSrc} alt={category} />
      <div className="mt-2">{buttonText}</div>
    </button>
  );
}

function SelectWorryL({
  selectedButton,
  handleSelectButton,
}: SelectWorryProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="">
      <div className="font-ham text-textTitle text-[20px] mt-10 flex justify-center items-center">
        고민 카테고리를 골라주세요
      </div>
      <div className="font-ham-m flex justify-center items-center mt-10">
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
      <div className="font-ham-m flex justify-center items-center mt-10">
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
      <div className="font-ham-m flex justify-center items-center mt-10">
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

export default SelectWorryL;
