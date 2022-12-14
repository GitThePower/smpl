import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export const createLambdaFunction = (props: { scope: Construct, id: string }): NodejsFunction => new NodejsFunction(props.scope, props.id, {

});