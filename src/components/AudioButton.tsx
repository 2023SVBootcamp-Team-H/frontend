import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
// eslint-disable-next-line
import { audioState, audioVolumeState } from '@/Recoil';
import play from '../assets/images/play.svg';
import stop from '../assets/images/stop.svg';

function AudioButton(): JSX.Element {
  const [isPlaying, setIsPlaying] = useRecoilState(audioState);
  const [volume, setVolume] = useRecoilState(audioVolumeState);

  function togglePlay(): void {
    setIsPlaying(!isPlaying);
  }

  return (
    <div id="7000" className="absolute top-5 right-7  justify-center">
      <span
        className="flex justify-center items-center  space-x-2
        font-ham text-[#E1C0E7] "
      >
        <span>BGM</span>
        <span>
          <button type="button" onClick={togglePlay}>
            {isPlaying ? <img src={stop} alt="" /> : <img src={play} alt="" />}
          </button>
        </span>
      </span>
      <input
        className="w-[82px] mt-1 accent-[#d091dc]"
        type="range"
        onChange={(e) => {
          setVolume(Number(e.target.value) / 100);
        }}
      />
    </div>
  );
}

export default AudioButton;
