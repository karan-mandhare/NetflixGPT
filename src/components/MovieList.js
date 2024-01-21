import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return movies && movies.length > 0 ? (
    <div className="px-6 text-white">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((item) => (
            <MovieCard key={item.id} poster_path={item.poster_path} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p>Images Not found</p>
  );
}

export default MovieList;
