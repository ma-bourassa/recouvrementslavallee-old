import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Accueil" />
      <BackgroundImage fluid={data.headerImage.childImageSharp.fluid}>
        <section className="py-8 lg:py-16 text-center text-white">
          <div className="bg-grey py-4 bg-opacity-50">
            <div>
              <h1 className="font-bold text-2xl lg:text-5xl">Vente et installation de plancher</h1>
              <hr className="hr" />
              <h4 className="lg:max-w-3xl lg:mx-auto text-lg lg:text-2xl">
                Contactez nous pour une soumission gratuite
              </h4>
              <Link to="/contact/">
                <button className="mt-6 btn btn-blue text-xl rounded-full">Soumission</button>
              </Link>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <section className="container mx-auto px-6 py-6 lg:py-12 lg:max-w-5xl leading-relaxed">
        <h3 className="text-xl lg:text-3xl font-semibold text-center">Vos experts en pose de plancher</h3>
        <hr className="border-blue2 border-t-2 mx-auto my-6 w-full" />
        <div className="font-light text-center lg:text-lg">
          Chers clients, nous sommes ravis de constater votre intérêt pour notre entreprise familiale qui se spécialise
          dans la pose et la vente de revêtements de sols souples. Sachez que nous sommes une compagnie sérieuse et
          établie qui opère depuis 1985 sur la Rive Sud de Montréal.
        </div>
      </section>

      <section className="bg-gray-200 ">
        <div className="container mx-auto flex flex-col lg:flex-row px-6 py-6 lg:py-12 leading-relaxed items-center">
          <div className="lg:w-1/3 lg:mx-12">
            <hr className="border-blue2 border-t-2 my-4" />
            <h4 className="text-xl lg:text-2xl font-semibold text-center">
              Pourquoi choisir notre entreprise pour vos travaux&nbsp;?
            </h4>
            <hr className="border-blue2 border-t-2 my-4" />
          </div>
          <div className="lg:w-1/3 font-light text-justify mx-12 ">
            <p>
              Chez nous, il n&apos;y a pas de demie-mesure, car la qualité et la finition sont capitales. Notre service
              est clé en main et 100% adapté à vos souhaits!
            </p>
            <br />
            <p>
              Avec nous, vous aurez l&apos;occasion d&apos;acheter vos matériaux de recouvrement de sols au meilleur
              prix et d&apos;avoir la meilleure équipe de pose sur le marché.
            </p>
          </div>
          <div className="lg:w-1/3 font-light text-justify mx-12">
            <p>
              Comme toute compagnie professionnelle incorporée, nous avons une assurance afin de vous protéger de tout
              imprévus liés à notre passage ou à toutes erreurs de construction.
            </p>
            <br />
            <p>N&apos;hésitez pas à nous soumettre vos projets pour une estimation gratuite!</p>
            <Link to="/contact/">
              <button className="mt-6 py-2 px-4 font-semibold inline-block shadow-md cursor-pointer text-lg border border-blue2 hover:bg-blue2 hover:text-white rounded-full focus:outline-none">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col lg:flex-row px-6 py-6 lg:py-12 leading-relaxed">
          <div className="hidden lg:block w-1/3">
            <Img fluid={data.productImage.childImageSharp.fluid}></Img>
          </div>
          <div className="w-2/3 font-light mx-12 ">
            <h4 className="text-2xl text-center lg:text-left font-semibold mb-4">Nos spécialitées</h4>
            <p className="text-justify lg:text-left font-light">
              Nous pouvons poser pratiquement tous les types de revêtements de sols. Nos spécialités sont toutefois les
              lattes de vinyle, les tapis, les carreaux de tapis, le linoléum, les prélarts et les bois d’ingénieries.
            </p>
            <Link to="/produits/">
              <button className="mt-6 py-2 px-4 font-semibold inline-block shadow-md cursor-pointer border border-blue2 hover:bg-blue2 hover:text-white rounded-full focus:outline-none">
                Plus d&apos;informations
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "floor4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    productImage: file(relativePath: { eq: "floor1.jpg" }) {
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
