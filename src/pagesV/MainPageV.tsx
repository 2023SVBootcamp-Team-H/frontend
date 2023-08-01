import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';
import {
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
} from '@/Recoil';
import popularbuttonwhiteIcon from '@/assets/images/popularbuttonwhiteIcon.svg';
import AudioButton from '@/components/AudioButton';
import AudioPlayer from '@/components/AudioPlayer';

// import back from '@/assets/images/back.png';

function MainPage() {
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

  function toBook() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/book');
  }

  function toStatistics() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/satis');
  }

  return (
    <div
      className=" bg-dontworrybg bg-bgsubV bg-cover min-h-screen bg-no-repeat bg-center
    relative flex justify-center items-end"
    >
      <span
        className="absolute top-5 right-7 flex justify-end items-center  space-x-2
        font-ham text-[#E1C0E7] "
      >
        <span>BGM</span>
        <span>
          <AudioButton />
        </span>
      </span>

      <div className=" flex justify-center items-stretch ">
        <div className=" self-end pb-[30%]">
          {/* 로고 텍스트 */}
          <div className="flex flex-col items-center justify-center z-50">
            <div className="text-white font-ham  text-[21vw] ">
              Witch&rsquo;s
            </div>
            <div className="text-white font-ham text-[22vw]">Mind</div>

            {/* 고민해결하러가기 버튼 */}
            <button
              className="text-white font-ham-l rounded-full bg-mainbutton px-12 py-4 text-[16px] mt-[15%]
          transition hover:bg-[#F8ECFF] hover:text-mainbutton
          animate-pulse "
              onClick={() => toBook()}
              type="button"
            >
              고민 해결하러 가기
            </button>
            {/* 통계 보러가기 버튼 */}
            <button
              className="flex justify-center mt-[10%] text-white font-ham-l text-[14px]"
              onClick={() => toStatistics()}
              type="button"
            >
              상담 인격 인기도 보러 가기
              <img
                className="w-5 ml-1 "
                src={popularbuttonwhiteIcon}
                alt="popularbuttonwhiteIcon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
