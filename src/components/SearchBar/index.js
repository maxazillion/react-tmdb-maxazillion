import PropTypes from "prop-types";

function SearchBar({ handler, label }) {
  return (
    <form>
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input onKeyUp={handler} type="search" id="search" />
      <button onClick={handler}>Search!</button>
    </form>
  );
}

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchBar;
