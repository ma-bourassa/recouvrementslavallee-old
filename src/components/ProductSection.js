import PropTypes from "prop-types";
import React from "react";
import { slugify } from "../utils/string-utils";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ProductSection = ({ title, description, image, reverseOrder, linksTitle, links }) => {
  const formattedDescription = description.split(`\n\n`);

  return (
    <section id={slugify(title)}>
      <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-32">
          <h2 className="text-4xl font-semibold leading-tight text-center lg:text-left mb-6">{title}</h2>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <ImageSection title={title} image={image} linksTitle={linksTitle} links={links} />
          </div>

          <div>
            {formattedDescription.map((paragraphe, i) => (
              <p key={i} className="mt-4 lg:text-lg text-justify">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className={`hidden w-1/2 lg:flex lg:flex-col lg:pr-32 ${reverseOrder && `order-last lg:order-first`}`}>
          <ImageSection title={title} image={image} linksTitle={linksTitle} links={links} />
        </div>
      </div>
    </section>
  );
};

ProductSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linksTitle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  reverseOrder: PropTypes.bool,
  links: PropTypes.array,
};

export default ProductSection;

const ImageSection = ({ title, image, linksTitle, links }) => {
  const imageInfo = { image, alt: title };
  return (
    <>
      <PreviewCompatibleImage
        imageInfo={imageInfo}
        classes="container mx-auto lg:mx-0 rounded"
      ></PreviewCompatibleImage>

      {links && (
        <>
          <p className="mt-6 mb-2 font-bold text-center lg:text-left">{linksTitle}</p>
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
};

ImageSection.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  linksTitle: PropTypes.string,
  links: PropTypes.array,
};
