import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video md:pt-[17%] pt-[60%] md:px-24 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="md:py-6 py-1 text-lg md:w-1/4 w-4/4">{overview}</p>
      <div className="md:mt-0 mt-6 mb-4">
        <button className="bg-white text-black p-4 md:px-12 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="mx-4 bg-gray-700 text-white p-4  md:px-12 px-6 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
