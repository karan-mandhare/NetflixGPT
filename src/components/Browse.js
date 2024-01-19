import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaying();

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
