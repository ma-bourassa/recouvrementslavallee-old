import React from "react";
import PropTypes from "prop-types";
import { ProductsPageTemplate } from "../../pages/produits";

const ProductsPagePreview = ({ entry }) => {
  const data = entry.get("data").toJS();

  if (data) {
    return <ProductsPageTemplate title={data.title} subtitle={data.subtitle} products={data.products || {}} />;
  } else {
    return <div>Loading...</div>;
  }
};

ProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ProductsPagePreview;
