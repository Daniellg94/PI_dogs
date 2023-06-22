
import dogs_aut from "./dogs_aut.mp4"

const AudioPlayer = () => {


  return (
    <div>
      <audio src={dogs_aut} controls={true} autoPlay={true} loop={true} />
    </div>
  );
};

export default AudioPlayer;