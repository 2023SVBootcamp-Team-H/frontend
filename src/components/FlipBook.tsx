import { useState, useCallback, useRef, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FlipPage, { ReactFlipPage } from 'react-flip-page';
import { useRecoilState } from 'recoil';
import { windowWidthState, windowHeightState } from '@/Recoil';
import BookPage from '@/pages/BookPage';
import BookPageThree from '@/pages/BookPageThree';
import BookPageTwo from '@/pages/BookPageTwo';
import NicknamePage from '@/pages/NicknamePage';
import AudioButton from '@/components/AudioButton';
import SatisfactionModal from '@/components/SatisfactionModal';
import {
  heightGap,
  limitWidth,
  maxHeight,
  maxWidth,
  widthGap,
  widthPerHeight,
} from '@/assets/values';

function FlipBook() {
  const [isOpenModal, setOpenModal] = useState<boolean>(() => false);
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);
  const flipPageRef = useRef<ReactFlipPage | null>(null);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      // handle touch move event here
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (flipPageRef.current) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);

      if (flipPageRef.current) {
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [flipPageRef]);

  const handlePrevPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.gotoPreviousPage();
    }
  };
  const handleNextPage = () => {
    if (flipPageRef.current) {
      flipPageRef.current.gotoNextPage();
    }
  };
  const pages = [
    <div key="page0" className="w-[100%] h-[100%]">
      <NicknamePage handleNextPage={handleNextPage} />
    </div>,
    <div key="page1">
      <BookPage
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div key="page2">
      <BookPageTwo
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div key="page3">
      <BookPageThree
        onClickToggleModal={onClickToggleModal}
        handlePrevPage={handlePrevPage}
      />
    </div>,
  ];
  return (
    <div
      className="bg-dontworrybg bg-bgmain min-h-screen w-full bg-contain bg-no-repeat bg-center
    flex justify-center items-center"
    >
      <span
        className="absolute top-5 right-7 flex justify-end items-center  space-x-2
        font-ham text-[#E1C0E7] "
      >
        <span>BGM</span>
        <span>
          <AudioButton />
        </span>
      </span>{' '}
      {isOpenModal ? (
        <SatisfactionModal onClickToggleModal={onClickToggleModal} />
      ) : null}
      <FlipPage
        orientation="horizontal" // 삼항연산자
        uncutPages
        ref={flipPageRef}
        width={
          windowWidth - widthGap > maxWidth ? maxWidth : windowWidth - widthGap
        } // 삼항연산자
        height={
          windowWidth - widthGap > maxWidth
            ? maxHeight
            : windowWidth < limitWidth
            ? windowHeight - heightGap
            : (windowWidth - widthGap) * widthPerHeight
        }
        // style={{ width: '80vw' }}
        className="animate__animated animate__jackInTheBox
        outline-pageOutline outline outline-[15px] rounded-md "
      >
        {pages}
      </FlipPage>
    </div>
  );
}

export default FlipBook;
