
const { gql } = require('apollo-server-lambda');

module.exports.typeDefs = gql`

  type Query {
    getConfiguration(id: String): [Configuration]
  }

  type Mutation{
    addConfiguration(id:String, newOrder: Int, col: Int, colSpan: Int, rowSpan: Int): Configuration
    updateConfiguration(id:String, newOrder:Int, col: Int, colSpan: Int, rowSpan: Int): Configuration
    setConfiguration(positions: [ConfigurationInput]): String
    deleteConfiguration(id:String): Configuration
    storeConfiguration(positions:[ConfigurationInput]):Configuration
  }

  input ConfigurationInput {
    id: String
    col: Int
    newOrder:Int
    colSpan: Int
    rowSpan: Int
  }

  type Configuration {
    id: String
    newOrder:Int
    col: Int
    colSpan: Int
    rowSpan: Int
  }
`;
