import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import { useRecoilState } from 'recoil';
import {
  dataState,
  femaleState,
  maleState,
  avgState,
  personalityState,
  answeridState,
  likeState,
  ageState,
  genderState,
  contentState,
  categoryState,
  loadingState,
  messageState,
  activeButtonState,
} from '@/Recoil';
import StatisticsL from '@/components/StatisticsL';
import StatisticsR from '@/components/StatisticsR';

function SatisfactionPage() {
  const [totalData, setTotalData] = useRecoilState(dataState);
  const [femaleData, setFemaleData] = useRecoilState(femaleState);
  const [maleData, setMaleData] = useRecoilState(maleState);
  const [avgData, setAvgData] = useRecoilState(avgState);

  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언
  const [, setLike] = useRecoilState(likeState);
  const [, setAge] = useRecoilState(ageState);
  const [, setGender] = useRecoilState(genderState);
  const [, setInputText] = useRecoilState(contentState);
  const [, setCategory] = useRecoilState(categoryState);
  const [, setLoading] = useRecoilState(loadingState);
  const [, setActiveButton] = useRecoilState(activeButtonState); // 선택된 카테고리
  const [, setPersonality] = useRecoilState(personalityState); // 선택된 인격
  const [answerId, setAnswerId] = useRecoilState(answeridState);

  // recoil state 초기화
  setCategory('');
  setActiveButton('');
  setPersonality('');
  setAge(0);
  setGender('');
  setInputText('');
  setLoading(0);
  setAnswerId(0);
  setLike(0);

  // const [totaldata, setTotalData] = useState([]);
  function toStatistics() {
    const totalRating = axios
      .get('http://34.195.3.25:5000/rank/')
      .then((response) => {
        console.log(response);
        setTotalData(response.data.result);
        setAvgData(response.data.result);
      });
    // console.log(totalRating.data.result);
    // setTotalData(totalRating.data.result);
    const genderRating = axios
      .get('http://34.195.3.25:5000/rank/gender/')
      .then((response) => {
        console.log(response);
        setFemaleData(response.data.result.female);
        console.log(femaleData);
        setMaleData(response.data.result.male);
        console.log(maleData);
      });
    // console.log(genderRating);
  }

  useEffect(() => {
    toStatistics();
    // genderStatistics();
  }, [setTotalData, setAvgData, setFemaleData, setMaleData]);
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
