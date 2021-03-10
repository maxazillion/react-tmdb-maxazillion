import api from "api";
import { Card } from "components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Film() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const movieData = await api.show(location.pathname);
      console.log(movieData);
      setMovie(() => movieData);
    })();
  }, []);

  const location = useLocation();
  //location.pathname
  ///movie/{movie_id}
  //title id path date
  return (
    <>
      <Card
        title={movie.title}
        id={movie.id}
        path={movie.poster_path}
        date={movie.release_date}
        classAttributes="rounded object-scale-down h-48 w-full"
      />
      <div>
        <Link to="">
          <button className="bg-red-300 rounded">Back</button>
        </Link>
        <p>{movie.overview}</p>
        <p>rating: {movie.vote_average}/10</p>
      </div>
    </>
  );
}

export default Film;
