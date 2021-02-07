import React from "react";
import PropTypes from "prop-types";
import { RealisationPageTemplate } from "../../templates/realisation";

const RealisationPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return <RealisationPageTemplate title={data.title} images={data.images} />;
  } else {
    return <div>Loading...</div>;
  }
};

RealisationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default RealisationPreview;
