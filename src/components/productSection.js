import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import distributors from "../data/distributors.json";
import Distributor from "./distributor";

function Product({ title, paragraphes, photo, reverseOrder }) {
  return (
    <section>
      <div className="container mx-auto px-6 py-6 lg:py-12 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-32">
          <h2 className="text-3xl font-semibold leading-tight text-center lg:text-left mb-6">{title}</h2>
          <div className="flex flex-col lg:hidden">
            <Img alt={title} fluid={photo} className="container mx-auto"></Img>
            <div className="flex space-x-6 container mx-auto justify-center">
              {Object.entries(distributors[title]).map(([distributor, link]) => (
                <Distributor key={distributor} distributor={distributor} link={link} />
              ))}
            </div>
          </div>
          <div>
            {paragraphes.map((paragraphe, i) => (
              <p key={i} className="mt-4 lg:text-lg text-justify">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>
        <div className={`hidden w-1/2 lg:block lg:pr-32 ${reverseOrder && `order-last lg:order-first`}`}>
          <Img alt={title} fluid={photo}></Img>
          <div className="flex space-x-6">
            {Object.entries(distributors[title]).map(([distributor, link]) => (
              <Distributor key={distributor} distributor={distributor} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

Product.propTypes = {
  title: PropTypes.string,
  paragraphes: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
};
