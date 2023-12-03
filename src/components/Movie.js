import "./Movie.css";
import allMovies from "../data";

const Movie = () => {
  return (
    <div className="all-movies">
      {allMovies.map((movie) => {
        const { id, image, title, age, tags, description } = movie;

        return (
          <div className="movie-box" key={id}>
            <img src={image} alt={`${title}-poster`} />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
