import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import ProductSection from "../components/productSection";
import PropTypes from "prop-types";

export default function ServicesPage({ data }) {
  console.log(data.productPhotos);
  return (
    <Layout>
      <SEO keywords={[`service, vente, produits, projet, renovation, plancher`]} title="Services" />
      <Header
        title="Services"
        text="Nous offrons un large éventail de produits ainsi que le service d'installation de plancher."
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>
      <ProductSection
        title="Lattes de Vinyle"
        text={
          "Le revêtement de plancher en lattes de vinyle est un type innovateur de vinyle qui a l'allure du vrai bois et qui en donne la sensation."
        }
        reverseOrder={false}
        photo={data.vinyle.childImageSharp.fixed}
      ></ProductSection>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerBackground: file(relativePath: { eq: "floor.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vinyle: file(relativePath: { eq: "products/vinyle.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    creamique: file(relativePath: { eq: "products/creamique.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    flottant: file(relativePath: { eq: "products/flottant.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ingenerie: file(relativePath: { eq: "products/ingenerie.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linoleum: file(relativePath: { eq: "products/linoleum.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prelart: file(relativePath: { eq: "products/prelart.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tapis: file(relativePath: { eq: "products/tapis.webp" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

ServicesPage.propTypes = {
  data: PropTypes.object,
};
