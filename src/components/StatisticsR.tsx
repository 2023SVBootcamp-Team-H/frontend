import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { avgState } from '@/Recoil';
import { BarChart } from '@/components/BarChart';

function StatisticsR() {
  const navigate = useNavigate();

  const [avgData, setAvgData] = useRecoilState(avgState);

  function toMain() {
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center items-center font-ham-m  text-textTitle w-full h-full">
      <div className="p-3 space-y-[5%] flex flex-col justify-center items-center w-[100%] h-[100%]">
        <div className="flex flex-col justify-end text-[1.5vw]">
          인기도 통계
        </div>
        <BarChart avgData={avgData} />
      </div>
      <button
        className="w-[60%] mb-[5%] text-center py-3 text-[0.85vw]
          bg-stone-300 bg-opacity-25 rounded-[29px] shadow-inner border border-stone-400
          text-stone-600 font-ham-m"
        onClick={() => toMain()}
        type="button"
      >
        홈페이지로 돌아가기
      </button>
    </div>
  );
}

export default StatisticsR;
