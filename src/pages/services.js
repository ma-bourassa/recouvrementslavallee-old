import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import ProductSection from "../components/productSection";
import PropTypes from "prop-types";

export default function ServicesPage({ data }) {
  return (
    <Layout>
      <SEO keywords={[`service, vente, produits, projet, renovation, plancher`]} title="Services et produits" />
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
        distributor={["beaulieu"]}
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
          "Le tapis est doux pour les pieds, il protège contre les glissements et il atténue le niveau de bruit grâce à ses propriétés d'absorbotion des chocs, et améliore l'isolation du plancher.",
          "Grâce à ses multiples styles, textures et couleurs, le tapis est un élément de décoration qui vous permet de créer l'ambiance désirée dans votre résidence.",
        ]}
        reverseOrder={false}
        photo={data.tapis.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Céramiques"
        paragraphes={[
          "La céramique a plusieurs avantages. Elle est résistante et aura une longue durée de vie. Ce matériau nécessite peu d'entretien et réagi bien à l'eau.",
          "On peut l'utiliser pour les planchers, mais également comme recouvrement pour les murs et les dosserets de cuisine.",
        ]}
        reverseOrder={true}
        photo={data.ceramique.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Prélart"
        paragraphes={[
          "Le vinyle en rouleau, appelé « prélart », est souple, s’adapte aux courbes d’un sous-plancher imparfait et peut se faire sans joints apparents.",
          "Il est idéal pour être posé directement sur une variété de matières dont le béton, le contreplaqué ou les revêtements de vinyle existants. Il est durable et supporte bien les différentes conditions de température et d’humidité.",
        ]}
        reverseOrder={false}
        photo={data.prelart.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Linoléum et Marmoléum"
        paragraphes={[
          "Certifié LEED, le marmoléum est avantageux parce qu’il est écologique, durable, facile d’entretien, flexible, ignifuge et hygiénique, en plus de posséder des propriétés antistatiques et antimicrobiennes.",
          "Gymnases, centres récréatifs, salles de danse, salles de classe, corridors nécessitent souvent un revêtement de vinyle ou de linoléum. Ces planchers sont extrêmement résistants à l’abrasion.",
        ]}
        reverseOrder={true}
        photo={data.linoleum.childImageSharp.fluid}
      ></ProductSection>
      <ProductSection
        title="Planchers Flottant"
        paragraphes={[
          "Abordables et faciles à entretenir, les planchers stratifiés ne sont pas affectés par la lumière. Ils offrent aussi une bonne résistance aux égratignures et aux impacts. ",
          "Le plancher en bois stratifié sera plus durable dans une pièce dépourvue d'humidité.",
        ]}
        reverseOrder={false}
        photo={data.flottant.childImageSharp.fluid}
      ></ProductSection>
      <div className="mt-6 md:mt-10"></div>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerBackground: file(relativePath: { eq: "floor4.jpg" }) {
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
    ceramique: file(relativePath: { eq: "products/ceramique.webp" }) {
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
    linoleum: file(relativePath: { eq: "products/linoleum.webp" }) {
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
