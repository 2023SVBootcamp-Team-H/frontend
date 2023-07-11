import React from 'react';
import 'animate.css';
import care from '@/assets/images/category/care.png';
import future from '@/assets/images/category/future.png';
import health from '@/assets/images/category/health.png';
import hobby from '@/assets/images/category/hobby.png';
import military from '@/assets/images/category/military.png';
import money from '@/assets/images/category/money.png';
import sports from '@/assets/images/category/sports.png';
import wedding from '@/assets/images/category/wedding.png';

function SelectWorryR() {
  return (
    <div className="justify-center items-center ml-20">
      <div className="font-ham-m text-textCategory flex justify-center items-center mt-5">
        {/* 운동 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
            src={sports}
            alt="sports"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            운동
          </div>
        </button>
        {/* 취미 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
            src={hobby}
            alt="hobby"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            학업
          </div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 결혼 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
            src={wedding}
            alt="wedding"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            결혼
          </div>
        </button>

        {/* 육아 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
            src={care}
            alt="care"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            육아
          </div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 경제 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
            src={money}
            alt="money"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            경제
          </div>
        </button>

        {/* 군대 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
            src={military}
            alt="military"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            군대
          </div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 건강 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] mr-10"
            src={health}
            alt="health"
          />
          <div className="flex items-center justify-center mt-2 mr-10">
            건강
          </div>
        </button>

        {/* 미래 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-60 w-[98px] h-[98px] ml-10"
            src={future}
            alt="future"
          />
          <div className="flex items-center justify-center mt-2 ml-10">
            미래
          </div>
        </button>
      </div>
    </div>
  );
}

export default SelectWorryR;
