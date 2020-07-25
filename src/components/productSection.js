import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function ProductSection({ title, paragraphes, photo, reverseOrder }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-16 items-center flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-48 lg:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
          <div className="md:hidden mt-10 md:mt-0 w-full md:w-1/2">
            <Img alt={title} fluid={photo}></Img>
          </div>
          <div>
            {paragraphes.map((paragraphe, i) => (
              <p key={i} className="mt-4 md:text-lg font-light text-justify">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>
        <div className={`mt-10 md:mt-0 w-full md:w-1/2 hidden md:block ${reverseOrder && `order-last md:order-first`}`}>
          <Img alt={title} fluid={photo}></Img>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  title: PropTypes.string,
  paragraphes: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
};
