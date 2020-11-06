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
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "${siteUrl}",
          "url": "${siteUrl}",
          "logo": "https://recouvrementslavallee.com/logo.jpg",
          "additionalType": "http://www.productontology.org/id/Flooring",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "166 rang Saint-André",
            "addressLocality": "Saint-Bernard-de-Lacolle",
            "addressRegion": "Québec",
            "postalCode": "J0J 1V0",
            "addressCountry": "CA"
          },
          "areaServed": [
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.259811,
                  "longitude": -73.279484
              },
              "geoRadius": 30000
            },
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.486111,
                  "longitude": -73.210746
              },
              "geoRadius": 25000
            }
          ],          
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.0687715,
            "longitude": -73.4361446
          },
          "image" : [
            "https://recouvrementslavallee.com/logo.jpg",
            "https://recouvrementslavallee.com/static/ae0506841fc1196862b4a18df41b2472/61d2c/ra19_resultat.jpg",
            "https://recouvrementslavallee.com/static/225084db706ab7a60829763f806c9de9/61d2c/ra01_resultat.jpg",
            "https://recouvrementslavallee.com/static/1dae7181915023c463a633008dbc8c99/61d2c/ra18_resultat.jpg",
            "https://recouvrementslavallee.com/static/f346133e7eff88a4da3c04692b466e4e/b89cb/ra13_resultat.jpg",
            "https://recouvrementslavallee.com/static/037d8d188cc7162a6263ec7ff0244b68/b31d1/ra20_resultat.jpg",
            "https://recouvrementslavallee.com/static/ae0506841fc1196862b4a18df41b2472/61d2c/ra19_resultat.jpg"
          ],
          "name": "${site.siteMetadata.title}",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "priceRange": "$$",
          "telephone": "+14503573127"
        }
        `}
      </script>
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
