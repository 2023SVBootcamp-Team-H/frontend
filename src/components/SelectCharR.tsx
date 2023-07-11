import React from 'react';
import 'animate.css';
import friend from '@/assets/images/category/friend.png';
import grandma from '@/assets/images/category/grandma.png';
import parents from '@/assets/images/category/parents.png';
import teacher from '@/assets/images/category/teacher.png';
import youngboy from '@/assets/images/category/youngboy.png';

function SelectCharR() {
  return (
    <div className="justify-center items-center ml-12">
      <div className="font-ham-m text-textCategory flex justify-center items-center mt-10">
        {/* 부모님 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-80 w-[230px]"
            src={parents}
            alt="parents"
          />
          <div className="flex justify-center">부모님</div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-4">
        {/* 할머니 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-80 w-[140px] mr-10"
            src={grandma}
            alt="grandma"
          />
          <div className="flex items-center justify-center mr-10">할머니</div>
        </button>

        {/* 선생님 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-80 w-[135px] h-[128px]"
            src={teacher}
            alt="teacher"
          />
          <div className="flex items-center justify-center mt-3">선생님</div>
        </button>
      </div>

      <div className="font-ham-m text-textCategory flex justify-center items-center mt-6">
        {/* 친구 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-80 w-[138px] mr-10"
            src={friend}
            alt="friend"
          />
          <div className="flex items-center justify-center mr-10 mt-1">
            친구
          </div>
        </button>

        {/* 중2 버튼 */}
        <button type="button">
          <img
            className="flex items-center justify-center opacity-80 w-[150px]"
            src={youngboy}
            alt="youngboy"
          />
          <div className="flex items-center justify-center mt-8">중2</div>
        </button>
      </div>
    </div>
  );
}
export default SelectCharR;
