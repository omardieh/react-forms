import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (movieObj) => {
    const updatedMovies = [movieObj, ...movies];
    const updatedMoviesData = [movieObj, ...moviesData];
    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);
  };

  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter(
        (m) => m.title[0].toLowerCase() === str.toLowerCase()
      );
    }
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovieList={filterMovieList} />
      <AddMovie addNewMovie={addNewMovie} />
      {movies.map((movie, index) => {
        return <MovieCard key={movie._id || index} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
