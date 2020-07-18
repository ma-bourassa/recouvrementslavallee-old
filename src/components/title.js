import { useStaticQuery, graphql } from "gatsby";

function siteTitle() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata.title;
}

export default siteTitle;
