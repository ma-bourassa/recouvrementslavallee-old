import React from "react";
import PropTypes from "prop-types";
import { ProjectGalleryTemplate } from "../../templates/project-gallery";

const RealisationPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return <ProjectGalleryTemplate title={data.title} images={data.photos} />;
  } else {
    return <div>Loading...</div>;
  }
};

RealisationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default RealisationPreview;
