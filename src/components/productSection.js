import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Distributor from "./distributor";
import distributors from "../data/distributors.json";

function Product({ title, paragraphes, photo, reverseOrder }) {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-16 items-center flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-48">
          <h3 className="text-3xl font-semibold leading-tight text-center md:text-left">{title}</h3>
          <div className="flex flex-col md:hidden mt-6">
            <Img alt={title} fluid={photo}></Img>
            <p className="mt-2 font-light text-sm">Nos distributeurs :</p>
            <div className="flex space-x-6 mt-2">
              {Object.entries(distributors[title]).map(([distributor, link]) => (
                <Distributor key={distributor} distributor={distributor} link={link} />
              ))}
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
          <p className="mt-2 font-light text-sm">Nos distributeurs :</p>
          <div className="flex space-x-6 mt-2">
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
