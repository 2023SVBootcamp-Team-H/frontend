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
function StatisticsT() {
  const [totalData, setTotalData] = useRecoilState(dataState);
  const [femaleData, setFemaleData] = useRecoilState(femaleState);
  const [maleData, setMaleData] = useRecoilState(maleState);

  return (
    <div className="h-[100%] w-[100%] flex justify-center  items-center font-ham-m   ">
      <div className="flex flex-col space-y-[3%] justify-center items-center w-[80%] h-[60%]">
        <span className="flex flex-col justify-end text-[1.5vw] text-textTitle">
          인기도 1위 인격
        </span>
        <img
          className="h-[53%]"
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
        <span className="flex justify-center w-[100%] text-[1.3vw] text-zinc-700">
          {totalData.length === 0 ? '' : totalData[0].personality_name}
          {/* {`${totaldata[0]}`} */}
        </span>
      </div>
      <div className="self-center border-solid border h-[85%] border-[#DBD4C7] " />

      <div className="flex flex-col items-center w-[90%] h-[100%] ">
        <div className="w-[100%] h-[50%] flex justify-center items-center">
          <img
            className="w-[40%]"
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
          <div className="flex flex-col justify-center items-center w-[100%] ">
            <span className=" text-[1.08vw] text-textTitle">
              여성이 뽑은 1위
            </span>
            <span className="text-[0.8vw] mt-[2vw] text-zinc-700">
              {' '}
              {femaleData.length === 0 ? '' : femaleData[0].personality_name}
            </span>
          </div>
        </div>

        <div className="border border-solid border-[#DBD4C7] w-[90%]" />

        <div className="w-[100%] h-[50%] flex justify-center items-center">
          <img
            className="w-[40%]"
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

          <div className="flex flex-col justify-center items-center w-[100%]">
            <span className=" text-[1.08vw] text-textTitle">
              남성이 뽑은 1위
            </span>
            <span className="text-[0.8vw] mt-[2vw] text-zinc-700">
              {maleData.length === 0 ? '' : maleData[0].personality_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsT;
