import PropTypes from "prop-types";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ images }) {
  return (
    <ImageGallery items={images} showIndex={true} showPlayButton={false} showBullets={true} originalTitle={"test"} />
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
};
