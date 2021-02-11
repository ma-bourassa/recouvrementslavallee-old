import React from "react";
import PropTypes from "prop-types";
import { PromotionsPageTemplate } from "../../pages/promotions";

const PromotionsPagePreview = ({ entry }) => {
  const data = entry.get("data").toJS();

  if (data) {
    return (
      <PromotionsPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        emptyPromo={data.emptyPromo}
        promotions={data.promotions || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

PromotionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PromotionsPagePreview;
