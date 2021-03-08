import PropTypes from "prop-types";

function generateImgSrc(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

const Card = ({ title, id, path }) => {
  return (
    <section>
      <h2>{title}</h2>
      <figure>
        <img
          className="max-h-30"
          src={generateImgSrc(path)}
          atl={`Movie Poster ${title}`}
        />
      </figure>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
