import React, { useState } from 'react';
import 'animate.css';
import course from '@/assets/images/category/course.png';
import family from '@/assets/images/category/family.png';
import friendship from '@/assets/images/category/friendship.png';
import job from '@/assets/images/category/job.png';
import love from '@/assets/images/category/love.png';
import study from '@/assets/images/category/study.png';
import { SelectWorryProps } from '@/pages/BookPage';
// function SelectWorryL() {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className=" ">
//       <div
//         className="font-ham text-textTitle text-[20px] mt-10 flex justify-center items-center
//         "
//       >
//         고민 카테고리를 골라주세요
//       </div>
//       <div className="font-ham-m flex justify-center items-center mt-10">
//         {/* 가족관계 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'family' ? 'text-textTitle' : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
//             src={family}
//             alt="family"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             가족관계
//           </div>
//         </button>
//         {/* 학업 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'study' ? 'text-textTitle' : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
//             src={study}
//             alt="study"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             학업
//           </div>
//         </button>
//       </div>

//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
//         {/* 직장/알바 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'job' ? 'text-textTitle' : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
//             src={job}
//             alt="job"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             직장/알바
//           </div>
//         </button>

//         {/* 진로/취업 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'course' ? 'text-textTitle' : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
//             src={course}
//             alt="course"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             진로/취업
//           </div>
//         </button>
//       </div>

//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
//         {/* 우정 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'friendship'
//               ? 'text-textTitle'
//               : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
//             src={friendship}
//             alt="friendship"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             우정
//           </div>
//         </button>

//         {/* 연애 버튼 */}
//         <button
//           type="button"
//           onClick={() => handleButtonClick('family')}
//           className={`${
//             activeButton === 'love' ? 'text-textTitle' : 'text-textCategory'
//           }`}
//         >
//           <img
//             className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
//             src={love}
//             alt="love"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             연애
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SelectWorryL;

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
          category="family"
          imageSrc={family}
          buttonText="가족관계"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="study"
          imageSrc={study}
          buttonText="학업"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="font-ham-m flex justify-center items-center mt-10">
        <Button
          category="job"
          imageSrc={job}
          buttonText="직장/알바"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="course"
          imageSrc={course}
          buttonText="진로/취업"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="font-ham-m flex justify-center items-center mt-10">
        <Button
          category="friendship"
          imageSrc={friendship}
          buttonText="우정"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="love"
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
