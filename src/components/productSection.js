import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function ProductSection({ title, text, photo, reverseOrder }) {
  console.log(photo);
  return (
    <section className="py-20">
      <div className="container mx-auto px-16 items-center flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">{text}</p>
        </div>
        <div className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last md:order-first`}`}>
          <Img alt={title} fixed={photo}></Img>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
};
