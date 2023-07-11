import React from 'react';
import { useNavigate } from 'react-router-dom';
// import back from '@/assets/images/back.png';

function MainPage() {
  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언

  function toBook() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/book');
  }

  return (
    <div
      className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center 
    flex justify-center items-end pb-10 "
    >
      {/* 배경이미지 */}
      {/* <img
        className="bg-dontworrybg bg-repeat z-40"
        src={back}
        alt="backgroundImage"
      /> */}

      <div className="flex flex-col items-center justify-center z-50  ">
        {/* 로고 텍스트 */}
        <div className="text-white font-ham text-[110px] ">Don&rsquo;t</div>
        <div className="text-white font-ham text-[110px] ">Worry</div>
        {/* 고민해결하러가기 버튼 */}
        <button
          className="text-white font-ham-l rounded-full bg-mainbutton px-16 py-4 text-[20px] mt-10
          transition hover:bg-[#F8ECFF] hover:text-mainbutton "
          onClick={() => toBook()}
          type="button"
        >
          고민 해결하러 가기
        </button>
      </div>
    </div>
  );
}

export default MainPage;
