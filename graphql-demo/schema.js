var {
  GraphQLString,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
} = require("graphql");
const vehicleType = require("./types/vehicle");
const postType = require("./types/post");
const query = require("./queries");

var mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addVehicle: {
      type: vehicleType.Car,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newUser = { ...args, id: mockData.length + 1 };
        mockData.push(newUser);
        return newUser;
      },
    },
  }),
});

var s = new GraphQLSchema({
  types: [vehicleType.Bike, vehicleType.Car, postType.Author],
  query,
  mutation,
});

module.exports = s;
