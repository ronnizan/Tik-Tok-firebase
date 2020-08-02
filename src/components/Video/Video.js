import React, { useRef, useState } from "react";
import VideoFooter from "../Video-footer/VideoFooter";
import VideoSidebar from "../Video-sidebar/VideoSidebar";
import "./Video.css";
function Video({ url, channel, description, song, likes, messages, shares }) {
  const [Playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (Playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  
  return (
    <div className='video'>
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className='video__player'
        src={url}
      ></video>
      <VideoFooter
        channel={channel}
        song={song}
        description={description}
      ></VideoFooter>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
