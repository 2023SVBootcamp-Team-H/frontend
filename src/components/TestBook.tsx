// import { useState, useCallback } from 'react';
// import BookPage from '@/pages/BookPage';
// import BookPageThree from '@/pages/BookPageThree';
// import BookPageTwo from '@/pages/BookPageTwo';
// import PageFlipAnimation from '@/components/PageFlipAnimation';
// import SatisfactionModal from '@/components/SatisfactionModal';

// const TestBook: React.FC = () => {
//   const [isOpenModal, setOpenModal] = useState<boolean>(false);

//   const onClickToggleModal = useCallback(() => {
//     setOpenModal(!isOpenModal);
//     console.log(isOpenModal);
//   }, [isOpenModal]);
//   const nextButton = () => {
//     // 클릭하면
//     // 값 넘겨줍니다.
//   };
//   const pages = [
//     <div>
//       <BookPage />
//     </div>,
//     <div>
//       <BookPageTwo />
//     </div>,
//     <div>
//       <BookPageThree props={onClickToggleModal} />
//     </div>,
//   ];

//   return (
//     <div
//       className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
//     flex justify-center items-center"
//     >
//       {' '}
//       {isOpenModal ? (
//         <SatisfactionModal onClickToggleModal={onClickToggleModal} />
//       ) : null}
//       <PageFlipAnimation pages={pages} />
//     </div>
//   );
// };

// export default TestBook;
