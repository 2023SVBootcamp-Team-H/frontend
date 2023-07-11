import React from 'react';
import 'animate.css';
import HTMLFlipBook from 'react-pageflip';
// import family from '@/assets/images/category/family.png';
// import frame from '@/assets/images/frame.png';

function BookPage() {
  return (
    // 배경
    <div
      className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    flex justify-center items-center"
    >
      {/* 책 요소 */}
      <div
        className="bg-pageBackgroud  outline-pageOutline outline outline-[15px] rounded-md h-[600px] w-[430px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
    flex 
    animate__animated animate__jackInTheBox"
      />
    </div>
  );
}

export default BookPage;
