import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import AllCharacter from '@/Character';
import { dataState, femaleState, maleState } from '@/Recoil';

import grandma from '@/assets/images/category/grandma.png';
import parents from '@/assets/images/category/parents.png';
import youngboy from '@/assets/images/category/youngboy.png';

function findImage(tag: string | undefined) {
  return AllCharacter.map((x) => x.image)[
    AllCharacter.map((x) => x.name).findIndex((x) => x === tag)
  ];
}
function StatisticsL() {
  const [totalData, setTotalData] = useRecoilState(dataState);
  const [femaleData, setFemaleData] = useRecoilState(femaleState);
  const [maleData, setMaleData] = useRecoilState(maleState);
  // console.log(totaldata);
  // useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-center  items-center font-ham-m  text-textTitle ">
      <div className="flex flex-col justify-start items-center space-y-4  mt-12 h-[280px]">
        <span className="text-[23px]">인기도 1위 인격</span>
        <img
          className="w-44 "
          src={
            totalData.length === 0
              ? ''
              : findImage(totalData[0].personality_name)
          }
          // src={findImage(totalData[0].personality_name)} -> 이 코드 사용하면 빈 배열이 올 때 오류 발생하기에 삼항연산자 사용하여 빈 배열 상황 처리
          alt={
            totalData.length === 0
              ? ''
              : findImage(totalData[0].personality_name)
          }
        />
        <span className="text-[20px]">
          {totalData.length === 0 ? '' : totalData[0].personality_name}
          {/* {`${totaldata[0]}`} */}
        </span>
      </div>

      <div className="border border-solid border-[#DBD4C7] w-96 mt-8" />

      <div className="flex mt-8 w-[340px] h-36 ">
        <div className="flex flex-col justify-start items-center space-y-4">
          <span className=" text-[15px]">여성이 뽑은 1위</span>
          <img
            className="w-[160px]"
            src={
              femaleData.length === 0
                ? ''
                : findImage(femaleData[0].personality_name)
            }
            alt={
              femaleData.length === 0
                ? ''
                : findImage(femaleData[0].personality_name)
            }
          />
          <span className="text-[12px]">
            {' '}
            {femaleData.length === 0 ? '' : femaleData[0].personality_name}
          </span>
        </div>
        <div className="border-solid border h-auto mx-3 border-[#DBD4C7] " />
        <div className="flex flex-col justify-start items-center space-y-4">
          <span className=" text-[15px]">남성이 뽑은 1위</span>
          <img
            className="w-[160px]"
            src={
              maleData.length === 0
                ? ''
                : findImage(maleData[0].personality_name)
            }
            alt={
              maleData.length === 0
                ? ''
                : findImage(maleData[0].personality_name)
            }
          />
          <span className="text-[12px]">
            {maleData.length === 0 ? '' : maleData[0].personality_name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatisticsL;
