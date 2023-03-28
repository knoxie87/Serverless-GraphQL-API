const AWS = require('aws-sdk')
AWS.config.update({
  region: 'ap-southeast-2'
});
const Ddb = new AWS.DynamoDB.DocumentClient()

module.exports.addConfiguration = async(_,args) => {
    console.log('args', args)
    console.log('context', _)
    const {id, newOrder, col, colSpan , rowSpan} = args;
    const configurationObj={
      id,
      newOrder,
      col,
      colSpan,
      rowSpan
    }

    try{
        const dynobj ={
          TableName: "temp-andrew-graphql",
          Item: configurationObj
        }
        const result= await Ddb.put(dynobj).promise()
        console.log('result', result)
        return configurationObj

    }catch(err){
      console.log('err', err)
      throw Error(err)
    }
  }

  module.exports.deleteConfiguration = async(_,args) => {
    console.log('args', args)
    console.log('context', _)

    const {id} = args;
    
    try{
      const params = {
        TableName:"temp-andrew-graphql",
        Key:{
            "id": id,
          },
      };
      const result= await Ddb.delete(params).promise()
      console.log('result', result)
      return args

    }catch(err){

      console.log('err', err)
      throw Error(err)
    }
  }

  module.exports.updateConfiguration = async(_,args) => {
    console.log('args', args)
    console.log('context', _)
  
    const {id, newOrder, col, colSpan , rowSpan} = args;
  
    try{
      const params = {
        TableName:"temp-andrew-graphql",
        Key:{
            "id": id,
        },
        UpdateExpression: "set newOrder =:o, col = :r, colSpan=:p, rowSpan=:a",
        ExpressionAttributeValues:{
            ":o":newOrder,
            ":r":col,
            ":p":colSpan,
            ":a":rowSpan,
        },
        ReturnValues:"UPDATED_NEW"
    };
        const result= await Ddb.update(params).promise()
        console.log('result', result)
        return result
  
    }catch(err){
  
      console.log('err', err)
      throw Error(err)
    }
  }
  