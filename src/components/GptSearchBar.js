import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import MovieCard from "./MovieCard";

const GptSearchBar = () => {
  const store = useSelector((state) => state.config.lang);
  const [movieList, setMoveList] = useState(null);

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const json = await response.json();
      json.results && setMoveList(json.results);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <div className="md:pt-[10%] pt-[55%] flex justify-center">
        <form
          onSubmit={(action) => action.preventDefault()}
          className="md:w-1/2 w-11/12 bg-black grid grid-cols-12"
        >
          <input
            type="text"
            className="p-4 m-4 md:col-span-9 col-span-8"
            ref={searchText}
            placeholder={lang[store].gptSearchPlaceholder}
          />
          <button
            className="py-2 px-2 bg-red-700 text-white rounded-lg col-span-3 m-4"
            onClick={handleGptSearchClick}
          >
            {lang[store].search}
          </button>
        </form>
      </div>
      {movieList && (
        <div className="w-full mt-10 flex flex-wrap justify-center bg-black p-6 bg-opacity-90">
          {movieList.map((item) => (
            <MovieCard key={item.id} poster_path={item.poster_path} />
          ))}
        </div>
      )}
    </>
  );
};

export default GptSearchBar;
