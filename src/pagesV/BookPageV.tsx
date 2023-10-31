import React, { useState } from 'react';
import 'animate.css';
import 'hover.css/css/hover-min.css';
import SelectWorryB from '@/componentsV/SelectWorryB';
import SelectWorryT from '@/componentsV/SelectWorryT';

export interface SelectWorryProps {
  selectedButton: string;
  handleSelectButton: (category: string) => void;
}

type handleProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

function BookPageV({ handlePrevPage, handleNextPage }: handleProps) {
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
      <div
        className="
          flex flex-col justify-center items-center hvr-curl-bottom-right
          w-[100%] h-[100%] p-[1%] bg-pageBackgroud 
          outline-pageOutline outline outline-[15px] rounded-md "
      >
        <button
          type="button"
          onClick={() => {
            handlePrevPage();
          }}
          className=" w-[20%] h-[4%] items-center text-[1vw] justify-self-end
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
        >
          Prev
        </button>
        <div
          className="bg-pageBackgroud  w-[100%] h-[46%] 
        bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        flex flex-col items-center
        border-solid border-b-[3px] border-[#D9D3C8] "
        >
          <SelectWorryT
            selectedButton={selectedButton}
            handleSelectButton={handleSelectButtonL}
          />
        </div>
        <div
          className="bg-pageBackgroud w-[100%] h-[46%] 
          bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat
        flex flex-col content-center items-center"
        >
          <SelectWorryB
            selectedButton={selectedButton}
            handleSelectButton={handleSelectButtonR}
          />
        </div>
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
  );
}

export default BookPageV;
