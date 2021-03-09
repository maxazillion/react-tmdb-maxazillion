import api from "api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  return <p>Film</p>;
}

export default Film;
