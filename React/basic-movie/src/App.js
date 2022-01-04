import React from 'react';
import './index.css';
function App() {
  const movies = [
    { title: 'Lami1', year: 2001 },
    { title: 'Lami2', year: 2002 },
    { title: 'Lami3', year: 2003 },
  ];
  const renderMovies = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
