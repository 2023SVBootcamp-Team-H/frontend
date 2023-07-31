import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '@/assets/loadingLottie';

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
    <div className="w-[20vw]">
      <Lottie animationData={loadingLottie} data-testid="lottie-animation" />
    </div>
  );
}

export default LoadingScreen;
