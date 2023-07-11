import React from 'react';
import 'animate.css';
import course from '@/assets/images/category/course.png';
import family from '@/assets/images/category/family.png';
import friendship from '@/assets/images/category/friendship.png';
import job from '@/assets/images/category/job.png';
import love from '@/assets/images/category/love.png';
import study from '@/assets/images/category/study.png';

function SelectWorryL() {
  return (
    <div className=" ">
      <div
        className="font-ham text-textTitle text-[20px] mt-10 flex justify-center items-center
        "
      >
        고민 카테고리를 골라주세요
      </div>
      <div className="font-ham-m text-textCategory flex justify-center items-center mt-10">
        {/* 가족관계 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
            src={family}
            alt="family"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            가족관계
          </div>
        </button>
        {/* 학업 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
            src={study}
            alt="study"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            학업
          </div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 직장/알바 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
            src={job}
            alt="job"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            직장/알바
          </div>
        </button>

        {/* 진로/취업 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
            src={course}
            alt="course"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            진로/취업
          </div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 우정 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] mr-10"
            src={friendship}
            alt="friendship"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            우정
          </div>
        </button>

        {/* 연애 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[110px] h-[110px] ml-10"
            src={love}
            alt="love"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            연애
          </div>
        </button>
      </div>
    </div>
  );
}

export default SelectWorryL;
