import api from "api";
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
  return (
    <>
      <Link to="">
        <button className="bg-red-300 rounded">Back</button>
      </Link>
      <p>Film</p>
    </>
  );
}

export default Film;
