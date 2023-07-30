import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { audioState } from '@/Recoil';

function AudioButton(): JSX.Element {
  const [isPlaying, setIsPlaying] = useRecoilState(audioState);

  function togglePlay(): void {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <button type="button" onClick={togglePlay}>
        {isPlaying ? (
          <img src="./src/assets/images/stop.svg" alt="" />
        ) : (
          <img src="./src/assets/images/play.svg" alt="" />
        )}
      </button>
    </div>
  );
}

export default AudioButton;
