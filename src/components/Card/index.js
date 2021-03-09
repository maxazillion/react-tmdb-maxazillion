import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function generateImgSrc(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

const Card = ({ title, id, path, date }) => {
  return (
    <section className="text-center border-2">
      <h2>{title}</h2>
      <figure>
        <img
          className="rounded"
          src={generateImgSrc(path)}
          atl={`Movie Poster ${title}`}
        />
        <h2>{date}</h2>
        <Link to={`/${id}`}>
          <button className="bg-gray-50 rounded">see more</button>
        </Link>
      </figure>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Card;
