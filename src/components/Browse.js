import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopular";
import useTopRatedMovies from "../hooks/useTopRatesMovies";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MAIN CONTAINER
          - VIDEO BACKGROUND
          - VIDEOTITLE
        SECONDARY CONTAINER
          - MOVIESLIST * n
          - CARDS * n 
       */}
    </div>
  );
};

export default Browse;
