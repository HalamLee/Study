import React from "react";
import PropTypes from "prop-types";

const movieILike = [
  {
    id: 1,
    name: "The Notebook",
    image:
      "https://mblogthumb-phinf.pstatic.net/20141102_71/smn94_1414860056360Tb2js_JPEG/movie_image.jpg?type=w2",
    rating: 5,
  },
  {
    id: 2,
    name: "FROZEN",
    image:
      "https://lh3.googleusercontent.com/proxy/a5bLT9wPzdUJmbE-WHP6tlavy1bs8-iv4a7oEU93autHXfcmbxkfPWE0V4h953Oy7KivEY-9KfeidLtY5CemyFLbW9ZoeQUwXTHFGkUxIPKn",
    rating: 5,
  },
  {
    id: 3,
    name: "The Greatest Showman",
    image:
      "https://juilkimcom.files.wordpress.com/2017/12/the-greatest-showman-poster-2017-billboard-1240.jpg?w=1240",
    rating: 4.5,
  },
  {
    id: 4,
    name: "A Beautiful Mind",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJ0KCRsjMYSbfRoeZ1KwwPKlktTDvKBi-5L8xpy2APX0HH_NY4vIQ-6c0869bc2j3z9Q&usqp=CAU",
    rating: 4.5,
  },
  {
    id: 5,
    name: "About Time",
    image: "https://t1.daumcdn.net/cfile/blog/992F514C5D6A78DF2A",
    rating: 4.5,
  },
];

function Movie({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="200" />
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {movieILike.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          picture={movie.image}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default App;
