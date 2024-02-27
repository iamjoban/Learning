var { GraphQLList, GraphQLInt, GraphQLBoolean } = require("graphql");
const vehicleType = require("../../types/vehicle");

const mockData = [
  {
    id: 1,
    name: "Car",
    type: 1,
    convertible: true,
  },
  {
    id: 2,
    name: "Bike",
    type: 2,
    hasSideStand: true,
  },
];

const user = {
  type: new GraphQLList(vehicleType.Vehicle),
  args: {
    includeAge: { type: GraphQLBoolean },
    type: { type: GraphQLInt },
  },
  resolve(parent, args) {
    return new Promise((resolve, reject) => {
      console.log(parent, args);
      resolve(mockData.filter((x) => x.type === args.type));
    });
  },
};

module.exports = user;
