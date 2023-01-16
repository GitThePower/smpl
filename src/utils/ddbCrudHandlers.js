const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

let DynamoDB = null;

/**
 * GET handler for retrieving an item from DynamoDB
 * @param {Object} event HTTP event
 * @returns {Object} response
 */
const handleGet = async (event) => {
  const { id: itemId } = event.pathParameters;

  if (!itemId) {
    return {
      statusCode: 400,
      body: 'Bad request: No id given in path parameters'
    };
  }

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { S: itemId }
    }
  };

  try {
    const ddb = DynamoDB ? DynamoDB : new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const data = await ddb.getItem(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: 'Could not retrieve the item: ' + error
    };
  }
};

/**
 * POST handler for creating an item in DynamoDB
 * @param {Object} event HTTP event
 * @param {Object} schema Joi schema
 * @returns {Object} response
 */
const handlePost = async (event, schema) => {
  const { value, error } = schema.validate(JSON.parse(event.body));

  if (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    };
  }

  const obj = Object.keys(value).reduce((prev, curr) => {
    prev[curr] = { S: value[curr] };
    return prev;
  }, {});

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      id: { S: uuidv4() },
      ...obj
    }
  };

  try {
    const ddb = DynamoDB ? DynamoDB : new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    await ddb.putItem(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: 'Could not create the item: ' + error
    };
  }
};

/**
 * PUT handler for updating an item in DynamoDB
 * @param {Object} event HTTP event
 * @param {Object} schema Joi schema
 * @returns {Object} response
 */
const handlePut = async (event, schema) => {
  const { id: itemId } = event.pathParameters;

  if (!itemId) {
    return {
      statusCode: 400,
      body: 'Bad request: No id given in path parameters'
    };
  }

  const { value, error } = schema.validate(JSON.parse(event.body));

  if (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    };
  }

  let UpdateExpression  = 'SET';
  Object.keys(value).map((key) => {
    UpdateExpression = UpdateExpression + ` ${key}:=${value[key]},`;
  });
  UpdateExpression = UpdateExpression.slice(0, -1);

  const ExpressionAttributeValues = Object.keys(value).reduce((prev, curr) => {
    prev[`:${curr}`] = { S: value[curr] };
    return prev;
  }, {});
  
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { S: itemId }
    },
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW'
  };
  
  try {
    const ddb = DynamoDB ? DynamoDB : new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const data = await ddb.updateItem(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Attributes)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: 'Could not update the item: ' + error
    };
  }
}

// Handles a DELETE request
const handleDelete = async (event) => {
  const { id: itemId } = event.pathParameters;

  if (!itemId) {
    return {
      statusCode: 400,
      body: 'Bad request: No id given in path parameters'
    };
  }

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { S: itemId }
    }
  };

  try {
    const ddb = DynamoDB ? DynamoDB : new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    await ddb.deleteItem(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ id: itemId, message: 'Item deleted successfully' })
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: 'Could not delete the item: ' + error
    };
  }
};

module.exports = {
  handleDelete,
  handleGet,
  handlePost,
  handlePut
}
