import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

function GptSearch() {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bg" className="h-screen w-screen object-cover"/>
      </div>
      <div className="">
        <GptSearchBar />
      </div>
    </>
  );
}

export default GptSearch;
