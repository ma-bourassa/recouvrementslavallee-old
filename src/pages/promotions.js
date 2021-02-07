import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SEO from "../components/Seo";

export const PromotionsPageTemplate = ({ title, subtitle, emptyPromo, promotions }) => {
  return (
    <>
      <SEO
        keywords={[title]}
        title={title}
        description={
          "Profitez de nos promotions courantes et rabais pour une durée limitée. Consultez cette section régulièrement pour connaître toutes nos offres spéciales."
        }
      />
      <Header title={title} text={subtitle} />

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-5xl flex flex-col p-12 mb-6">
          {promotions.map((promotion, i) => (
            <div className="flex flex-col lg:flex-row bg-0 p-8 rounded-lg shadow-2xl my-8 bg-white" key={i}>
              <PreviewCompatibleImage imageInfo={promotion.image} classes="w-full lg:w-1/3"></PreviewCompatibleImage>
              <div className="w-full lg:w-2/3 pt-4 lg:pt-0 lg:pl-16 flex flex-col space-y-8">
                <h3 className="text-3xl font-bold text-center">{promotion.title}</h3>
                <p className="text-lg font-medium text-center">{promotion.description}</p>
                <div className="text-center">
                  <a
                    className="border border-grey text-center font-semibold py-2 px-3 rounded hover:bg-grey hover:text-white transition duration-500"
                    href={promotion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir cette promotion
                  </a>
                </div>
              </div>
            </div>
          ))}
          {promotions.length === 0 && <div className="text-center text-xl font-semibold">{emptyPromo}</div>}
        </div>
      </section>
    </>
  );
};

PromotionsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  promotions: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  emptyPromo: PropTypes.string,
};

const PromotionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const promotions = data.markdownRemark ? data.markdownRemark.frontmatter.promotions : [];

  return (
    <Layout>
      <PromotionsPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        emptyPromo={frontmatter.emptyPromo}
        promotions={promotions}
      ></PromotionsPageTemplate>
    </Layout>
  );
};

PromotionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PromotionsPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "promotions-page" } }) {
      frontmatter {
        title
        subtitle
        emptyPromo
        promotions {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 300) {
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

PromotionsPageTemplate.propTypes = {
  data: PropTypes.object,
};
