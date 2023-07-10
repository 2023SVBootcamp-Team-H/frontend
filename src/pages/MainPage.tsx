import React from 'react';
import back from '@/assets/images/back.png';

function MainPage() {
  return (
    <div className="bg-dontworrybg ">
      <img
        className="bg-dontworrybg bg-repeat z-40"
        src={back}
        alt="backgroundImage"
      />
      <div className="justify-center items-center">
        <div className="text-white font-ham text-[120px] z-50 ">
          Don&rsquo;t
        </div>
        <div className="text-white font-ham text-[120px] z-50 ">Worry</div>
      </div>
      <button
        className="text-white font-ham-l rounded-full bg-mainbutton px-16 py-4 text-[20px]"
        type="button"
      >
        고민 해결하러 가기
      </button>
    </div>
    // <div className="bg-dontworrybg">
    //   <div className="bg-main h-screen w-screen bg-cover" />
    //   <div className="text-white font-ham text-[120px]">Don&rsquo;t Worry</div>
    // </div>
  );
}

export default MainPage;
