import api from "api";
import { Card, Main } from "components";
import { useEffect, useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await api.index();
      setMovies(() => results);
    })();
  }, []);

  console.log(movies);
  return (
    <Main>
      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie, index) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              path={movie.poster_path}
              id={movie.id}
            />
          );
        })}
      </div>
    </Main>
  );
};

export default Home;
