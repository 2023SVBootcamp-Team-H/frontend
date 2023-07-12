import React from 'react';
import grandma from '@/assets/images/category/grandma.png';
import parents from '@/assets/images/category/parents.png';
import youngboy from '@/assets/images/category/youngboy.png';

function StatisticsL() {
  return (
    <div className="flex flex-col justify-center  items-center font-ham-m  text-textTitle ">
      <div className="flex flex-col justify-center items-center space-y-4  mt-9">
        <span className=" text-[25px]">인기도 1위 인격</span>
        <img className="w-48 " src={grandma} alt="grandma" />
        <span className="text-[22px]">할머니</span>
      </div>

      <div className="border border-solid border-[#DBD4C7] w-96 mt-10" />

      <div className="flex mt-8 space-x-2">
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className=" text-[15px]">여성이 뽑은 1위</span>
          <img className="w-48 " src={parents} alt="parents" />
          <span className="text-[12px]">부모님</span>
        </div>
        <div className="border-solid border h-auto  border-[#DBD4C7] " />
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className=" text-[15px]">남성이 뽑은 1위</span>
          <img className="w-40 " src={youngboy} alt="youngboy" />
          <span className="text-[12px]">중2</span>
        </div>
      </div>
    </div>
  );
}

export default StatisticsL;
