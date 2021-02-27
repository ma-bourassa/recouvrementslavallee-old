import React from "react";
import PropTypes from "prop-types";

const Feature = ({ title, description }) => {
  return (
    <div className="flex-1 lg:w-1/3 bg-white shadow-2xl rounded-lg px-4 py-8 border-solid text-center m-4">
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

export default Feature;
