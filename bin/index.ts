#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { config } from '../local-config';
import { SmplStack } from '../lib/stack';

const app = new App();
const appName = 'smpl';
const { awsAccountNumber, awsRegion } = config;

new SmplStack(app, `${appName}-stack`, {
  env: { account: awsAccountNumber, region: awsRegion },
  stackName: `${appName}`
});