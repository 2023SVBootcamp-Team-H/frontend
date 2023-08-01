import React, { useState } from 'react';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { activeButtonState } from '@/Recoil';
import care from '@/assets/images/category/care.png';
import future from '@/assets/images/category/future.png';
import health from '@/assets/images/category/health.png';
import hobby from '@/assets/images/category/hobby.png';
import military from '@/assets/images/category/military.png';
import money from '@/assets/images/category/money.png';
import sports from '@/assets/images/category/sports.png';
import wedding from '@/assets/images/category/wedding.png';
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
      <img className="w-[78%]" src={imageSrc} alt={category} />
      <div className="text-[2vw] mt-2">{buttonText}</div>
    </button>
  );
}

function SelectWorryB({
  selectedButton,
  handleSelectButton,
}: SelectWorryProps) {
  const [activeButton, setActiveButton] = useRecoilState(activeButtonState);

  const handleButtonClick = (category: string) => {
    setActiveButton(category);
  };

  return (
    <div className="flex flex-col justify-around w-[100%] h-[100%]">
      <div className="flex">
        <Button
          category="운동"
          imageSrc={sports}
          buttonText="운동"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="취미"
          imageSrc={hobby}
          buttonText="취미"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="결혼"
          imageSrc={wedding}
          buttonText="결혼"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="육아"
          imageSrc={care}
          buttonText="육아"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="flex">
        <Button
          category="경제"
          imageSrc={money}
          buttonText="경제"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="군대"
          imageSrc={military}
          buttonText="군대"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="건강"
          imageSrc={health}
          buttonText="건강"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="미래"
          imageSrc={future}
          buttonText="미래"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
    </div>
  );
}

export default SelectWorryB;
