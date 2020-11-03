import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

export default function Product({ title, description, photo, reverseOrder, links }) {
  return (
    <section>
      <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-32">
          <h3 className="text-4xl font-semibold leading-tight text-center lg:text-left mb-6">{title}</h3>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <ImageSection title={title} photo={photo} links={links} />
          </div>

          <div>
            <p className="mt-4 lg:text-lg text-justify">{description}</p>
          </div>
        </div>

        {/* Desktop */}
        <div className={`hidden w-1/2 lg:flex lg:flex-col lg:pr-32 ${reverseOrder && `order-last lg:order-first`}`}>
          <ImageSection title={title} photo={photo} links={links} />
        </div>
      </div>
    </section>
  );
}

function ImageSection({ title, photo, links }) {
  return (
    <>
      <Img className="container mx-auto lg:mx-0 rounded" alt={title} fluid={photo} />

      {links && (
        <>
          <p className="mt-6 mb-2 font-bold text-center lg:text-left">Voir les produits disponibles</p>
          <div className="flex flex-wrap justify-center lg:justify-start pb-4">
            {links &&
              links.map((link, i) => (
                <a
                  key={i}
                  className="border border-grey text-center text-sm font-semibold mt-2 mr-4 py-2 px-2 rounded hover:bg-grey hover:text-white transition duration-500"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
          </div>
        </>
      )}
    </>
  );
}

ImageSection.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.object,
  links: PropTypes.array,
};

Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.object,
  reverseOrder: PropTypes.bool,
  links: PropTypes.array,
};
