import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import SEO from "../components/Seo";

const ContactPageTemplate = ({ title, subtitle, phone, address, area }) => {
  const formattedAddress = address.split(`\n`);
  const formattedArea = area.split(`\n`);

  return (
    <>
      <SEO keywords={[title, "soumission"]} title={title} description={subtitle} />
      <Header title={title} text={subtitle} />
      <section className="flex flex-wrap items-start justify-start max-w-6xl mx-auto mb-6 ">
        <ContactForm />

        <div className="w-full p-6 lg:w-1/3">
          <div className="mb-5">
            <h2 className="mb-1 text-xl font-bold">Téléphones</h2>
            <ul className="leading-relaxed text-blue-700 list-none">
              <li>
                <a className="font-semibold underline" href={`tel:+1-${phone}`}>
                  {phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="mb-1 text-xl font-bold">Zone de service</h2>
            <ul className="mb-2 font-semibold leading-relaxed text-blue-700">
              {formattedArea.map((area, i) => (
                <li key={i} className="font-semibold text-blue-700">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="mb-1 text-xl font-bold">Adresse</h2>
            <ul className="mb-2 font-semibold leading-relaxed text-blue-700">
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
          width="100%"
          scrolling="no"
          height="450"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnVi3GauGyUwRrSD4t2aoccU&key=APIKEY&zoom=12"
        ></iframe>
      </section>
    </>
  );
};

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  area: PropTypes.string,
  phone: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
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
      frontmatter: PropTypes.object
    })
  })
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
