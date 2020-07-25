import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Accueil" />
      <BackgroundImage fluid={data.indexImage.childImageSharp.fluid}>
        <section className="py-8 md:py-16 text-center text-white">
          <div className="bg-grey py-4 bg-opacity-50">
            <div>
              <h1 className="font-bold text-2xl md:text-5xl">Vente et installation de plancher</h1>
              <hr className="hr" />
              <h4 className="md:max-w-3xl md:mx-auto text-lg md:text-2xl">Contactez nous pour une soumission</h4>
              <Link to="/contact/">
                <button className="mt-6 btn btn-blue text-xl rounded-full">Soumission</button>
              </Link>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}

export const query = graphql`
  query {
    indexImage: file(relativePath: { eq: "floor4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};
