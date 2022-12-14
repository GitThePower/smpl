import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createDynamoDBTable } from './dynamodb';

export class SmplStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const mealTable = createDynamoDBTable({scope: this, id: `${props.stackName}-meal-table`});
    const mealplanTable = createDynamoDBTable({scope: this, id: `${props.stackName}-mealplan-table`});
    const userTable = createDynamoDBTable({scope: this, id: `${props.stackName}-user-table`});

  }
}
