import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import ProductSection from "../components/ProductSection";
import SEO from "../components/Seo";

const ProductsPageTemplate = ({ title, subtitle, products }) => {
  return (
    <>
      <SEO
        keywords={[`lattes de vinyle`, `tapis`, `bois d'ingénierie`, `prélart`, `laminé`, `linoléum`]}
        title={title}
        description="Nous offrons un large éventail de recouvrement de sol ainsi que le service d'installation de plancher. Lattes de vinyle, tapis, bois d'ingénierie, prélart, laminé, linoléum, céramique."
      />
      <Header title={title} text={subtitle} />
      {products.map((product, i) => (
        <ProductSection
          key={i}
          title={product.title}
          description={product.description}
          reverseOrder={!!(i % 2)}
          image={product.image}
          linksTitle={product.linksTitle}
          links={product.links}
        />
      ))}
      <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-row-reverse">
        <AnchorLink
          to="/produits/#head"
          stripHash
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
        >
          <FontAwesomeIcon icon="angle-up" color="grey" size="lg" />
        </AnchorLink>
      </div>
    </>
  );
};

ProductsPageTemplate.propTypes = {
  products: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

const Productpage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductsPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        products={frontmatter.products}
      ></ProductsPageTemplate>
    </Layout>
  );
};

Productpage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default Productpage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "products-page" } }) {
      frontmatter {
        title
        subtitle
        products {
          title
          description
          links {
            name
            url
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  }
`;
