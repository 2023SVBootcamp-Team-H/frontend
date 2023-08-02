import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  personalityState,
  answeridState,
  likeState,
  selectedRatingState,
  dataState,
} from '@/Recoil';
import popularbuttonIcon from '@/assets/images/popularbuttonIcon.svg';
import star from '@/assets/images/star.svg';
import starYellow from '@/assets/images/starYellow.svg';

interface Props {
  onClickToggleModal: () => void;
}

function SatisfactionModalV({ onClickToggleModal }: Props) {
  const [showPersonality, setShowPersonality] =
    useRecoilState(personalityState);

  const answerid = useRecoilValue(answeridState);
  const [like, setLike] = useRecoilState(likeState);
  const [totaldata, setTotalData] = useRecoilState(dataState);

  const handleRatingClick = (rating: number) => {
    setLike(rating);
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i += 1) {
      const isFilled = i <= like;
      stars.push(
        <button type="button" key={i} onClick={() => handleRatingClick(i)}>
          <img
            className="w-20"
            src={isFilled ? starYellow : star}
            alt={`star-${i}`}
          />
        </button>,
      );
    }

    return stars;
  };

  const navigate = useNavigate(); // react-router-dom useNavigate 사용 선언

  async function toStatistics() {
    navigate('/satis');
  }

  function toMain() {
    navigate('/');
  }

  const starSubmit = async () => {
    const data = {
      answer_id: answerid,
      likes: like,
    };
    try {
      const res = await axios.post(
        'https://www.witchsmind.com/api/answer/',
        data,
      );
      // const res = await axios.post('http://127.0.0.1:8000/answer/', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        {/* 모달창  */}
        <div
          className="-translate-y-1/2-translate-y-1/2 fixed top-44 right-1/2 z-50 box-border h-[40%] 
          w-4/5 translate-x-1/2  transform rounded-[20px] bg-satisfactionBack
          sm:w-2/5 sm:h-48
          "
        >
          {/* 모달 상단 헤더 */}
          <div
            className="flex justify-center items-center
            bg-satisfactionTop rounded-t-[20px] h-[20%]
            "
          >
            <div className="text-[4vw] font-ham-m ">
              <span className="text-[#7A44A4]">{`${showPersonality}`}</span>
              <span>의 답변을 평가해주세요!</span>
            </div>
            {/* <button type="button">
              <img
              className="mx-auto mr-1 w-6"
              src={closeIcon}
              alt="closeIcon"
              />
            </button> */}
          </div>

          <div className="h-[80%] ">
            {/* 별점 */}
            <div className=" flex flex-col justify-center items-center h-full space-y-[10vw]">
              <div className="flex justify-center items-center space-x-3 ">
                {renderStars()}
              </div>
              {/* 버튼 */}
              <div className="flex flex-col w-full h-auto items-center justify-center drop-shadow-md text-[1vw] space-y-[5vw]">
                <button
                  type="button"
                  onClick={() => {
                    starSubmit();
                    toMain();
                  }}
                  className="font-ham text-[#A16AE7] 
                bg-satisfactionButton w-[60%] py-[4%] rounded-full "
                >
                  평가 완료
                </button>
                <button
                  type="button"
                  onClick={() => {
                    starSubmit();
                    toStatistics();
                  }}
                  className="flex justify-center items-center font-ham text-[#A16AE7] 
                bg-satisfactionButton   rounded-full
                w-[60%] py-[3%]  "
                >
                  인기있는 인격 순위 보러가기
                  <img
                    className="w-5 ml-1"
                    src={popularbuttonIcon}
                    alt="popularbuttonIcon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 모달 영역 외의 배경을 클릭하면 모달이 닫히게 하는 컨테이너, 이벤트핸들러를 사용하여 클릭 이벤트 발생 시 onClickToggleModal 함수 호출하여 모달 닫음 */}
        <button
          aria-label="Toggle modal"
          className="fixed top-0 left-0 right-0 bottom-0 z-40 h-full w-screen  bg-black opacity-70"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();

            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
          type="button"
        />
      </div>
    </div>
  );
}

export default SatisfactionModalV;
