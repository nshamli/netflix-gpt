import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoTitle = (props) => {
  const { title, overview, release_date } = props;
  const year = release_date.split("-")[0];
  return (
    <div className="py-72 absolute m-8 text-white w-screen aspect-video">
      <h1 className="font-bold text-3xl p-2">{title}</h1>
      <p className=" text-md w-1/3 p-2">{overview}</p>
      <div>
        <button className="py-4 px-6 text-black bg-white opacity-80 rounded-xl m-2 hover:opacity-65">
          <PlayArrowIcon />
          Play
        </button>
        <button className="py-4 px-6 text-white bg-slate-400  opacity-80 rounded-xl m-2 hover:opacity-65">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
