const AWS = require('aws-sdk-mock');
const updateUser = require('../../src/userTable/updateUser');

process.env.TABLE_NAME = 'someTableName';

afterEach(() => {
  AWS.restore();
});

test.only('should successfully update user', async () => {
  AWS.mock('DynamoDB', 'updateItem', (params, cb) => {
    cb(null, 'success');
  });
  const event = {
    pathParameters: {
      id: 'someId'
    },
    body: {
      username: 'someUsername'
    }
  };

  const result = await updateUser.handler(event);
  expect(result.body).toBe('Blah')
  expect(result.statusCode).toBe(200);
});

test('should fail to update user because of no id field', async () => {
  AWS.mock('DynamoDB', 'updateItem', (params, cb) => {
    cb(null, 'success');
  });
  const event = {
    pathParameters: {},
    body: {
      username: 'someUsername'
    }
  };

  const result = await updateUser.handler(event);
  expect(result.statusCode).toBe(400);
});

test('should fail to update user because of invalid fields', async () => {
  AWS.mock('DynamoDB', 'updateItem', (params, cb) => {
    cb(null, 'success');
  });
  const event = {
    pathParameters: {
      id: 'someId'
    },
    body: {
      username: 'someUsername',
      nonExistentField: 'does not exist'
    }
  };

  const result = await updateUser.handler(event);
  expect(result.statusCode).toBe(400);
});

test('should fail to update user because of no fields', async () => {
  AWS.mock('DynamoDB', 'updateItem', (params, cb) => {
    cb(null, 'success');
  });
  const event = {
    pathParameters: {
      id: 'someId'
    },
    body: {}
  };

  const result = await updateUser.handler(event);
  expect(result.statusCode).toBe(400);
});

test('should fail to update user because of dynamodb error', async () => {
  AWS.mock('DynamoDB', 'updateItem', (params, cb) => {
    cb('failure', null);
  });
  const event = {
    pathParameters: {
      id: 'someId'
    },
    body: {
      username: 'someUsername',
      nonExistentField: 'does not exist'
    }
  };

  const result = await updateUser.handler(event);
  expect(result.statusCode).toBe(500);
});
