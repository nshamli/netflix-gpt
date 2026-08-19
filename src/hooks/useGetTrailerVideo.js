import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { getTrailerVideos } from "../utils/movieSlice";
const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await res.json();
    //console.log("trailer", data.results);
    const TrailerMovie = data.results;
    //"Featurette"
    const filteredTrailerMovie = TrailerMovie.filter(
      (x) => x.type === "Trailer"
    );
    // console.log(filteredTrailerMovie);
    dispatch(getTrailerVideos(filteredTrailerMovie));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useGetTrailerVideo;
