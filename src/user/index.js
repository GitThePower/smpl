const { handleGet, handlePost, handlePut, handleDelete } = require('../utils/ddbCrud');
const { schema } = require('./schema');

exports.handler = async (event) => {
  const httpMethod = event.httpMethod;

  if (httpMethod === 'GET') {
    return await handleGet(event);
  } else if (httpMethod === 'POST') {
    return await handlePost(event, schema);
  } else if (httpMethod === 'PUT') {
    return await handlePut(event, schema);
  } else if (httpMethod === 'DELETE') {
    return await handleDelete(event);
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }
};
