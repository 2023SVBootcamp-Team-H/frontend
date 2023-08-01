import React from 'react';
import Lottie from 'lottie-react';
import nicknameL from '@/assets/images/nicknameL-Remove.png';
import nicknameLottie from '@/assets/nicknameLottie';

function NickameT() {
  return (
    // <div className={`${'w-[100%]'}justify-center items-center object-cover`}>
    <div className="flex justify-center items-center w-[100%]">
      {/* <Lottie animationData={nicknameLottie} data-testid="lottie-animation" /> */}
      <img
        className="flex w-[80%] items-center justify-center"
        src={nicknameL}
        alt="witch"
      />
    </div>
  );
}

export default NickameT;
