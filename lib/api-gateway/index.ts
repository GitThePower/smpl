import { IRestApi, StepFunctionsRestApi } from "aws-cdk-lib/aws-apigateway";
import { IStateMachine } from "aws-cdk-lib/aws-stepfunctions";
import { Construct } from "constructs";

export const createApiGateway = (scope: Construct, id: string, stateMachine: IStateMachine): IRestApi => {

  const api = new StepFunctionsRestApi(scope, id, {
    restApiName: id,
    stateMachine
 });

 return api;
}