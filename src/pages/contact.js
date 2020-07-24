import React from "react";

import Layout from "../components/layout";
import ContactForm from "../components/contact-form";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
export default function ContactPage({ data }) {
  return (
    <Layout>
      <SEO keywords={["contact", "soumission", "courriel", "telephone", "adresse"]} title="Contact" />
      <BackgroundImage fluid={data.contactImage.childImageSharp.fluid}>
        <section className="py-8 md:py-16 text-center text-white">
          <div className="bg-grey py-4 bg-opacity-50">
            <div>
              <h1 className=" font-bold text-2xl md:text-5xl mb-2">Contactez-nous !</h1>
              <hr className="hr" />
              <p className="leading-loose md:max-w-3xl md:mx-auto mt-2">
                Pour toute demande au sujet de nos services, nos produit ou pour une estimation, veuillez remplir le
                formulaire ci-dessous. Nous communiquerons avec vous dans les plus bref délais.
              </p>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <section className="flex flex-wrap justify-start items-start max-w-6xl mx-auto mb-6 ">
        <div className="w-full md:w-1/3 p-6">
          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Téléphones</h4>
            <ul className="list-none leading-relaxed text-blue2">
              <li>
                <a className="font-semibold underline" href="tel:+14503573127">
                  450-357-3127
                </a>
              </li>
              <li>
                <a className="font-semibold underline" href="tel:+15147933743">
                  514-793-3743
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Courriel</h4>
            <a className="font-semibold underline text-blue2" href="mailto:lesrecouvrementslavallee@gmail.com">
              lesrecouvrementslavallee@gmail.com
            </a>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Zone de service</h4>
            <ul className="font-semibold text-blue2 mb-2 leading-relaxed">
              <li>Montérégie</li>
              <li>Rive-sud de Montréal</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Adresse</h4>
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
      <section className="rounded border">
        <iframe
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
    contactImage: file(relativePath: { eq: "floor5.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.any,
};
