import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import popularbuttonIcon from '@/assets/images/popularbuttonIcon.svg';
import star from '@/assets/images/star.svg';
import starYellow from '@/assets/images/starYellow.svg';

interface Props {
  onClickToggleModal: () => void;
}

function SatisfactionModal({ onClickToggleModal }: Props) {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i += 1) {
      const isFilled = i <= selectedRating;
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

  function toStatistics() {
    navigate('/satis');
  }

  function toMain() {
    navigate('/');
  }
  return (
    <div>
      <div>
        {/* 모달창  */}
        <div
          className="-translate-y-1/2-translate-y-1/2 fixed top-44 right-1/2 z-50 box-border h-96
          w-[410px] translate-x-1/2  transform rounded-[20px] bg-satisfactionBack
          sm:w-2/4 sm:h-96"
        >
          {/* 모달 상단 헤더 */}
          <div
            className="flex justify-center
            bg-satisfactionTop rounded-t-[20px] p-6
            "
          >
            <div className="text-[21px] font-ham-m">
              <span className="text-[#7A44A4]">할머니</span>
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

          {/* 별점 */}
          <div className="">
            <div className="flex justify-center items-center mt-20 space-x-3 ">
              {renderStars()}
            </div>
            {/* 버튼 */}
            <div className="flex justify-center mt-16 drop-shadow-md">
              <button
                type="button"
                onClick={() => toMain()}
                className="font-ham text-[#A16AE7] 
                bg-satisfactionButton px-12 py-4 rounded-full
                mr-4"
              >
                평가 완료
              </button>
              <button
                type="button"
                onClick={() => toStatistics()}
                className="flex font-ham text-[#A16AE7]  justify-items-center
                bg-satisfactionButton px-8 py-4 rounded-full"
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

export default SatisfactionModal;
// interface Props {
//   onClickToggleModal: () => void;
// }
// function SatisfactionModal({ onClickToggleModal }: Props) {
//   return (
//     <div>
//       <div>
//         {/* 모달창  */}
//         <div
//           className="-translate-y-1/2-translate-y-1/2 fixed top-44 right-1/2 z-50 box-border h-96
//     w-[410px] translate-x-1/2  transform rounded-[20px] bg-satisfactionBack
//     sm:w-2/4 sm:h-96"
//         >
//           {/* 모달 상단 헤더 */}
//           <div
//             className="flex justify-center
//            bg-satisfactionTop rounded-t-[20px] p-6
//            "
//           >
//             <div className="text-[21px] font-ham-m">
//               <span className="text-[#7A44A4]">할머니</span>
//               <span>의 답변을 평가해주세요!</span>
//             </div>
//             {/* <button type="button">
//               <img
//                 className="mx-auto mr-1 w-6"
//                 src={closeIcon}
//                 alt="closeIcon"
//               />
//             </button> */}
//           </div>

//           {/* 별점 */}
//           <div className="">
//             <div className="flex justify-center items-center mt-20 space-x-3 ">
//               <button type="button">
//                 <img className="w-20" src={star} alt="star" />
//               </button>
//               <button type="button">
//                 <img className="w-20" src={star} alt="star" />
//               </button>
//               <button type="button">
//                 <img className="w-20" src={star} alt="star" />
//               </button>
//               <button type="button">
//                 <img className="w-20" src={star} alt="star" />
//               </button>
//               <button type="button">
//                 <img className="w-20" src={star} alt="star" />
//               </button>
//             </div>

//             {/* 버튼 */}
//             <div className="flex justify-center mt-16 drop-shadow-md">
//               <button
//                 type="button"
//                 className="font-ham text-[#A16AE7]
//               bg-satisfactionButton px-12 py-4 rounded-full
//               mr-4"
//               >
//                 평가 완료
//               </button>
//               <button
//                 type="button"
//                 className="flex font-ham text-[#A16AE7]  justify-items-center
//               bg-satisfactionButton px-8 py-4 rounded-full"
//               >
//                 인기있는 인격 순위 보러가기
//                 <img
//                   className="w-5 ml-1"
//                   src={popularbuttonIcon}
//                   alt="popularbuttonIcon"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 모달 영역 외의 배경을 클릭하면 모달이 닫히게 하는 컨테이너, 이벤트핸들러를 사용하여 클릭 이벤트 발생 시 onClickToggleModal 함수 호출하여 모달 닫음 */}
//         <button
//           aria-label="Toggle modal"
//           className="fixed top-0 left-0 right-0 bottom-0 z-40 h-full w-screen  bg-black opacity-70"
//           onClick={(e: React.MouseEvent) => {
//             e.preventDefault();

//             if (onClickToggleModal) {
//               onClickToggleModal();
//             }
//           }}
//           type="button"
//         />
//       </div>
//     </div>
//   );
// }

// export default SatisfactionModal;
