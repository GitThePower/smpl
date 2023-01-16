import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SmplStack } from '../../lib/stack';

const app = new App();
const account = '123456789012';
const region = 'us-east-1';

let stack: Stack;

beforeAll(() => {
  stack = new SmplStack(app, 'TestStack', {
    env: { account, region },
    stackName: 'test'
  });
});

test('Smpl stack should create these resources', () => {
  // Number of resources at deploy should be this many (X) + 2 because
  // CDK::Metadata and Cloudformation::Stack are not counted
  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::ApiGateway::RestApi", 1);
  template.resourceCountIs("AWS::DynamoDB::Table", 4);
  template.resourceCountIs("AWS::IAM::Policy", 4);
  template.resourceCountIs("AWS::IAM::Role", 4);
  template.resourceCountIs("AWS::Lambda::Function", 4);
});
