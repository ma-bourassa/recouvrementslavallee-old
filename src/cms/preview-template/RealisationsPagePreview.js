import React from "react";
import PropTypes from "prop-types";
import { RealisationsPageTemplate } from "../../pages/realisations";

const RealisationsPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <RealisationsPageTemplate title={data.title} subtitle={data.subtitle} realisations={[]} />;
  } else {
    return <div>Loading...</div>;
  }
};

RealisationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default RealisationsPagePreview;
