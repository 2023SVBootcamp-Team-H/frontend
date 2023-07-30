import React from 'react';
import Lottie from 'lottie-react';
import nicknameL from '@/assets/images/nicknameL-Remove.png';
import nicknameLottie from '@/assets/nicknameLottie';

function NickameL() {
  return (
    <div
      className={`${'w-[100%]'} h-[100%] flex flex-col justify-center object-cover`}
    >
      {/* <Lottie animationData={nicknameLottie} data-testid="lottie-animation" /> */}
      <img className="" src={nicknameL} alt="witch" />
    </div>
  );
}

export default NickameL;
