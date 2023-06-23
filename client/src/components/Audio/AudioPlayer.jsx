import React, { useState, useRef } from "react";
import dogs_aut from "./dogs_aut.mp4";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleLoadedMetadata = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const duration = audioElement.duration;
      const startingTime = duration * 0.05;
      audioElement.currentTime = startingTime;
    }
  };

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const setDefaultVolume = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = 0.05; // Establecer el volumen por defecto al 50%
    }
  };


  return (
    <div>
      <audio
        ref={audioRef}
        src={dogs_aut}
        controls={false}
        autoPlay={isPlaying}
        loop={true}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={setDefaultVolume}
      />
      <button onClick={togglePlay} style={{background:"none",border:"none",fontSize:"2rem",position:"fixed",top:"93%",left:"1%"}}>{isPlaying ? "🔇" : "🔊"}</button>
    </div>
  );
};

export default AudioPlayer;