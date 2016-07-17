var graphql = require('graphql');
var goldbergs = require('./data');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var goldbergType = new GraphQLObjectType({
  name: 'Goldberg',
  fields: {
    character: {
      type: GraphQLString,
    },
    actor: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    traits: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLInt,
    },
  },
});

var queryType = new GraphQLObjectType({
  name: "query",
  fields: {
    goldberg: {
      type: goldbergType,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (_, args) => getGoldberg(args.id),
    },
  },
});

function getGoldberg(id) {
  return goldbergs[id]
}

module.exports = schema = new GraphQLSchema({
  query: queryType,
});
