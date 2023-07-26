import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { avgState } from '@/Recoil';
import { BarChart } from '@/components/BarChart';

function StatisticsR() {
  const navigate = useNavigate();

  const [avgData, setAvgData] = useRecoilState(avgState);
  // const ranklabel = {
  //   /* ranklabel 데이터를 정의하세요 */
  // };
  // const rankdata = {
  //   /* rankdata 데이터를 정의하세요 */
  // };

  function toMain() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center items-center font-ham-m  text-textTitle w-full h-full mt-12">
      <div className="text-[23px]">인기도 통계</div>
      <div className="w-96 h-full mt-10 ">
        {/* <BarChart avgData={[50, 92, 24, 56, 78]} /> */}
        {/* <BarChart avgData={avgData} /> */}
        <BarChart avgData={avgData} />

        <button
          className="m-auto text-center p-3 px-9 text-[13px] mt-6 ml-28
          bg-stone-300 bg-opacity-25 rounded-[29px] shadow-inner border border-stone-400
          text-stone-600 font-ham-m"
          onClick={() => toMain()}
          type="button"
        >
          홈페이지로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default StatisticsR;
