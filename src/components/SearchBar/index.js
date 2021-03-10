import PropTypes from "prop-types";

function SearchBar({ handler, label }) {
  return (
    <form onSubmit={handler}>
      <div className="flex self-center">
        <label htmlFor="search" className="sr-only">
          {label}
        </label>
        <input type="search" id="search" />
        <button>Search!</button>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchBar;
