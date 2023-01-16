import { Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { createApiGateway } from './api-gateway';
import { createDynamoDBTable } from './dynamodb';
import { createLambdaFunction, createLambdaRole } from './lambda';

const RESOURCES = ['food, meal, mealplan', 'user'];

interface SmplStackProps extends StackProps {
  env: {
    account: string;
    region: string;
  };
  stackName: string;
}

export class SmplStack extends Stack {
  constructor(scope: Construct, id: string, props: SmplStackProps) {
    super(scope, id, props);

    const restApi = createApiGateway(this, `${props.stackName}-api`);

    RESOURCES.map(resource => {
      const role = createLambdaRole({ scope: this, id: `${props.stackName}-${resource}-role` });
      const table = createDynamoDBTable({scope: this, id: `${props.stackName}-${resource}-table`});
      table.grantFullAccess(role);
      const lambda = createLambdaFunction({
        scope: this,
        id: `${props.stackName}-${resource}-accessor`,
        entry: `src/${resource}/index.js`,
        environment: {
          DB_TABLE_NAME: table.tableName
        },
        role
      });
      const apiResource = restApi.root.addResource(resource);   // creates /{resource} endpoint
      const lambdaIntegration = new LambdaIntegration(lambda);
      apiResource.addMethod('POST', lambdaIntegration);         // C
      apiResource.addMethod('GET', lambdaIntegration);          // R
      apiResource.addMethod('PUT', lambdaIntegration);          // U
      apiResource.addMethod('DELETE', lambdaIntegration);       // D
    });
  }
}
