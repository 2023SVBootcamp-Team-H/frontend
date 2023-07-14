import React from 'react';
import { BarChart } from '@/components/BarChart';

function StatisticsR() {
  // const ranklabel = {
  //   /* ranklabel 데이터를 정의하세요 */
  // };
  // const rankdata = {
  //   /* rankdata 데이터를 정의하세요 */
  // };

  return (
    <div className="flex flex-col justify-center items-center font-ham-m  text-textTitle w-full h-full ">
      <div className="items-center text-[23px]">인기도 통계</div>
      <div className="w-full h-full">
        <BarChart test={[50, 92, 24, 56, 78]} />
      </div>
    </div>
  );
}

export default StatisticsR;
