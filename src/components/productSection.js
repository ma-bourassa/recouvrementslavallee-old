import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

export default function Product({ title, paragraphes, photo, reverseOrder, products }) {
  return (
    <section>
      <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-32">
          <h2 className="text-4xl font-semibold leading-tight text-center lg:text-left mb-6">{title}</h2>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <ImageSection title={title} photo={photo} products={products} />
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
        <div className={`hidden w-1/2 lg:flex lg:flex-col lg:pr-32 ${reverseOrder && `order-last lg:order-first`}`}>
          <ImageSection title={title} photo={photo} products={products} />
        </div>
      </div>
    </section>
  );
}

function ImageSection({ title, photo, products }) {
  return (
    <>
      <Img className="container mx-auto lg:mx-0" alt={title} fluid={photo} />
      {Object.keys(products).length > 0 && (
        <p className="mt-6 mb-2 font-bold text-center lg:text-left">Voir les produits disponibles</p>
      )}
      <div className="flex flex-wrap space-x-4 justify-center lg:justify-start pb-4">
        {Object.entries(products).map(([product, link]) => (
          <a
            key={product}
            className="border border-grey text-center text-sm font-semibold mt-2 py-2 px-2 rounded hover:bg-grey hover:text-white transition duration-500"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product}
          </a>
        ))}
      </div>
    </>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  paragraphes: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
  products: PropTypes.object,
};

ImageSection.prototype = {
  title: PropTypes.string,
  photo: PropTypes.object,
  products: PropTypes.object,
};
