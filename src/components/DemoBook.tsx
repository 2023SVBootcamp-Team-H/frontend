// import React, {
//   useState,
//   useRef,
//   useEffect,
//   ForwardedRef,
//   // LegacyRef,
//   // MutableRefObject,
// } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import { PageFlip } from 'page-flip';

// const bookElement = document.getElementById('book');
// if (bookElement) {
//   const pageFlip = new PageFlip(bookElement, {
//     width: 400, // required parameter - base page width
//     // 다른 설정들...
//   });
// } else {
//   // 'book' 요소가 존재하지 않을 때에 대한 예외 처리
//   console.error("Element with ID 'book' not found.");
// }

// const PageCover = React.forwardRef(
//   (props: { children: React.ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
//     return (
//       <div className="page page-cover" ref={ref} data-density="hard">
//         <div className="page-content">
//           <h2>{props.children}</h2>
//         </div>
//       </div>
//     );
//   },
// );
// const Page = React.forwardRef(
//   (
//     props: { number: number; children: React.ReactNode },
//     ref: ForwardedRef<HTMLDivElement>,
//   ) => {
//     return (
//       <div className="page" ref={ref}>
//         <div className="page-content">
//           <h2 className="page-header">페이지 헤더 - {props.number}</h2>
//           <div className="page-image" />
//           <div className="page-text">{props.children}</div>
//           <div className="page-footer">{props.number + 1}</div>
//         </div>
//       </div>
//     );
//   },
// );

// function DemoBook() {
//   const [page, setPage] = useState(0);
//   const [totalPage, setTotalPage] = useState(0);
//   const flipBook = useRef<HTMLFlipBook>(null);
//   const nextButtonClick = () => {
//     flipBook.current!.getPageFlip().flipNext();
//   };
//   const prevButtonClick = () => {
//     flipBook.current!.getPageFlip().flipPrev();
//   };
//   const onPage = (e) => {
//     setPage(e.data);
//   };
//   useEffect(() => {
//     console.log(flipBook);
//     setTotalPage(flipBook.current.getPageFlip().getPageCount());
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
//         ref={flipBook}
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
