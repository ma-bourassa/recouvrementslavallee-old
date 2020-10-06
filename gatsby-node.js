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
      projects: allDirectory(filter: { sourceInstanceName: { eq: "realisations" }, relativePath: { ne: "" } }) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `);

  data.projects.edges.forEach((edge) => {
    const projectName = edge.node.relativePath;
    actions.createPage({
      path: `realisations/${projectName}`,
      component: require.resolve(`./src/templates/project-gallery.js`),
      context: { projectPath: `/${projectName}/`, projectName: projectName },
    });
  });
};
