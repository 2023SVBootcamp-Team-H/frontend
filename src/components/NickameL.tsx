import React from 'react';
import Lottie from 'lottie-react';
import nicknameL from '@/assets/images/nicknameL.png';
import nicknameLottie from '@/assets/nicknameLottie';

function NickameL() {
  return (
    <div className="w-96">
      {/* <Lottie animationData={nicknameLottie} data-testid="lottie-animation" /> */}
      <img className="" src={nicknameL} alt="witch" />
    </div>
  );
}

export default NickameL;
