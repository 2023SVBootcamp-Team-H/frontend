import React from 'react';
import { colorify, replaceColor, flatten, getColors } from 'lottie-colorify';
import Lottie from 'lottie-react';
import loadingLottie from '@/assets/lottie';

function LoadingScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="w-80">
      <Lottie animationData={loadingLottie} data-testid="lottie-animation" />
    </div>
  );
}

export default LoadingScreen;
