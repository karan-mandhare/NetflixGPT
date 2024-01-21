import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggesions";
import { BG_URL } from "../utils/constant";

function GptSearch() {
  return (
    <div>
      <div className="absolute w-[100%] -z-10">
        <img src={BG_URL} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
