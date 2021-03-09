import api from "api";
import { Card, Main, SearchBar } from "components";
import { useEffect, useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await api.index();
      setMovies(() => results);
    })();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();
    const { results } = await api.index("/search/movie", {
      query: event.target.elements[0].value,
    });
    setMovies(() => results);
  }
  return (
    <Main>
      <div className="center">
        <SearchBar handler={handleSearch} label="Search Movie Titles" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie, index) => {
          //TODO: pass the date
          return (
            <Card
              key={movie.id}
              title={movie.title}
              path={movie.poster_path}
              //date={new Date(movie.date).toLocaleDataString()}
              date={movie.release_date}
              id={movie.id}
            />
          );
        })}
      </div>
    </Main>
  );
};

export default Home;
