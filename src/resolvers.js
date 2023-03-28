const {getConfiguration} =  require("./query/configuration")
const {addConfiguration, deleteConfiguration, updateConfiguration} = require ("./mutation/configuration")

module.exports.resolvers = {
  Query: {
    getConfiguration: async (_,args) => {
      return await getConfiguration(_,args)
    },
  },
    Mutation: {
      addConfiguration: async (_,args) => {
        return await addConfiguration(_,args);
      },
      deleteConfiguration: async (_,args) => {
        return await deleteConfiguration(_,args)
      },
      updateConfiguration: async (_,args) => {
        return await updateConfiguration(_,args)
      }
    }
  }
