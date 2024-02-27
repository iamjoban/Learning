var express = require("express");
var { graphqlHTTP } = require("express-graphql");
const s = require("./schema");
const getAuthLoader = require("./data-loaders/author");

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: s,
    // rootValue: root,
    graphiql: true,
    context: {
      name: "context",
      // authLoader: getAuthLoader(),
    },
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
