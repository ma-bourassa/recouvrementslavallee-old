import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, classes = "" }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (image && image.childImageSharp) {
    return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} className={classes} />;
  }

  if (childImageSharp) {
    if (childImageSharp.fluid)
      return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} className={classes} />;
    else {
      return <Img style={imageStyle} fixed={childImageSharp.fixed} alt={alt} className={classes} />;
    }
  }

  if (image && typeof image === "string") return <img style={imageStyle} src={image} alt={alt} className={classes} />;

  if (imageInfo && typeof imageInfo === "string") return <img style={imageStyle} src={imageInfo} className={classes} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  classes: PropTypes.any,
  imageInfo: PropTypes.oneOfType([
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      style: PropTypes.object,
    }),
    PropTypes.string,
  ]),
};

export default PreviewCompatibleImage;
