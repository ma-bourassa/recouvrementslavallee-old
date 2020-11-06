import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import JsonLd from "./json-ld";

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
  const siteUrl = site.siteMetadata.siteUrl;
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
          content: siteUrl,
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
    >
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": siteUrl,
          url: siteUrl,
          logo: "https://recouvrementslavallee.com/logo.jpg",
          additionalType: "http://www.productontology.org/id/Flooring",
          address: {
            "@type": "PostalAddress",
            streetAddress: "166 rang Saint-André",
            addressLocality: "Saint-Bernard-de-Lacolle",
            addressRegion: "Québec",
            postalCode: "J0J 1V0",
            addressCountry: "CA",
          },
          areaServed: "Montérégie",
          name: site.siteMetadata.title,
          geo: {
            "@type": "GeoCoordinates",
            latitude: 45.0687715,
            longitude: -73.4361446,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          telephone: "+14503573127",
        }}
      </JsonLd>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `fr`,
  keywords: [
    "recouvrement de sol",
    "vente et installation de plancher",
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
