import { useState, useCallback, useRef, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FlipPage, { ReactFlipPage } from 'react-flip-page';
import { useRecoilState } from 'recoil';
import BookPage from '@/pages/BookPage';
import BookPageThree from '@/pages/BookPageThree';
import BookPageTwo from '@/pages/BookPageTwo';
import NicknamePage from '@/pages/NicknamePage';
import SatisfactionModal from '@/components/SatisfactionModal';

function FlipBook() {
  const [isOpenModal, setOpenModal] = useState<boolean>(() => false);
  const flipPageRef = useRef<ReactFlipPage | null>(null);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      // handle touch move event here
    };

    if (flipPageRef.current) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
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
    <div key="page0">
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
      {' '}
      {isOpenModal ? (
        <SatisfactionModal onClickToggleModal={onClickToggleModal} />
      ) : null}
      <FlipPage
        orientation="horizontal" // 삼항연산자
        uncutPages
        ref={flipPageRef}
        width={920} // 삼항연산자
        height={670}
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
