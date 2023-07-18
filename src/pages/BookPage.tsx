// import React, { useState } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import SelectWorryL from '@/components/SelectWorryL';
import SelectWorryR from '@/components/SelectWorryR';
// import HTMLFlipBook from 'react-pageflip';
// import family from '@/assets/images/category/family.png';
// import frame from '@/assets/images/frame.png';

function BookPage() {
  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언

  function toBookPageTwo() {
    // react-router-dom을 이용한 고민 입력 페이지로 이동 함수
    navigate('/book2');
  }

  return (
    // 배경
    <div
      className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    flex justify-center items-center"
    >
      {/* 책 전체 요소 */}
      <div
        className=" animate__animated animate__fadeIn
        flex justify-center items-center
        w-[fit] h-[fit] p-4 bg-pageBackgroud
       outline-pageOutline outline outline-[15px] rounded-md
       px-4 pt-5 pb-8"
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat
        border-solid border-r-[3px] border-[#D9D3C8]
        flex flex-col items-center
        "
        >
          {/* 왼쪽 이미지 */}
          <SelectWorryL />
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud h-[620px] w-[450px]
      bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat
  flex flex-col items-center"
        >
          {/* 오른쪽 이미지 */}
          <SelectWorryR />
          <button
            onClick={() => toBookPageTwo()}
            type="button"
            className="px-6 py-1 mt-10
        bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197]
         text-[#7C5197] font-ham-l text-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookPage;

// //////////////////////////////////

// interface SelectWorryProps {
//   selectedButton: string;
//   handleSelectButton: (category: string) => void;
// }

// function BookPage() {
//   const navigate = useNavigate();
//   const [selectedButton, setSelectedButton] = useState<string>('');

//   const handleSelectButtonL = (category: string) => {
//     setSelectedButton(category);
//   };

//   const handleSelectButtonR = (category: string) => {
//     setSelectedButton(category);
//   };

//   function toBookPageTwo() {
//     navigate('/book2');
//   }

//   return (
//     <div className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center flex justify-center items-center">
//       <div className="animate__animated animate__jackInTheBox flex justify-center items-center w-[fit] h-[fit] p-4 bg-pageBackgroud outline-pageOutline outline outline-[15px] rounded-md px-4 pt-5 pb-8">
//         <div className="bg-pageBackgroud h-[620px] w-[450px] bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat border-solid border-r-[3px] border-[#D9D3C8] flex flex-col items-center">
//           <SelectWorryL
//             selectedButton={selectedButton}
//             handleSelectButton={handleSelectButtonL}
//           />
//         </div>
//         <div className="bg-pageBackgroud h-[620px] w-[450px] bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat flex flex-col items-center">
//           <SelectWorryR
//             selectedButton={selectedButton}
//             handleSelectButton={handleSelectButtonR}
//           />
//           <button
//             onClick={() => toBookPageTwo()}
//             type="button"
//             className="px-6 py-1 mt-10 bg-[#ECE6F3] rounded-full border border-solid border-[#7C5197] text-[#7C5197] font-ham-l text-center"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookPage;
