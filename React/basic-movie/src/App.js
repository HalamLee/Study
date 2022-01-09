import React, { useState } from 'react';
import './index.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Lami1', year: 2001 },
    { title: 'Lami2', year: 2002 },
    { title: 'Lami3', year: 2003 },
  ]);

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}
export default App;
