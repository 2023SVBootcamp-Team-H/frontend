import React, { useEffect, useRef } from 'react';
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
  windowWidthState,
  windowHeightState,
  audioVolumeState,
  audioState,
} from '@/Recoil';
import popularbuttonwhiteIcon from '@/assets/images/popularbuttonwhiteIcon.svg';
import MainPageV from '@/pagesV/MainPageV';
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
  const [volume, setVolume] = useRecoilState(audioVolumeState);
  const [isPlaying] = useRecoilState(audioState);

  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);

  const audioRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    console.log(windowWidth, windowHeight);
  };

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

  const BookSound = () => {
    const audio = new Audio('./src/assets/audio/book-in.mp3');
    console.log('play');
    audio.volume = volume;
    if (isPlaying) {
      audio.play();
    }
  };

  function toBook() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/book');
  }

  function toStatistics() {
    // react-router-dom을 이용한 글쓰기 페이지로 이동 함수
    navigate('/satis');
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // genderStatistics();
  }, [isPlaying, volume]);

  return {
    ...(windowWidth > 600 ? (
      <div
        className=" bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    relative flex justify-center items-end"
      >
        <AudioButton />
        <audio id="audio" loop ref={audioRef}>
          <track kind="captions" />
          <source src="./src/assets/audio/bgsound.mp3" type="audio/mpeg" />
        </audio>
        <div className=" flex justify-center items-stretch ">
          <div className=" self-end pb-6">
            {/* 로고 텍스트 */}
            <div className="flex flex-col items-center justify-center z-50">
              <div className="text-white font-ham sm:text-[70px] text-[90px] ">
                Witch&rsquo;s
              </div>
              <div className="text-white font-ham sm:text-[85px] text-[105px]">
                Mind
              </div>

              {/* 고민해결하러가기 버튼 */}
              <button
                className="text-white font-ham-l rounded-full bg-mainbutton px-12 py-4 text-[20px] mt-8
          transition hover:bg-[#F8ECFF] hover:text-mainbutton
          animate-pulse "
                onClick={() => {
                  toBook();
                  BookSound();
                }}
                type="button"
              >
                고민 해결하러 가기
              </button>
              {/* 통계 보러가기 버튼 */}
              <button
                className="flex justify-center mt-4 text-white font-ham-l text-[15px]"
                onClick={() => toStatistics()}
                type="button"
              >
                상담 인격 인기도 보러 가기
                <img
                  className="w-5 ml-1 mt-[1px]"
                  src={popularbuttonwhiteIcon}
                  alt="popularbuttonwhiteIcon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <MainPageV />
    )),
  };
}

export default MainPage;
