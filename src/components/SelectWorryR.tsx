import React, { useState } from 'react';
import 'animate.css';
import care from '@/assets/images/category/care.png';
import future from '@/assets/images/category/future.png';
import health from '@/assets/images/category/health.png';
import hobby from '@/assets/images/category/hobby.png';
import military from '@/assets/images/category/military.png';
import money from '@/assets/images/category/money.png';
import sports from '@/assets/images/category/sports.png';
import wedding from '@/assets/images/category/wedding.png';

// function SelectWorryR() {
//   return (
//     <div className="flex flex-col justify-center items-center m-auto space-y-5">
//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-5">
//         {/* 운동 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
//             src={sports}
//             alt="sports"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             운동
//           </div>
//         </button>
//         {/* 취미 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
//             src={hobby}
//             alt="hobby"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             학업
//           </div>
//         </button>
//       </div>

//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
//         {/* 결혼 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
//             src={wedding}
//             alt="wedding"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             결혼
//           </div>
//         </button>

//         {/* 육아 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
//             src={care}
//             alt="care"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             육아
//           </div>
//         </button>
//       </div>

//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
//         {/* 경제 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
//             src={money}
//             alt="money"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             경제
//           </div>
//         </button>

//         {/* 군대 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
//             src={military}
//             alt="military"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             군대
//           </div>
//         </button>
//       </div>

//       <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
//         {/* 건강 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
//             src={health}
//             alt="health"
//           />
//           <div className="flex items-center justify-center mt-2 mr-10">
//             건강
//           </div>
//         </button>

//         {/* 미래 버튼 */}
//         <button type="button">
//           <img
//             className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
//             src={future}
//             alt="future"
//           />
//           <div className="flex items-center justify-center mt-2 ml-10">
//             미래
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SelectWorryR;

interface SelectWorryRProps {
  category: string;
  imageSrc: string;
  buttonText: string;
}

interface ButtonProps extends SelectWorryRProps {
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
      className={`flex flex-col items-center justify-center opacity-60 mr-10 ml-10 ${
        activeButton === category ? 'text-textTitle opacity-90' : ''
      }`}
    >
      <img className="w-[90px] h-[90px]" src={imageSrc} alt={category} />
      <div className="mt-1 ">{buttonText}</div>
    </button>
  );
}

function SelectWorryR() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="">
      <div className="font-ham-m flex justify-center items-center mt-6">
        <Button
          category="sports"
          imageSrc={sports}
          buttonText="운동"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="hobby"
          imageSrc={hobby}
          buttonText="취미"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="font-ham-m flex justify-center items-center mt-8">
        <Button
          category="wedding"
          imageSrc={wedding}
          buttonText="결혼"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="care"
          imageSrc={care}
          buttonText="육아"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="font-ham-m flex justify-center items-center mt-10">
        <Button
          category="money"
          imageSrc={money}
          buttonText="경제"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="military"
          imageSrc={military}
          buttonText="군대"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
      <div className="font-ham-m flex justify-center items-center mt-8">
        <Button
          category="health"
          imageSrc={health}
          buttonText="건강"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
        <Button
          category="future"
          imageSrc={future}
          buttonText="미래"
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      </div>
    </div>
  );
}

export default SelectWorryR;
