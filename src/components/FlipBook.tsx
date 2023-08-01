import { useState, useCallback, useRef, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FlipPage, { ReactFlipPage } from 'react-flip-page';
import { useRecoilState } from 'recoil';
// eslint-disable-next-line
import {
  windowWidthState,
  windowHeightState,
  audioVolumeState,
  audioState,
} from '@/Recoil';
import BookPageThreeV from '@/pagesV/BookPageThreeV';
import BookPageTwoV from '@/pagesV/BookPageTwoV';
import BookPageV from '@/pagesV/BookPageV';
import NicknamePageV from '@/pagesV/NicknamePageV';
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
  widthPerHeight2,
} from '@/assets/values';

function FlipBook() {
  const [isOpenModal, setOpenModal] = useState<boolean>(() => false);
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);
  const [volume, setVolume] = useRecoilState(audioVolumeState);
  const [isPlaying, setIsPlaying] = useRecoilState(audioState);
  const flipPageRef = useRef<ReactFlipPage | null>(null);

  const flipSound = () => {
    const audio = new Audio('./src/assets/audio/booksori-sarasvatl.mp3');
    audio.volume = volume;
    if (isPlaying) {
      audio.play();
    }
  };

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
    <div id="1000" key="page0" className="w-[100%] h-[100%]">
      <NicknamePage handleNextPage={handleNextPage} />
    </div>,
    <div id="2000" key="page1" className="w-[100%] h-[100%]">
      <BookPage
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div id="3000" key="page2" className="w-[100%] h-[100%]">
      <BookPageTwo
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div id="4000" key="page3" className="w-[100%] h-[100%]">
      <BookPageThree
        onClickToggleModal={onClickToggleModal}
        handlePrevPage={handlePrevPage}
      />
    </div>,
  ];
  const pagesV = [
    <div
      style={{ height: (windowWidth - heightGap) / widthPerHeight2 }}
      id="1001"
      key="page0"
      className="w-[100%]"
    >
      <NicknamePageV handleNextPage={handleNextPage} />
    </div>,
    <div
      style={{ height: (windowWidth - heightGap) / widthPerHeight2 }}
      id="2001"
      key="page1"
      className="w-[100%]"
    >
      <BookPageV
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div
      style={{ height: (windowWidth - heightGap) / widthPerHeight2 }}
      id="3001"
      key="page2"
      className="w-[100%]"
    >
      <BookPageTwoV
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>,
    <div
      style={{ height: (windowWidth - heightGap) / widthPerHeight2 }}
      id="4001"
      key="page3"
      className="w-[100%]"
    >
      <BookPageThreeV
        onClickToggleModal={onClickToggleModal}
        handlePrevPage={handlePrevPage}
      />
    </div>,
  ];
  return (
    <div
      className={`bg-dontworrybg ${
        windowWidth > 600 ? 'bg-bgmain bg-contain' : 'bg-bgsubV bg-cover'
      } min-h-screen w-full  bg-no-repeat bg-center
      flex justify-center items-center`}
    >
      <AudioButton />
      {isOpenModal ? (
        <SatisfactionModal onClickToggleModal={onClickToggleModal} />
      ) : null}
      <FlipPage
        style={{ 'outline-width': windowWidth > 600 ? '1.2vw' : '1.8vw' }}
        disableSwipe
        flipOnTouch
        orientation={windowWidth < limitWidth ? 'vertical' : 'horizontal'} // 삼항연산자
        onStartPageChange={() => flipSound()}
        // orientation="vertical"
        uncutPages
        ref={flipPageRef}
        width={
          windowWidth - widthGap > maxWidth ? maxWidth : windowWidth - widthGap
        } // 삼항연산자
        height={(() => {
          let ret = 0;
          if (windowWidth - widthGap > maxWidth) {
            ret = maxHeight;
          } else if (windowWidth < limitWidth) {
            ret = (windowWidth - heightGap) / widthPerHeight2;
          } else {
            ret = (windowWidth - widthGap) * widthPerHeight;
          }
          return ret;
        })()}
        // style={{ width: '80vw' }}
        className={`animate__animated animate__jackInTheBox 
        outline-pageOutline outline rounded-md "`}
      >
        {windowWidth > limitWidth ? pages : pagesV}
      </FlipPage>
    </div>
  );
}

export default FlipBook;
