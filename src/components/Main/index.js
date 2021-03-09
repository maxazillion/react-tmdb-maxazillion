import PropTypes from "prop-types";

function Main({ children }) {
  return <main className="container mx-auto">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
