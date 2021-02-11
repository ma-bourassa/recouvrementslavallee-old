import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../pages/contactez-nous";

const ContactPagePreview = ({ entry }) => {
  const data = entry.get("data").toJS();

  if (data) {
    return (
      <ContactPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        phone={data.phone}
        area={data.area}
        address={data.address}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ContactPagePreview;
