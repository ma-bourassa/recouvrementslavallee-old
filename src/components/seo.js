import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.url;
  const image = site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          content: title,
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
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  keywords: [
    "recouvrement de sol",
    "installation de plancher rive-sud",
    "installation de plancher de vinyle",
    "installation de plancher de vinyle rive-sud",
    "installation de tapis",
    "installation de tapis rive-sud",
    "pose de plancher rive-sud",
    "pose de plancher de vinyle",
    "pose de plancher de vinyle rive-sud",
    "pose de tapis",
    "pose de tapis rive-sud",
  ],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
