// import React, { useState, useRef, useEffect, Ref } from 'react';
// import HTMLFlipBook, { PageFlip } from 'react-pageflip';
// import PropTypes from 'prop-types';

// interface PageCoverProps {
//   children: React.ReactNode;
// }

// const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>(
//   (props, ref) => {
//     return (
//       <div className="page page-cover" ref={ref} data-density="hard">
//         <div className="page-content">
//           <h2>{props.children}</h2>
//         </div>
//       </div>
//     );
//   },
// );

// PageCover.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// interface PageProps {
//   number: number;
//   children: React.ReactNode;
// }

// const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">
//         <h2 className="page-header">페이지 헤더 - {props.number}</h2>
//         <div className="page-image" />
//         <div className="page-text">{props.children}</div>
//         <div className="page-footer">{props.number + 1}</div>
//       </div>
//     </div>
//   );
// });

// Page.propTypes = {
//   number: PropTypes.number.isRequired,
//   children: PropTypes.node.isRequired,
// };

// function DemoBook() {
//   const [page, setPage] = useState(0);
//   const [totalPage, setTotalPage] = useState(0);
//   const flipBook = useRef<PageFlip>(null);
//   const nextButtonClick = () => {
//     flipBook.current?.getPageFlip().flipNext();
//   };
//   const prevButtonClick = () => {
//     flipBook.current?.getPageFlip().flipPrev();
//   };
//   const onPage = (e: { data: number }) => {
//     setPage(e.data);
//   };
//   useEffect(() => {
//     console.log(flipBook);
//     setTotalPage(flipBook.current?.getPageFlip().getPageCount() || 0);
//   }, []);

//   return (
//     <div>
//       <HTMLFlipBook
//         width={550}
//         height={733}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1533}
//         maxShadowOpacity={0.5}
//         showCover
//         mobileScrollSupport
//         onFlip={onPage}
//         className="demo-book"
//         ref={flipBook as Ref<HTMLFlipBook>}
//       >
//         <PageCover>책 제목</PageCover>
//         <Page number={1}>Lorem ipsum...</Page>
//         <Page number={2}>Lorem ipsum...</Page>
//         <Page number={3}>Lorem ipsum...</Page>
//         <Page number={4}>Lorem ipsum...</Page>
//         <PageCover>THE END</PageCover>
//       </HTMLFlipBook>
//       <div className="container">
//         <div>
//           <button type="button" onClick={prevButtonClick}>
//             이전 페이지
//           </button>
//           [<span>{page}</span> of <span>{totalPage}</span>]
//           <button type="button" onClick={nextButtonClick}>
//             다음 페이지
//           </button>
//         </div>
//         <div>{/* State: <i>{}</i>, orientation: <i>{}</i> */}</div>
//       </div>
//     </div>
//   );
// }

// export default DemoBook;
