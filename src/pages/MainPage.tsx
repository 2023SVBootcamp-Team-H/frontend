import React from 'react';
import { useNavigate } from 'react-router-dom';
import popularbuttonwhiteIcon from '@/assets/images/popularbuttonwhiteIcon.svg';

// import back from '@/assets/images/back.png';

function MainPage() {
  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언

  function toBook() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/book');
  }

  function toStatistics() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/satis');
  }

  return (
    <div
      className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center 
    flex justify-center items-end pb-6 "
    >
      <div className="flex flex-col items-center justify-center z-50  ">
        {/* 로고 텍스트 */}
        <div className="text-white font-ham text-[105px] ">Don&rsquo;t</div>
        <div className="text-white font-ham text-[105px] ">Worry</div>

        {/* 고민해결하러가기 버튼 */}
        <button
          className="text-white font-ham-l rounded-full bg-mainbutton px-12 py-4 text-[20px] mt-10
          transition hover:bg-[#F8ECFF] hover:text-mainbutton "
          onClick={() => toBook()}
          type="button"
        >
          고민 해결하러 가기
        </button>

        {/* 통계 보러가기 버튼 */}
        <button
          className="flex items-center justify-center mt-4 text-white font-ham-l text-[15px]"
          onClick={() => toStatistics()}
          type="button"
        >
          상담 인격 인기도 보러 가기
          <img
            className="w-5 ml-1 mt-[1px]"
            src={popularbuttonwhiteIcon}
            alt="popularbuttonwhiteIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
