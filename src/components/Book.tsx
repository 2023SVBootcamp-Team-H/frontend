import React from 'react';
import 'animate.css';
// import family from '@/assets/images/category/family.png';
import frame from '@/assets/images/frame.png';

function Book() {
  return (
    <div>
      <div
        className="bg-pageBackgroud outline outline-[15px] rounded-md outline-pageOutline w-fit h-fit
    flex 
    animate__animated animate__jackInTheBox"
      >
        <img className="p-3" src={frame} alt="frame" />
        <div className="border-solid border-x-2 h-auto border-[#A9A9A9] blur-sm" />
        <img className="p-3" src={frame} alt="frame" />
      </div>

      {/* <div>
        <img className="" src={family} alt="family" />
      </div> */}
    </div>
  );
}

export default Book;
