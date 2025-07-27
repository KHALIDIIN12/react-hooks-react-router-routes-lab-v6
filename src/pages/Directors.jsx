import React from "react";
import movies from "../data/movies";

function Directors() {
  const allDirectors = movies.reduce((acc, movie) => {
    if (!acc[movie.director]) acc[movie.director] = [];
    acc[movie.director].push(movie.title);
    return acc;
  }, {});

  return (
    <div>
      <h1>Directors Page</h1>
      {Object.entries(allDirectors).map(([director, movieTitles]) => (
        <div key={director}>
          <h2>{director}</h2>
          <ul>
            {movieTitles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;