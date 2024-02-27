var { GraphQLList, GraphQLInt, GraphQLBoolean } = require("graphql");
const postType = require("../../types/post");
const mockData = require("../../mock/post");
const getAuthLoader = require("../../data-loaders/author");

const allPost = {
  type: new GraphQLList(postType.Post),
  args: {},
  resolve(parent, args, ctx, info) {
    ctx.authLoader = getAuthLoader();
    return new Promise((resolve, reject) => {
      resolve(mockData.post);
    });
  },
};

module.exports = { allPost };
