import PropTypes from "prop-types";

function SearchBar({ handler, label }) {
  return (
    <form onSubmit={handler}>
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input type="search" id="search" />
      <button>Search!</button>
    </form>
  );
}

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchBar;
