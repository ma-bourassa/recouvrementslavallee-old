import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ lang, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
        }
      }
    }
  `);

  const pageTitle = title || site.siteMetadata.title;
  const metaDescription = site.siteMetadata.description;
  const url = site.siteMetadata.url;
  const image = site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: "google-site-verification",
          content: "a1O4YzwdJ_WkiMzegdOZjdDXUMsDsfqBfzpHAchsf8w",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: image,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
      title={pageTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  keywords: ["recouvrements de sols", "recouvrement de sol", "plancher", "lattes de vinyle", "tapis", "lavallee"],
  meta: [],
};

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
