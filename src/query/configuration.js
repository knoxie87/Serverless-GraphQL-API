const AWS = require('aws-sdk')
AWS.config.update({
  region: 'ap-southeast-2'
});
const Ddb = new AWS.DynamoDB.DocumentClient()

module.exports.getConfiguration = async(_,args) => {
    console.log('args', args)
    console.log('context', _)
    try{
      const params = {
        TableName:"temp-andrew-graphql",
        KeyConditionExpression: "id > 0",
      };
        const result= await Ddb.scan(params).promise()
        console.log(result)
        return result.Items;
    }catch(err){
      console.log('err', err)
      throw Error(err)
    }
}
