import React from "react";
import movies from "../data/movies";

function Actors() {
  const allActors = {};

  movies.forEach((movie) => {
    movie.actors.forEach((actor) => {
      if (!allActors[actor]) allActors[actor] = [];
      allActors[actor].push(movie.title);
    });
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {Object.entries(allActors).map(([actor, movieTitles]) => (
        <div key={actor}>
          <h2>{actor}</h2> {/* Full name must be rendered in one tag */}
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

export default Actors;