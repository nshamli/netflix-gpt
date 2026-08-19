import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;
  //console.log(movies[0]);
  const { id, title, overview, release_date } = movies[1];
  return (
    <div>
      <VideoTitle
        title={title}
        overview={overview}
        release_date={release_date}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
