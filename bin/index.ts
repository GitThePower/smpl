#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { config } from '../local-config';
import { CdkStack } from '../lib/cdk-stack';

const app = new App();
const { awsAccountNumber, awsRegion } = config;

new CdkStack(app, 'CdkStack', {
  env: { account: awsAccountNumber, region: awsRegion }
});