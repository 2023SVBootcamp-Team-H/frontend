import React, { useState } from 'react';
import 'animate.css';
// eslint-disable-next-line import/no-unresolved
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
    <div className="flex justify-center items-center hvr-curl-bottom-right w-[100%] h-[100%]">
      <div className="flex justify-center items-center w-[100%] h-[100%] p-4 bg-pageBackgroud outline-pageOutline outline outline-[15px] rounded-md">
        <div
          className="bg-pageBackgroud  w-[100%] h-[100%] 
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
            className=" w-[20%] h-[4%] items-center text-[1vw]
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
          >
            Prev
          </button>
        </div>
        <div
          className="bg-pageBackgroud w-[100%] h-[100%] 
          bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat
        flex flex-col content-center items-center"
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
            className=" w-[20%] h-[4%] mt-auto items-center text-[1vw] bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197] text-[#7C5197] font-ham-l text-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
