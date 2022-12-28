import { IRestApi, RestApi } from "aws-cdk-lib/aws-apigateway";
import { AnyPrincipal, Effect, PolicyDocument, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export const createApiGateway = (scope: Construct, id: string): IRestApi =>  new RestApi(scope, id, {
    cloudWatchRole: false,
    policy: new PolicyDocument({
      statements: [
        new PolicyStatement({
          actions: ['*'],
          effect: Effect.ALLOW,
          principals: [new AnyPrincipal()],
          resources: ['*']
        })
      ]
    }),
    restApiName: id
 });
