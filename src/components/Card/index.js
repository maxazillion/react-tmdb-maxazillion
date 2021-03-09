import PropTypes from "prop-types";

function generateImgSrc(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

const Card = ({ title, id, path }) => {
  return (
    <section className="text-center border-2">
      <h2>{title}</h2>
      <figure>
        <img
          className="rounded"
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
