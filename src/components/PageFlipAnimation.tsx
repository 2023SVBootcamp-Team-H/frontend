// // PageFlipAnimation.tsx
// import React, { useRef, useEffect } from 'react';
// // @ts-ignore
// import FlipPage, { ReactFlipPage } from 'react-flip-page';

// interface PageFlipAnimationProps {
//   pages: JSX.Element[];
// }

// const PageFlipAnimation: React.FC<PageFlipAnimationProps> = ({ pages }) => {
//   const flipPageRef = useRef<ReactFlipPage | null>(null);

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

//   const handleNextPage = () => {
//     if (flipPageRef.current) {
//       flipPageRef.current.gotoNextPage();
//     }
//   };

//   const handlePrevPage = () => {
//     if (flipPageRef.current) {
//       flipPageRef.current.gotoPreviousPage();
//     }
//   };

//   return (
//     <div className="">
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
//       <div className="mt-5 mx-auto">
//         <button type="button" onClick={handlePrevPage} className="bg-amber-300">
//           Prev
//         </button>
//         <button
//           type="button"
//           onClick={handleNextPage}
//           className="bg-amber-300  r-24"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PageFlipAnimation;
