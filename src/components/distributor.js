import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import beaulieu from "../images/products/beaulieu.jpg";

function Distributor({ distributor }) {
  return (
    <div>
      <a href="https://beaulieucanada.com/fr/retail/flooring/luxuryvinyl" target="_blank" rel="noopener noreferrer">
        <img width="50" height="50" src={beaulieu}></img>
      </a>
    </div>
  );
}
export default Distributor;

Distributor.PropTypes = {
  distributor: PropTypes.string,
};
