import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart } from '@/components/BarChart';

function StatisticsR() {
  const navigate = useNavigate();
  // const ranklabel = {
  //   /* ranklabel 데이터를 정의하세요 */
  // };
  // const rankdata = {
  //   /* rankdata 데이터를 정의하세요 */
  // };

  function toBook() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/book');
  }

  return (
    <div className="flex flex-col justify-center items-center font-ham-m  text-textTitle w-full h-full mt-16">
      <div className="items-center text-[23px]">인기도 통계</div>
      <div className="w-96 h-full mt-10">
        <BarChart test={[50, 92, 24, 56, 78]} />
      </div>
      <button
        className="text-white font-ham-l rounded-full bg-mainbutton px-12 py-4 text-[20px] mt-8
          transition hover:bg-[#F8ECFF] hover:text-mainbutton
          animate-pulse "
        onClick={() => toBook()}
        type="button"
      >
        고민 해결하러 가기
      </button>
    </div>
  );
}

export default StatisticsR;
