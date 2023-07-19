import React from 'react';
import 'animate.css';
import StatisticsL from '@/components/StatisticsL';
import StatisticsR from '@/components/StatisticsR';
// import HTMLFlipBook from 'react-pageflip';
// import family from '@/assets/images/category/family.png';
// import frame from '@/assets/images/frame.png';

function SatisfactionPage() {
  return (
    // 배경
    <div
      className=" bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    flex justify-center items-center"
    >
      {/* 책 전체 요소 */}
      <div
        className="animate__animated animate__fadeIn
        flex justify-center items-center
        w-[fit] h-[fit] px-4 pt-5 pb-8 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md "
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        "
        >
          {/* 왼쪽 이미지 */}
          <StatisticsL />
        </div>
        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud h-[620px] w-[450px]
      bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
  flex "
        >
          {/* 오른쪽 이미지 */}
          <StatisticsR />
        </div>
      </div>
    </div>
  );
}

export default SatisfactionPage;
