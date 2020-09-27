import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ images }) {
  return (
    <div className="lg:max-w-screen-md lg:mx-auto mx-2 my-4 lg:my-10">
      <ImageGallery items={images} showIndex={true} showPlayButton={false} showBullets={true} lazyLoad={true} />
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
};
