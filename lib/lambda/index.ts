import { Duration } from "aws-cdk-lib";
import { IRole, ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Architecture, IFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export const createLambdaRole = (props: { scope: Construct, id: string }): IRole => {
    const role = new Role(props.scope, props.id, {
        assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        roleName: props.id,
      });
      role.addManagedPolicy(  // Add the Lambda Basic Execution Policy to the Role
        ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      );
      return role;
};

export const createLambdaFunction = (props: {
        scope: Construct,
        id: string,
        entry: string,
        environment: { [key: string]: string },
        role: IRole
    }): IFunction => new NodejsFunction(props.scope, props.id, {
        architecture: Architecture.ARM_64,
        depsLockFilePath: 'package-lock.json',
        entry: props.entry,
        environment: props.environment,
        functionName: props.id,
        handler: 'handler',
        memorySize: 128,
        retryAttempts: 0,
        role: props.role,
        runtime: Runtime.NODEJS_16_X,
        timeout: Duration.seconds(60),
});

