exports.onCreateNode = ({ node }) => {
  const { fmImagesToRelative } = require("gatsby-remark-relative-images");
  fmImagesToRelative(node);
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allFile(filter: { sourceInstanceName: { eq: "realisations" }, extension: { eq: "md" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
              }
            }
            name
          }
        }
      }
    }
  `);

  data.projects.edges.forEach(({ node }) => {
    const projectName = node.childMarkdownRemark.frontmatter.title;
    const projectPath = node.name;
    actions.createPage({
      path: `realisations/${projectName}`,
      component: require.resolve(`./src/templates/project-gallery.js`),
      context: { projectPath: projectPath, projectName: projectName },
    });
  });
};
