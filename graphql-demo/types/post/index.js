var {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInterfaceType,
} = require("graphql");

var Author = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

var Post = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    author: {
      type: Author,
      //Add this resolver only if you want to make an API call to get field data
      // or wanted to do some modification
      resolve: (post, _, ctx) => {
        // Make API call to get author data
        return ctx.authLoader.load(post.author);
      },
    },
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    time: { type: GraphQLString },
  }),
});

module.exports = {
  Post,
  Author,
};
