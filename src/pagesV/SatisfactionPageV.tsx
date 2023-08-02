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
  nicknameState,
  windowWidthState,
  windowHeightState,
} from '@/Recoil';
import StatisticsB from '@/componentsV/StatisticsB';
import StatisticsT from '@/componentsV/StatisticsT';
import AudioButton from '@/components/AudioButton';
import StatisticsL from '@/components/StatisticsL';
import StatisticsR from '@/components/StatisticsR';
import {
  heightGap,
  limitWidth,
  maxHeight,
  maxWidth,
  widthGap,
  widthPerHeight,
  widthPerHeight2,
} from '@/assets/values';

function SatisfactionPageV() {
  const [totalData, setTotalData] = useRecoilState(dataState);
  const [femaleData, setFemaleData] = useRecoilState(femaleState);
  const [maleData, setMaleData] = useRecoilState(maleState);
  const [avgData, setAvgData] = useRecoilState(avgState);

  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언
  const [, setLike] = useRecoilState(likeState);
  const [, setAge] = useRecoilState(ageState);
  const [, setGender] = useRecoilState(genderState);
  const [, setInputText] = useRecoilState(contentState);
  const [, setCategory] = useRecoilState(categoryState);
  const [, setLoading] = useRecoilState(loadingState);
  const [, setActiveButton] = useRecoilState(activeButtonState); // 선택된 카테고리
  const [, setPersonality] = useRecoilState(personalityState); // 선택된 인격
  const [, setAnswerId] = useRecoilState(answeridState);
  const [, setInputNickname] = useRecoilState(nicknameState);

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
  setInputNickname('');

  // const [totaldata, setTotalData] = useState([]);
  function toStatistics() {
    const totalRating = axios
      .get('https://www.witchsmind.com/api/rank/')
      .then((response) => {
        setTotalData(response.data.result);
        setAvgData(response.data.result);
      });
    // (totalRating.data.result);
    // setTotalData(totalRating.data.result);
    const genderRating = axios
      .get('https://www.witchsmind.com/api/rank/gender/')
      .then((response) => {
        setFemaleData(response.data.result.female);
        setMaleData(response.data.result.male);
      });
  }

  useEffect(() => {
    toStatistics();

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // genderStatistics();
  }, [setTotalData, setAvgData, setFemaleData, setMaleData]);
  return (
    // 배경
    <div
      className=" bg-dontworrybg bg-bgsubV min-h-screen w-full bg-cover bg-no-repeat bg-center
    flex justify-center items-center"
    >
      {/* BGM 버튼 */}
      <AudioButton />

      {/* 책 전체 요소 */}
      <div
        style={{
          width:
            windowWidth - widthGap > maxWidth
              ? maxWidth
              : windowWidth - widthGap,
          height: (() => {
            let ret = 0;
            if (windowWidth - widthGap > maxWidth) {
              ret = maxHeight;
            } else if (windowWidth < limitWidth) {
              ret = (windowWidth - heightGap) / widthPerHeight2;
            } else {
              ret = (windowWidth - widthGap) * widthPerHeight;
            }
            return ret;
          })(),
        }}
        className="animate__animated animate__fadeIn
        flex flex-col justify-center items-center
        h-[100%] w-[100%] px-3 bg-pageBackgroud 
       outline-pageOutline outline outline-[1.2vw] rounded-md"
      >
        {/* 왼쪽 페이지 */}
        <div
          className="bg-pageBackgroud  w-[100%] h-[50%] 
          bg-bookframeV bg-center bg-origin-padding p-3 bg-contain bg-no-repeat 
          flex flex-col items-center
          border-solid border-b-[3px] border-[#D9D3C8]
        "
        >
          <StatisticsT />
        </div>

        {/* 오른쪽 페이지 */}
        <div
          className="bg-pageBackgroud w-[100%] h-[50%] 
          bg-bookframeV bg-center bg-origin-padding p-4 bg-contain bg-no-repeat
        flex flex-col content-center items-center"
        >
          <StatisticsB />
        </div>
      </div>
    </div>
  );
}

export default SatisfactionPageV;
