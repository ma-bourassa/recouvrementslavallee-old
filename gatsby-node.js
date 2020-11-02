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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter @infer {
      title: String
      photos: [File!]! @fileByRelativePath
      description: String
      photo: File! @fileByRelativePath
      url: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allMarkdownRemark(filter: { fields: { sourceName: { eq: "realisations" } } }) {
        nodes {
          frontmatter {
            title
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  data.projects.nodes.forEach((node) => {
    const projectName = node.frontmatter.title;
    const projectSlug = node.parent.name;
    actions.createPage({
      path: `realisations/${projectSlug}`,
      component: require.resolve(`./src/templates/project-gallery.js`),
      context: { projectName: projectName },
    });
  });
};
