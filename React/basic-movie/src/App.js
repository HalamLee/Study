import React from 'react';
import './index.css';
import Movie from './components/Movie';
function App() {
  const movies = [
    { title: 'Lami1', year: 2001 },
    { title: 'Lami2', year: 2002 },
    { title: 'Lami3', year: 2003 },
  ];
  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
