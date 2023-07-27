import React from 'react';
import Lottie from 'lottie-react';
import nicknameLottie from '@/assets/nicknameLottie';

function NickameL() {
  return (
    <div className="w-96">
      <Lottie animationData={nicknameLottie} data-testid="lottie-animation" />
    </div>
  );
}

export default NickameL;
