var { GraphQLObjectType } = require("graphql");
const vehicle = require("./vehicle");
const post = require("./post");

var query = new GraphQLObjectType({
  name: "Query",
  fields: {
    vehicle,
    allPost: post.allPost,
  },
});

module.exports = query;
