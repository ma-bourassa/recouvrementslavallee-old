import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import products from "../data/products.json";

function Product({ title, paragraphes, photo, reverseOrder }) {
  return (
    <section>
      <div className="container mx-auto px-6 py-6 lg:py-12 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-32">
          <h2 className="text-3xl font-semibold leading-tight text-center lg:text-left mb-6">{title}</h2>
          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <Img alt={title} fluid={photo} className="container mx-auto"></Img>
            <p className="mt-6 mb-2 font-bold text-center">Voir les produits disponibles</p>
            <div className="flex flex-wrap space-x-4  justify-center">
              {Object.entries(products[title]).map(([product, link]) => (
                <a
                  key={product}
                  className="border border-grey text-center text-sm font-semibold py-2 px-3 rounded hover:bg-grey hover:text-white transition duration-500"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product}
                </a>
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
        {/* Desktop */}
        <div className={`hidden w-1/2 lg:block lg:pr-32 ${reverseOrder && `order-last lg:order-first`}`}>
          <Img alt={title} fluid={photo}></Img>
          <p className="mt-6 mb-2 font-bold">Voir les produits disponibles</p>
          <div className="flex flex-wrap space-x-4">
            {Object.entries(products[title]).map(([product, link]) => (
              <a
                key={product}
                className="border border-grey text-center text-sm font-semibold py-2 px-3 rounded hover:bg-grey hover:text-white transition duration-500"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product}
              </a>
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
