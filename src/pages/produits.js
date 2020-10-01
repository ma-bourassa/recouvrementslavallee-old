import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import ProductSection from "../components/productSection";
import PropTypes from "prop-types";

export default function ProductsPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[
          `service, vente, produits, projet, renovation, plancher, latte de vinyle, vinyle, bois d'ingenierie, tapis, prelart, linoleum, marmoleum, plancher flottant`,
        ]}
        title="Services et produits"
      />
      <Header
        title="Produits"
        text="Nous offrons un large éventail de produits ainsi que le service d'installation de plancher."
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>
      <ProductSection
        title="Lattes de vinyle"
        paragraphes={[
          "Le revêtement de plancher en lattes de vinyle est un type innovateur de vinyle qui a l'allure du vrai bois et qui en donne la sensation.",
          "En outre, il est étanche, ce qui permet de l'installer dans des pièces propices à l'humidité, telle que les sous-sols et les salles d'eau, là où les bois francs et stratifiés sont à proscrire.",
          "De plus, le revêtement de sol en planches de vinyle est silencieux, résistant et chaud sous les pieds. C'est aussi l'un des choix les plus abordables sur le marché.",
          "Les lattes de vinyles tendent à dépasser en popularité le plancher de stratifié (plancher flottant).",
        ]}
        reverseOrder={false}
        photo={data.vinyle.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Planchers d'ingénierie"
        paragraphes={[
          "Puisque le bois d’ingénierie est fabriqué à partir de vrai bois, il est aussi beau que le bois franc massif!",
          "Il est composé de plusieurs couches de bois qui sont collées ensemble et couvertes d’une fine plaque de vrai bois franc en surface. Par sa conception, le bois ne se contractera pas à cause des changements de niveaux d’humidité et de température. Il ne s'ouvrira pas comme certains bois francs peuvent le faire.",
          "Tout comme pour les planchers de bois franc massif, celui d’ingénierie est offert dans une grande variété d’essences. Choisissez parmi les choix de largeur de planche, de texture, de lustre et bien plus!",
        ]}
        reverseOrder={true}
        photo={data.ingenerie.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Tapis"
        paragraphes={[
          "Le tapis est doux pour les pieds, il protège contre les glissements et il atténue le niveau de bruit grâce à ses propriétés d'absorption des chocs, et améliore l'isolation du plancher.",
          "Grâce à ses multiples styles, textures et couleurs, le tapis est un élément de décoration qui vous permet de créer l'ambiance désirée dans votre résidence.",
        ]}
        reverseOrder={false}
        photo={data.tapis.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Prélart"
        paragraphes={[
          "Le vinyle en rouleau, appelé « prélart », est souple, s’adapte aux courbes d’un sous-plancher imparfait et peut se faire sans joints apparents.",
          "Il est idéal pour être posé directement sur une variété de matières, dont le béton, le contreplaqué ou les revêtements de vinyle existants. Il est durable et supporte bien les différentes conditions de température et d’humidité.",
        ]}
        reverseOrder={true}
        photo={data.prelart.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Linoléum et marmoléum"
        paragraphes={[
          "Certifié LEED, le marmoléum est avantageux parce qu’il est écologique, durable, facile d’entretien, flexible, ignifuge et hygiénique, en plus de posséder des propriétés antistatiques et antimicrobiennes.",
          "Gymnases, centres récréatifs, salles de danse, salles de classe, corridors nécessitent souvent un revêtement de vinyle ou de linoléum. Ces planchers sont extrêmement résistants à l’abrasion.",
        ]}
        reverseOrder={false}
        photo={data.linoleum.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Planchers flottant"
        paragraphes={[
          "Abordables et faciles à entretenir, les planchers stratifiés ne sont pas affectés par la lumière. Ils offrent aussi une bonne résistance aux égratignures et aux impacts. ",
          "Le plancher en bois stratifié sera plus durable dans une pièce dépourvue d'humidité.",
        ]}
        reverseOrder={true}
        photo={data.flottant.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Céramiques"
        paragraphes={[
          "La céramique a plusieurs avantages. Elle est résistante et aura une longue durée de vie. Ce matériau nécessite peu d'entretien et réagit bien à l'eau.",
          "On peut l'utiliser pour les planchers, mais également comme recouvrement pour les murs et les dosserets de cuisine.",
        ]}
        reverseOrder={false}
        photo={data.ceramique.childImageSharp.fluid}
      ></ProductSection>
      <div className="mt-6 lg:mt-10"></div>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerBackground: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "floor4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vinyle: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "vinyle.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    ceramique: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "ceramique.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    flottant: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "flottant.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    ingenerie: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "ingenerie.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    prelart: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "prelart.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    tapis: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "tapis.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    linoleum: file(sourceInstanceName: { eq: "products" }, relativePath: { eq: "linoleum.webp" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

ProductsPage.propTypes = {
  data: PropTypes.object,
};
