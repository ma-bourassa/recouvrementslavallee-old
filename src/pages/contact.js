import React from "react";

import Layout from "../components/layout/layout";
import ContactForm from "../components/contact-form";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Header from "../components/header";
export default function ContactPage({ data }) {
  return (
    <Layout>
      <SEO keywords={["contact", "soumission", "courriel", "telephone", "adresse"]} title="Contact" />
      <Header
        title="Contactez-nous !"
        text="Pour toute demande au sujet de nos services, nos produits ou pour une estimation, veuillez remplir le
              formulaire ci-dessous. Nous communiquerons avec vous dans les plus brefs délais."
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>
      <section className="flex flex-wrap justify-start items-start max-w-6xl mx-auto mb-6 ">
        <div className="w-full lg:w-1/3 p-6">
          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Téléphones</h2>
            <ul className="list-none leading-relaxed text-blue2">
              <li>
                <a className="font-semibold underline" href="tel:+14503573127">
                  450-357-3127
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Zone de service</h2>
            <ul className="font-semibold text-blue2 mb-2 leading-relaxed">
              <li>Montérégie</li>
              <li>Rive-sud de Montréal</li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-bold mb-1">Adresse</h2>
            <p className=" mb-2 font-semibold text-blue2 ">
              166 rang Saint-André
              <br />
              Saint-Bernard-de-Lacolle
              <br />
              Québec, J0J 1V0
            </p>
          </div>
        </div>

        <ContactForm />
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
        ></iframe>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerBackground: file(relativePath: { eq: "floor5.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.object,
};
