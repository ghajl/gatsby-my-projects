const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions;
  // createRedirect({
  //   fromPath: `/`,
  //   toPath: `/projects`,
  //   redirectInBrowser: true,
  //   isPermanent: true
  // });
  // createRedirect({
  //   fromPath: `/projects`,
  //   toPath: `/projects/show-all`,
  //   redirectInBrowser: true,
  //   isPermanent: true
  // });
};

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type mongodbProjectsProjects implements Node {
      Keywords: [mongodbProjectsKeywords] @link(by: "mongodb_id")
      Image: ImageSharp @link(by: "sizes.originalName")
    }`
  ];
  createTypes(typeDefs);
};
