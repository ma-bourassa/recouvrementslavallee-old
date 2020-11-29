import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Header from "../components/header";
import Fade from "react-reveal/Fade";

export default function IndexPage({ data }) {
  const pageData = data.accueil.frontmatter;
  return (
    <Layout>
      <SEO title="Pose de plancher" />
      <Header title="Vente et installation de plancher" text="Contactez-nous pour une soumission gratuite">
        <Link to="/contactez-nous/">
          <button className="mt-4 btn btn-blue text-xl rounded-lg">Soumission</button>
        </Link>
      </Header>

      <section className="container mx-auto px-6 pb-6 lg:pb-12 lg:max-w-5xl leading-relaxed">
        <h2 className="text-xl lg:text-3xl font-semibold text-center">{pageData.title_intro}</h2>
        <hr className="border-blue-700 border-t-2 mx-auto my-6 w-full" />
        <div className="text-center lg:text-lg">{pageData.texte_intro}</div>
      </section>

      <section className="bg-gray-100 ">
        <div className="container mx-auto px-6 py-6 lg:py-12 leading-relaxed">
          <h2 className=" text-xl lg:text-2xl font-semibold text-center ">
            Pourquoi choisir notre entreprise pour vos travaux&nbsp;?
          </h2>
          <hr className="border-blue-700 border-t-2 my-6 lg:max-w-lg mx-auto" />

          <div className="flex flex-col lg:flex-row ">
            {pageData.features.map((feature) => (
              <div
                key={feature.title}
                className="flex-1 lg:w-1/3 bg-white shadow-2xl rounded-lg px-4 py-8 border-solid text-center m-4"
              >
                <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/contactez-nous/">
              <button className="mt-6 py-3 px-5 font-semibold cursor-pointer text-lg border border-blue-700 hover:bg-blue-700 hover:text-white rounded-lg focus:outline-none transition duration-500">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col lg:flex-row px-6 py-6 lg:py-12 leading-relaxed items-center">
          <div className="hidden lg:block lg:w-1/2">
            <Fade left>
              <Img className="rounded" fluid={data.homeImage.childImageSharp.fluid} />
            </Fade>
          </div>
          <div className="lg:w-1/2 lg:mx-12 text-center lg:text-left">
            <h2 className="text-2xl font-semibold mb-6 text-center">Nos spécialitées</h2>
            <hr className="border-blue-700 border-t-2 my-6 lg:max-w-xs mx-auto" />

            <div className="justify-center text-center flex">
              <ul className="text-xl font-medium space-y-1">
                {pageData.specialites.map((specialite) => (
                  <li key={specialite.specialite}>{specialite.specialite}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex justify-center">
              <Link to="/produits/">
                <button className="mt-6 py-2 px-4 font-semibold text-lg inline-block cursor-pointer border border-blue-700 hover:bg-blue-700 hover:text-white rounded-lg focus:outline-none transition duration-500 ease-in-out">
                  Plus d&apos;informations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    homeImage: file(relativePath: { eq: "homepage.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    accueil: markdownRemark(fields: { sourceName: { eq: "accueil" } }) {
      frontmatter {
        title_intro
        texte_intro
        specialites {
          specialite
        }
        features {
          title
          description
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};
