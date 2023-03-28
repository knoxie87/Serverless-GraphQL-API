const { ApolloServer } = require('apollo-server-lambda');
const { DocDB } = require('aws-sdk');
const { resolvers } = require('./src/resolvers');
const { typeDefs } = require('./src/schema');



const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

// The handler.js file contains your function code. The function definition in serverless.yml 
// will point to this handler.js file and the function exported here.
//temp-andrew-graphql
//partition key id
//ap-southeast-2