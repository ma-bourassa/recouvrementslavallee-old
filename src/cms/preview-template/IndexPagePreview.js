import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../pages";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        mainpitch={data.mainpitch || {}}
        features={data.features || {}}
        specialties={data.specialties || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;
