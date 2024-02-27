var {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLInterfaceType,
} = require("graphql");

var Vehicle = new GraphQLInterfaceType({
  name: "Vehicle",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  resolveType: (source, ctx, aa, info) => {
    const { type } = aa.variableValues;
    if (type == 1) {
      return Car;
    }
    return Bike;
  },
});

var Car = new GraphQLObjectType({
  name: "Car",
  interfaces: [Vehicle],
  fields: () => ({
    id: { type: GraphQLString },
    name: {
      type: GraphQLString,
      //Add this resolver only if you want to make an API call to get field data
      // or wanted to do some modification
      resolve: (car) => {
        return car.name;
      },
    },
    convertible: { type: GraphQLBoolean },
  }),
});

var Bike = new GraphQLObjectType({
  name: "Bike",
  interfaces: [Vehicle],
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    hasSideStand: { type: GraphQLBoolean },
  }),
});

module.exports = {
  Car,
  Bike,
  Vehicle,
};
