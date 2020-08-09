import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, trailer }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
};

export default Movie;
