// import React, { useEffect, useState } from 'react';

// const audio: HTMLAudioElement | null = document.getElementById(
//   'audio',
// ) as HTMLAudioElement;

// function AudioPlayer(): JSX.Element {
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (audio) {
//       // bgm 볼륨 조절
//       // audio.volume = 0.05;
//       isPlaying ? audio.play() : audio.pause();
//     }
//   }, [isPlaying]);

//   function togglePlay(): void {
//     setIsPlaying((prevIsPlaying) => !prevIsPlaying);
//   }

//   return (
//     <div className="flex items-center font-ham-m justify-center">
//       <audio id="audio" loop>
//         <track kind="captions" />
//         <source src="./src/assets/audio/bgsound.mp3" type="audio/mpeg" />
//       </audio>
//       <button type="button" onClick={togglePlay}>
//         {isPlaying ? (
//           <img src="./src/assets/images/stop.svg" alt="" />
//         ) : (
//           <img src="./src/assets/images/play.svg" alt="" />
//         )}
//       </button>
//     </div>
//   );
// }

// export default AudioPlayer;

import React, { useEffect, useState, useRef } from 'react';

function AudioPlayer(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // 볼륨을 0.05로 설정
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  function togglePlay(): void {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }

  return (
    <div>
      <audio id="audio" loop ref={audioRef}>
        <track kind="captions" />
        <source src="./src/assets/audio/bgsound.mp3" type="audio/mpeg" />
      </audio>
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

export default AudioPlayer;
