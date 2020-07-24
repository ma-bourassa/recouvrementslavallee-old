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
        <section classNameName="py-8 md:py-16 text-center text-white">
          <div classNameName="bg-grey py-4 bg-opacity-50">
            <div>
              <h1 classNameName="font-bold text-2xl md:text-5xl">Vente et installation de plancher</h1>
              <hr classNameName="hr" />
              <h4 classNameName="md:max-w-3xl md:mx-auto text-lg md:text-2xl">Contactez nous pour une soumission</h4>
              <Link to="/contact/">
                <button classNameName="mt-6 btn btn-blue text-xl rounded-full">Soumission</button>
              </Link>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <section className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style="box-shadow:0 10px 28px rgba(0,0,0,.08)"
              >
                <p className="font-semibold text-xl">Service One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor
                  integer.
                </p>
              </div>
            </div>
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style="box-shadow:0 10px 28px rgba(0,0,0,.08)"
              >
                <p className="font-semibold text-xl">Service Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor
                  integer.
                </p>
              </div>
            </div>
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style="box-shadow:0 10px 28px rgba(0,0,0,.08)"
              >
                <p className="font-semibold text-xl">Service Three</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor
                  integer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  data: PropTypes.any,
};
