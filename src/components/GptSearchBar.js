import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const store = useSelector((state) => state.config.lang);

  const searchText = useRef();
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(action) => action.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          ref={searchText}
          placeholder={lang[store].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {lang[store].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
