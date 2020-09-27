import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ images }) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <ImageGallery items={images} showIndex={true} showPlayButton={false} showBullets={true} />
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
};
