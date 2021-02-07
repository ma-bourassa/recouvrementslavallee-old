import { useStaticQuery, graphql } from "gatsby";

export default function useSiteTitle() {
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
