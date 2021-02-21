import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import SEO from "../components/Seo";

const IndexPageTemplate = ({ title, subtitle, mainpitch, features, specialties }) => {
  return (
    <>
      <SEO title={title} />
      <Header title={title} text={subtitle}>
        <Link to="/contactez-nous/">
          <button className="mt-4 btn btn-blue text-xl rounded-lg">Soumission</button>
        </Link>
      </Header>

      <section className="container mx-auto px-6 pb-6 lg:pb-12 lg:max-w-5xl leading-relaxed">
        <h2 className="text-xl lg:text-3xl font-semibold text-center">{mainpitch.title}</h2>
        <hr className="border-blue-700 border-t-2 mx-auto my-6 w-full" />
        <div className="text-center lg:text-lg">{mainpitch.description}</div>
      </section>

      <section className="bg-gray-100 ">
        <div className="container mx-auto px-6 py-6 lg:py-12 leading-relaxed">
          <h2 className=" text-xl lg:text-2xl font-semibold text-center ">{features.title}</h2>
          <hr className="border-blue-700 border-t-2 my-6 lg:max-w-lg mx-auto" />

          <div className="flex flex-col lg:flex-row ">
            <Feature title={features.feature1.title} description={features.feature1.description}></Feature>
            <Feature title={features.feature2.title} description={features.feature2.description}></Feature>
            <Feature title={features.feature3.title} description={features.feature3.description}></Feature>
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
            <Img className="rounded" fluid={specialties.image.childImageSharp.fluid} />
          </div>
          <div className="lg:w-1/2 lg:mx-12 text-center lg:text-left">
            <h2 className="text-2xl font-semibold mb-6 text-center">{specialties.title}</h2>
            <hr className="border-blue-700 border-t-2 my-6 lg:max-w-xs mx-auto" />

            <div className="justify-center text-center flex">
              <ul className="text-xl font-medium space-y-1">
                {specialties.specialties.map((specialty, i) => (
                  <li key={i}>{specialty}</li>
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
    </>
  );
};

IndexPageTemplate.propTypes = {
  features: PropTypes.object,
  mainpitch: PropTypes.object,
  specialties: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        mainpitch={frontmatter.mainpitch}
        features={frontmatter.features}
        specialties={frontmatter.specialties}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        mainpitch {
          title
          description
        }
        features {
          title
          feature3 {
            description
            title
          }
          feature2 {
            title
            description
          }
          feature1 {
            title
            description
          }
        }
        specialties {
          title
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          specialties
        }
      }
    }
  }
`;
