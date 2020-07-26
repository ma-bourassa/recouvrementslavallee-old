import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Distributor from "./distributor";

function Product({ title, paragraphes, photo, reverseOrder, distributors }) {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-16 items-center flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-48 lg:pr-48">
          <h3 className="text-3xl font-semibold leading-tight text-center md:text-left">{title}</h3>
          <div className="flex flex-col md:hidden mt-6 w-full">
            <Img alt={title} fluid={photo}></Img>
            <div className="flex space-x-6 mt-2">
              <div className="flex space-x-6 mt-2">
                {distributors.map((distributor, i) => (
                  <Distributor key={i} distributor={distributor} />
                ))}
              </div>
            </div>
          </div>
          <div>
            {paragraphes.map((paragraphe, i) => (
              <p key={i} className="mt-4 md:text-lg font-light text-justify">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>
        <div className={`hidden w-1/2 md:block ${reverseOrder && `order-last md:order-first`}`}>
          <Img alt={title} fluid={photo}></Img>
          <div className="flex space-x-6 mt-2">
            {distributors.map((distributor, i) => (
              <Distributor key={i} distributor={distributor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

Product.defaultProps = {
  distributors: [],
};

Product.propTypes = {
  title: PropTypes.string,
  paragraphes: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
  distributors: PropTypes.arrayOf(PropTypes.string),
};
