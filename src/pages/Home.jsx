import React from "react";
import movies from "../data/movies";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
            <p>Time: {movie.time} minutes</p>
            <p>Genres: {movie.genres.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;