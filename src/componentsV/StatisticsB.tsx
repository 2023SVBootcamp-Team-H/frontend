import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { avgState } from '@/Recoil';
import { BarChartV } from '@/componentsV/BarChartV';

function StatisticsB() {
  const navigate = useNavigate();

  const [avgData, setAvgData] = useRecoilState(avgState);

  function toMain() {
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center items-center font-ham-m text-textTitle w-full h-full">
      <div className="p-3 space-y-[5%] flex flex-col justify-center items-center w-[100%] h-[85%]">
        <div className="flex flex-col justify-center h-[20%] text-[2vw]">
          인기도 통계
        </div>
        <div className="w-[100%] h-[80%] flex justify-center items-center">
          <BarChartV avgData={avgData} />
        </div>
      </div>
      <button
        className="w-[60%] h-[10%] mb-[5%]  text-center text-[0.5vw] 
          bg-stone-300 bg-opacity-25 rounded-[15px] shadow-inner border border-stone-400
          text-stone-600 font-ham-m"
        onClick={() => toMain()}
        type="button"
      >
        홈페이지로 돌아가기
      </button>
    </div>
  );
}

export default StatisticsB;
