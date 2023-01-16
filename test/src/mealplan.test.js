const AWS = require('aws-sdk-mock');
const { v4: uuidv4 } = require('uuid');
const lambda = require('../../src/mealplan');
const { schemaExample } = require('../../src/mealplan/schema');
const { valToDdbVal } = require('../../src/utils/ddbCrud');

process.env.TABLE_NAME = 'someTable';

describe('mealplan accessor function ', () => {
  const ddbItemId = uuidv4();
  const ddbItemAttributes = schemaExample;
  const obj = Object.keys(ddbItemAttributes).reduce((prev, curr) => {
    prev[curr] = valToDdbVal(ddbItemAttributes[curr]);
    return prev;
  }, {});
  const ddbItem = {
    id: { S: ddbItemId },
    ...obj
  };

  afterEach(() => {
    AWS.restore();
  });

  describe('handles GET', () => {
    test('no id given', async () => {
      AWS.mock('DynamoDB', 'getItem', (params, callback) => {
        callback(null, {
          Item: ddbItem
        });
      });

      const response = await lambda.handler({
        httpMethod: 'GET',
        pathParameters: {}
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual('Bad request: No id given in path parameters');
    });

    test('DynamoDB error', async () => {
      const errMsg = 'an error occurred';
      AWS.mock('DynamoDB', 'getItem', (params, callback) => {
        callback(errMsg, null);
      });

      const response = await lambda.handler({
        httpMethod: 'GET',
        pathParameters: {
          id: ddbItemId
        }
      });
      expect(response.statusCode).toEqual(500);
      expect(response.body).toEqual(`Could not retrieve the item: ${errMsg}`);
    });

    test('success', async () => {
      AWS.mock('DynamoDB', 'getItem', (params, callback) => {
        callback(null, {
          Item: ddbItem
        });
      });

      const response = await lambda.handler({
        httpMethod: 'GET',
        pathParameters: {
          id: ddbItemId
        }
      });
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(JSON.stringify(ddbItem));
    });
  });

  describe('handles POST', () => {
    test('invalid object', async () => {
      AWS.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(null, {});
      });
    
      const response = await lambda.handler({
        httpMethod: 'POST',
        body: JSON.stringify({})
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body).toBeTruthy();
    });

    test('DynamoDB error', async () => {
      const errMsg = 'an error occurred';
      AWS.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(errMsg, null);
      });
    
      const response = await lambda.handler({
        httpMethod: 'POST',
        body: JSON.stringify(ddbItemAttributes)
      });
      expect(response.statusCode).toEqual(500);
      expect(response.body).toEqual(`Could not create the item: ${errMsg}`);
    });

    test('success', async () => {
      AWS.mock('DynamoDB', 'putItem', (params, callback) => {
        callback(null, {});
      });
    
      const response = await lambda.handler({
        httpMethod: 'POST',
        body: JSON.stringify(ddbItemAttributes)
      });
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(response.body).id).toBeTruthy();
      Object.keys(ddbItemAttributes).map((key) => {
        expect(JSON.parse(response.body)[key]).toBeTruthy();
      });
    });
  });

  describe('handles PUT', () => {
    test('no id given', async () => {
      AWS.mock('DynamoDB', 'updateItem', (params, callback) => {
        callback(null, {
          Attributes: ddbItem
        });
      });

      const response = await lambda.handler({
        httpMethod: 'PUT',
        pathParameters: {},
        body: JSON.stringify(ddbItemAttributes)
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual('Bad request: No id given in path parameters');
    });

    test('invalid object', async () => {
      AWS.mock('DynamoDB', 'updateItem', (params, callback) => {
        callback(null, {
          Attributes: ddbItem
        });
      });
    
      const response = await lambda.handler({
        httpMethod: 'PUT',
        pathParameters: {
          id: ddbItemId
        },
        body: JSON.stringify({})
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body).toBeTruthy();
    });

    test('DynamoDB error', async () => {
      const errMsg = 'an error occurred';
      AWS.mock('DynamoDB', 'updateItem', (params, callback) => {
        callback(errMsg, null);
      });

      const response = await lambda.handler({
        httpMethod: 'PUT',
        pathParameters: {
          id: ddbItemId
        },
        body: JSON.stringify(ddbItemAttributes)
      });
      expect(response.statusCode).toEqual(500);
      expect(response.body).toEqual(`Could not update the item: ${errMsg}`);
    });

    test('success', async () => {
      AWS.mock('DynamoDB', 'updateItem', (params, callback) => {
        callback(null, {
          Attributes: ddbItem
        });
      });
    
      const response = await lambda.handler({
        httpMethod: 'PUT',
        pathParameters: {
          id: ddbItemId
        },
        body: JSON.stringify(ddbItemAttributes)
      });
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(JSON.stringify(ddbItem));
    });
  });

  describe('handles DELETE', () => {
    test('no id given', async () => {
      AWS.mock('DynamoDB', 'deleteItem', (params, callback) => {
        callback(null, {});
      });

      const response = await lambda.handler({
        httpMethod: 'DELETE',
        pathParameters: {}
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual('Bad request: No id given in path parameters');
    });

    test('DynamoDB error', async () => {
      const errMsg = 'an error occurred';
      AWS.mock('DynamoDB', 'deleteItem', (params, callback) => {
        callback(errMsg, null);
      });

      const response = await lambda.handler({
        httpMethod: 'DELETE',
        pathParameters: {
          id: ddbItemId
        }
      });
      expect(response.statusCode).toEqual(500);
      expect(response.body).toEqual(`Could not delete the item: ${errMsg}`);
    });

    test('success', async () => {
      AWS.mock('DynamoDB', 'deleteItem', (params, callback) => {
        callback(null, {});
      });
    
      const response = await lambda.handler({
        httpMethod: 'DELETE',
        pathParameters: {
          id: ddbItemId
        }
      });
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(response.body).id).toEqual(ddbItemId);
      expect(JSON.parse(response.body).message).toEqual('Item deleted successfully');
    });
  });

  describe('handles UNKNOWN', () => {
    test('method not allowed', async () => {
      const response = await lambda.handler({
        httpMethod: 'UNKNOWN',
        pathParameters: {
          id: ddbItemId
        }
      });
      expect(response.statusCode).toEqual(405);
      expect(response.body).toEqual('Method Not Allowed');
    });
  });
});
