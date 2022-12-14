import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export const createDynamoDBTable = (props: { scope: Construct, id: string }): Table => new Table(props.scope, props.id, {
  billingMode: BillingMode.PAY_PER_REQUEST,
  partitionKey: { name: `id`, type: AttributeType.STRING },
  tableName: props.id
});
