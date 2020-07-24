import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function ProductSection({ title, paragraphes, photo, reverseOrder }) {
  console.log(photo);
  return (
    <section className="py-20">
      <div className="container mx-auto px-16 items-center flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-32 lg:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
          {paragraphes.map((paragraphe) => (
            <p key={paragraphe.id} className="mt-4 text-lg font-light">
              {paragraphe}
            </p>
          ))}
        </div>
        <div className={`mt-10 md:mt-0 w-full md:w-1/2 ${reverseOrder && `order-first md:order-last`}`}>
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
