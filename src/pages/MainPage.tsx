import React from 'react';
// import back from '@/assets/images/back.png';

function MainPage() {
  return (
    <div className="bg-dontworrybg bg-bgsub h-screen w-screen bg-cover">
      {/* 배경이미지 */}
      {/* <img
        className="bg-dontworrybg bg-repeat z-40"
        src={back}
        alt="backgroundImage"
      /> */}

      <div className="justify-center items-center content-center z-50 ml-[550px] pt-[430px] ">
        {/* 로고 텍스트 */}
        <div className="text-white font-ham text-[120px] ">Don&rsquo;t</div>
        <div className="text-white font-ham text-[120px] ">Worry</div>
        {/* 고민해결하러가기 버튼 */}
        <button
          className="text-white font-ham-l rounded-full bg-mainbutton px-16 py-4 text-[20px] mt-10 ml-10
          transition hover:bg-[#F8ECFF] hover:text-mainbutton "
          type="button"
        >
          고민 해결하러 가기
        </button>
      </div>
    </div>
    // <div className="bg-dontworrybg">
    //   <div className="bg-main h-screen w-screen bg-cover" />
    //   <div className="text-white font-ham text-[120px]">Don&rsquo;t Worry</div>
    // </div>
  );
}

export default MainPage;
