const AWS = require('aws-sdk');
const { schema } = require('./userSchema');

const DynamoDB = new AWS.DynamoDB();

const updateDynamoDB = async (id, value) => {
  let UpdateExpression  = 'SET';
  Object.keys(value).map((key) => {
    UpdateExpression = UpdateExpression + ` ${key}:=${value[key]},`;
  });
  UpdateExpression = UpdateExpression.slice(0, -1);

  const updateItemPromise = await DynamoDB.updateItem({
    Key: {
      id: { S: id }
    },
    TableName: process.env.TABLE_NAME,
    UpdateExpression
  }).promise();
  return updateItemPromise;
};

exports.handler = async (event) => {
  const response = {
    headers: {
      'Content-Type': 'application/json'
    },
    isBase64Encoded: false
  };

  const { id } = event.pathParameters;
  if (!id) {
    response.body = 'no id in path parameters';
    response.statusCode = 400;
    return response;
  }

  const { value, error } = schema.validate(event.body);
  if (error) {
    response.body = JSON.stringify(error);
    response.statusCode = 400;
    return response;
  }

  try {
    const updateItemResult = await updateDynamoDB(id, value);
    console.log(updateItemResult);
  } catch (e) {
    response.body = JSON.stringify(e);
    response.statusCode = 500;
    return response;
  }

  response.body = 'success';
  response.statusCode = 200;
  return response;
};
