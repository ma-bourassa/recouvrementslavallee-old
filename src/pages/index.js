import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Header from "../components/header";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Accueil" />
      <Header title="Vente et installation de plancher" text="Contactez nous pour une soumission gratuite">
        <Link to="/contact/">
          <button className="mt-4 btn btn-blue text-xl rounded-lg">Soumission</button>
        </Link>
      </Header>

      <section className="container mx-auto px-6 pb-6 lg:pb-12 lg:max-w-5xl leading-relaxed">
        <h3 className="text-xl lg:text-3xl font-semibold text-center">Vos experts en pose de plancher</h3>
        <hr className="border-blue2 border-t-2 mx-auto my-6 w-full" />
        <div className="text-justify lg:text-center lg:text-lg">
          Chers clients, nous sommes ravis de constater votre intérêt pour notre entreprise familiale qui se spécialise
          dans la pose et la vente de revêtements de sols souples. Sachez que nous sommes une compagnie sérieuse et
          établie qui opère depuis 1985 sur la Rive Sud de Montréal.
        </div>
      </section>

      <section className="bg-gray-200 ">
        <div className="container mx-auto px-6 py-6 lg:py-12 leading-relaxed">
          <h4 className=" text-xl lg:text-2xl font-semibold text-center ">
            Pourquoi choisir notre entreprise pour vos travaux&nbsp;?
          </h4>
          <hr className="border-blue2 border-t-2 my-6 lg:max-w-lg mx-auto" />

          <div className="flex flex-col lg:flex-row ">
            <div className="flex-1 lg:w-1/3 bg-white shadow-2xl rounded-lg px-4 py-8 border-solid border-gray-200 text-center m-4">
              <h1 className="text-xl font-semibold text-center mb-4">Qualité</h1>
              <p>
                Chez nous, il n&apos;y a pas de demie-mesure, car la qualité et la finition sont capitales. Notre
                service est clé en main et 100% adapté à vos souhaits!
              </p>
            </div>

            <div className="flex-1 lg:w-1/3 bg-white shadow-2xl rounded-lg px-4 py-8 border-solid border-gray-200 text-center m-4">
              <h1 className="text-xl font-semibold text-center mb-4">Service</h1>
              <p>
                Avec nous, vous aurez l&apos;occasion d&apos;acheter vos matériaux de recouvrement de sols au meilleur
                prix et d&apos;avoir la meilleure équipe de pose sur le marché.
              </p>
            </div>

            <div className="flex-1 lg:w-1/3 bg-white shadow-2xl rounded-lg px-4 py-8 border-solid border-gray-200 text-center m-4">
              <h1 className="text-xl font-semibold text-center mb-4">Soumission gratuite</h1>
              <p>
                Nous nous déplaçons, quelque soit votre projet, afin de vous présenter nos produits et vous offrir une
                évaluation gratuitement.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/contact/">
              <button className="mt-6 py-3 px-5 font-semibold cursor-pointer text-lg border border-blue2 hover:bg-blue2 hover:text-white rounded-lg focus:outline-none transition duration-500">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col lg:flex-row px-6 py-6 lg:py-12 leading-relaxed items-center">
          <div className="hidden lg:block lg:w-1/2">
            <Img className="rounded" fluid={data.productImage.childImageSharp.fluid}></Img>
          </div>
          <div className="lg:w-1/2 lg:mx-12 text-center lg:text-left">
            <h4 className="text-2xl font-semibold mb-6 text-center">Nos spécialitées</h4>
            <hr className="border-blue2 border-t-2 my-6 lg:max-w-xs mx-auto" />

            <div className="justify-center text-center flex">
              <ul className="text-xl font-medium space-y-1">
                <li>Lattes de vinyle</li>
                <li>Tapis</li>
                <li>Prélart</li>
                <li>Bois d&apos;ingérnierie</li>
                <li>Laminé</li>
              </ul>
            </div>

            <div className="mt-4 flex justify-center">
              <Link to="/produits/">
                <button className="mt-6 py-2 px-4 font-semibold text-lg inline-block cursor-pointer border border-blue2 hover:bg-blue2 hover:text-white rounded-lg focus:outline-none transition duration-500 ease-in-out">
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
    productImage: file(relativePath: { eq: "floor2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};
