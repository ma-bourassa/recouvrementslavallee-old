import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import SEO from "../components/Seo";

export const ContactPageTemplate = ({ title, subtitle, phone, address, area }) => {
  const formattedAddress = address.split(`\n`);
  const formattedArea = area.split(`\n`);

  return (
    <>
      <SEO keywords={[title, "soumission"]} title={title} description={subtitle} />
      <Header title={title} text={subtitle} />
      <section className="flex flex-wrap justify-start items-start max-w-6xl mx-auto mb-6 ">
        <ContactForm />

        <div className="w-full lg:w-1/3 p-6">
          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Téléphones</h2>
            <ul className="list-none leading-relaxed text-blue-700">
              <li>
                <a className="font-semibold underline" href={`tel:+1-${phone}`}>
                  {phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Zone de service</h2>
            <ul className="font-semibold text-blue-700 mb-2 leading-relaxed">
              {formattedArea.map((area, i) => (
                <li key={i} className="font-semibold text-blue-700">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Adresse</h2>
            <ul className="font-semibold text-blue-700 mb-2 leading-relaxed">
              {formattedAddress.map((addressLine, i) => (
                <li key={i} className="font-semibold text-blue-700">
                  {addressLine}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <iframe
          title="Map"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=166%20rang%20St-Andr%C3%A9%20St-Bernard%20de%20Lacolle%20+(My%20company)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
          frameBorder="0"
        />
      </section>
    </>
  );
};

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  area: PropTypes.string,
  phone: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        phone={frontmatter.phone}
        address={frontmatter.address}
        area={frontmatter.area}
      ></ContactPageTemplate>
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContactPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        subtitle
        phone
        address
        area
      }
    }
  }
`;
