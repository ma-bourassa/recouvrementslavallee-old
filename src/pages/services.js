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
        paragraphes={[
          "Le revêtement de plancher en lattes de vinyle est un type innovateur de vinyle qui a l'allure du vrai bois et qui en donne la sensation.",
          "En outre, il est étanche, ce qui permet de l'installer dans des pièces propices à l'humidité, tel que les sous-sols et les salles d'eau, là où les bois franc et stratifiés sont à proscrire.",
          "De plus, le revêtement de sol en planches de vinyle est silencieux, résistant et chaud sous les pieds. C'est aussi l'un des choix les plus abordables sur le marché.",
          "Les lattes de vinyles tendent à dépasser en popularité le plancher de stratifié (plancher flottant).",
        ]}
        reverseOrder={false}
        photo={data.vinyle.childImageSharp.fluid}
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
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    creamique: file(relativePath: { eq: "products/creamique.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    flottant: file(relativePath: { eq: "products/flottant.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    ingenerie: file(relativePath: { eq: "products/ingenerie.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    linoleum: file(relativePath: { eq: "products/linoleum.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    prelart: file(relativePath: { eq: "products/prelart.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    tapis: file(relativePath: { eq: "products/tapis.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

ServicesPage.propTypes = {
  data: PropTypes.object,
};
