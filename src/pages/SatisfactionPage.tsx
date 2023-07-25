import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { dataState, femaleState, maleState } from '@/Recoil';
import StatisticsL from '@/components/StatisticsL';
import StatisticsR from '@/components/StatisticsR';

function SatisfactionPage() {
  const [totaldata, setTotalData] = useRecoilState(dataState);
  const [femaledata, setFemaleData] = useRecoilState(femaleState);
  const [maledata, setMaleData] = useRecoilState(maleState);
  // const [totaldata, setTotalData] = useState([]);
  function toStatistics() {
    const totalRating = axios
      .get('http://127.0.0.1:8000/rank/')
      .then((response) => {
        console.log(response);
        setTotalData(response.data.result);
      });
    // console.log(totalRating.data.result);
    // setTotalData(totalRating.data.result);
    const genderRating = axios
      .get('http://127.0.0.1:8000/rank/gender/')
      .then((response) => {
        console.log(response);
        setFemaleData(response.data.result.female);
        console.log(femaledata);
        setMaleData(response.data.result.male);
        console.log(maledata);
      });
    // console.log(genderRating);
  }

  useEffect(() => {
    toStatistics();
    // genderStatistics();
  }, [setTotalData, setFemaleData, setMaleData]);
  return (
    // 배경
    <div
      className=" bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    flex justify-center items-center"
    >
      {/* 책 전체 요소 */}
      <div
        className="animate__animated animate__fadeIn
        flex justify-center items-center
        w-[fit] h-[fit] px-4 pt-5 pb-8 bg-pageBackgroud 
       outline-pageOutline outline outline-[15px] rounded-md "
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  h-[620px] w-[450px]
        bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
        border-solid border-r-[3px] border-[#D9D3C8] 
        "
        >
          <StatisticsL />
        </div>

        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud h-[620px] w-[450px]
      bg-bookframe bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
  flex "
        >
          <StatisticsR />
        </div>
      </div>
    </div>
  );
}

export default SatisfactionPage;
