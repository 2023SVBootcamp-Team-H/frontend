// import { useState, useCallback, useRef, useEffect } from 'react';
// // @ts-ignore
// import FlipPage, { ReactFlipPage } from 'react-flip-page';
// import BookPage from '@/pages/BookPage';
// import BookPageThree from '@/pages/BookPageThree';
// import BookPageTwo from '@/pages/BookPageTwo';
// import PageFlipAnimation from '@/components/PageFlipAnimation';
// import SatisfactionModal from '@/components/SatisfactionModal';

// function FlipBook() {
//   const [isOpenModal, setOpenModal] = useState<boolean>(false);
//   const flipPageRef = useRef<ReactFlipPage | null>(null);

//   const onClickToggleModal = useCallback(() => {
//     setOpenModal(!isOpenModal);
//     console.log(isOpenModal);
//   }, [isOpenModal]);
//   const nextButton = () => {
//     // 클릭하면
//     // 값 넘겨줍니다.
//   };

//   useEffect(() => {
//     const handleTouchMove = (event: TouchEvent) => {
//       // handle touch move event here
//     };

//     if (flipPageRef.current) {
//       document.addEventListener('touchmove', handleTouchMove, {
//         passive: false,
//       });
//     }

//     return () => {
//       if (flipPageRef.current) {
//         document.removeEventListener('touchmove', handleTouchMove);
//       }
//     };
//   }, [flipPageRef]);

//   const handlePrevPage = () => {
//     if (flipPageRef.current) {
//       flipPageRef.current.gotoPreviousPage();
//     }
//   };
//   const handleNextPage = () => {
//     if (flipPageRef.current) {
//       flipPageRef.current.gotoNextPage();
//     }
//   };
//   const pages = [
//     <div>
//       <BookPage handleNextPage={handleNextPage} />
//     </div>,
//     <div>
//       <BookPageTwo
//         handlePrevPage={handlePrevPage}
//         handleNextPage={handleNextPage}
//       />
//     </div>,
//     <div>
//       <BookPageThree
//         props={onClickToggleModal}
//         handlePrevPage={handlePrevPage}
//       />
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
//       <FlipPage
//         orientation="horizontal"
//         ref={flipPageRef}
//         width={920}
//         height={670}
//         className="animate__animated animate__jackInTheBox
//         outline-pageOutline outline outline-[15px] rounded-md "
//       >
//         {pages}
//       </FlipPage>
//     </div>
//   );
// }

// export default FlipBook;
