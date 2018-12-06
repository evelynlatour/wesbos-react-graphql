const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')

// Creates the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql', // tell it where to get the types
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }), // expose the db to all the requests
  })
}

module.exports = createServer
