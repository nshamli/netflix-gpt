import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetTrailerVideo from "../hooks/useGetTrailerVideo";

import { addNowPlayingMovies } from "../utils/movieSlice";

const VideoBackground = (props) => {
  const { movieId } = props;
  console.log(movieId);
  useGetTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return null;
  console.log(trailerVideo[2].key);
  return (
    <div className="w-screen h-auto">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo[2].key +
          "?si=hA8kTyhmQ15Zk4Uc&autoplay=1&mute=1&loop=1&playlist=Mzw2ttJD2qQ&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
