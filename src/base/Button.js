import PropTypes from "prop-types";
export const Button = ({ txt }) => {
  return <button>{txt}</button>;
};

Button.propTypes = {
  txt: PropTypes.string,
};
