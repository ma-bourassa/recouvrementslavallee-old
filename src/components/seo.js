import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ siteMetadata, title, description, meta, keywords }) => {
  const metaDescription = description || siteMetadata.description;
  const siteUrl = siteMetadata.siteUrl;
  const image = siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang: "fr",
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
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
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
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
              "@type": "City",
              "name": "Saint-Jean-sur-Richelieu",
              "sameAs": "https://en.wikipedia.org/wiki/Saint-Jean-sur-Richelieu"
            },
            {
              "@type": "City",
              "name": "Boucherville",
              "sameAs": "https://en.wikipedia.org/wiki/Boucherville"
            },
            {
              "@type": "City",
              "name": "Brossard",
              "sameAs": "https://en.wikipedia.org/wiki/Brossard"
            },
            {
              "@type": "City",
              "name": "Châteauguay",
              "sameAs": "https://en.wikipedia.org/wiki/Ch%C3%A2teauguay"
            },
            {
              "@type": "City",
              "name": "Longueuil",
              "sameAs": "https://en.wikipedia.org/wiki/Longueuil"
            },
            {
              "@type": "City",
              "name": "Mont-Saint-Hilaire",
              "sameAs": "https://en.wikipedia.org/wiki/Mont-Saint-Hilaire,_Quebec"
            },
            {
              "@type": "City",
              "name": "Saint-Hyacinthe",
              "sameAs": "https://en.wikipedia.org/wiki/Saint-Hyacinthe,_Quebec"
            },
            {
              "@type": "City",
              "name": "Granby",
              "sameAs": "https://en.wikipedia.org/wiki/Granby,_Quebec"
            },
            {
              "@type": "City",
              "name": "Chambly",
              "sameAs": "https://en.wikipedia.org/wiki/Chambly,_Quebec"
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
          "name": "${siteMetadata.title}",
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
};

SEO.defaultProps = {
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
  siteMetadata: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
};

const SeoWrapper = (props) => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => <SEO siteMetadata={data.site.siteMetadata} {...props} />}
    />
  );
};
export default SeoWrapper;
