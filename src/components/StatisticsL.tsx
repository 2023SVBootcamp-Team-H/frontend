import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { dataState, femaleState, maleState } from '@/Recoil';
import grandma from '@/assets/images/category/grandma.png';
import parents from '@/assets/images/category/parents.png';
import youngboy from '@/assets/images/category/youngboy.png';

function StatisticsL() {
  const [totalData, setTotalData] = useRecoilState(dataState);
  const [femaleData, setFemaleData] = useRecoilState(femaleState);
  const [maleData, setMaleData] = useRecoilState(maleState);

  // console.log(totaldata);
  // useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-center  items-center font-ham-m  text-textTitle ">
      <div className="flex flex-col justify-center items-center space-y-4  mt-12">
        <span className="text-[23px]">인기도 1위 인격</span>
        <img className="w-44 " src={grandma} alt="grandma" />
        <span className="text-[20px]">
          {totalData.length === 0 ? '' : totalData[0].personality_name}
          {/* {`${totaldata[0]}`} */}
        </span>
      </div>

      <div className="border border-solid border-[#DBD4C7] w-96 mt-10" />

      <div className="flex mt-8 space-x-2">
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className=" text-[15px]">여성이 뽑은 1위</span>
          <img className="w-48 " src={parents} alt="parents" />
          <span className="text-[12px]">
            {' '}
            {femaleData.length === 0 ? '' : femaleData[0].personality_name}
          </span>
        </div>
        <div className="border-solid border h-auto  border-[#DBD4C7] " />
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className=" text-[15px]">남성이 뽑은 1위</span>
          <img className="w-40 " src={youngboy} alt="youngboy" />
          <span className="text-[12px]">
            {maleData.length === 0 ? '' : maleData[0].personality_name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatisticsL;
