import React, { useState } from 'react';
import 'animate.css';
import 'hover.css/css/hover-min.css';
import AudioButton from '@/components/AudioButton';
import SelectWorryL from '@/components/SelectWorryL';
import SelectWorryR from '@/components/SelectWorryR';

export interface SelectWorryProps {
  selectedButton: string;
  handleSelectButton: (category: string) => void;
}

type handleProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

function BookPage({ handlePrevPage, handleNextPage }: handleProps) {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const handleSelectButtonL: SelectWorryProps['handleSelectButton'] = (
    categorySelected,
  ) => {
    setSelectedButton(categorySelected);
  };

  const handleSelectButtonR: SelectWorryProps['handleSelectButton'] = (
    categorySelected,
  ) => {
    setSelectedButton(categorySelected);
  };
  return (
    <div className="flex justify-center items-center hvr-curl-bottom-right">
      <div className="flex justify-center items-center w-[fit] h-[fit] p-4 bg-pageBackgroud outline-pageOutline outline outline-[15px] rounded-md px-4 pt-5 pb-8">
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px] 
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        flex flex-col items-center"
        >
          <SelectWorryL
            selectedButton={selectedButton}
            handleSelectButton={handleSelectButtonL}
          />
          <button
            type="button"
            onClick={() => {
              handlePrevPage();
            }}
            className="px-6 py-1 mt-[26px] items-center
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
          >
            Prev
          </button>
        </div>
        <div
          className="bg-pageBackgroud h-[620px] w-[450px] 
          bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat
        flex flex-col items-center"
        >
          <SelectWorryR
            selectedButton={selectedButton}
            handleSelectButton={handleSelectButtonR}
          />
          <button
            type="button"
            onClick={() => {
              handleNextPage();
            }}
            className="px-6 py-1 mt-10 bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197] text-[#7C5197] font-ham-l text-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
