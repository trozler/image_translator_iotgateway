# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

### How to deploy and run:

This assumes you have aws cli installed and configured with your credentials.

1. npm i
2. npm run build
3. cdk synth
4. cdk diff
5. cdk deploy

**Test command:**
This sends a message to the `broker_interface` topic.

```
curl -XPOST https://c02zu014q2.execute-api.eu-central-1.amazonaws.com/prod/message/broker_interface -H "Content-Type: application/json" -d '{"Hello": "World"}'
```

You can test if it works by subscribing to the `broker_interface` topic in the AWS IoT test section. If you have created an AWS IoT Analytics projects that subscribe to `broker_interface` topic, the incoming messages should be visible on the dashboard a few minutes later.

### References

Please refer to the following [tutorial](https://docs.aws.amazon.com/solutions/latest/constructs/welcome.html) to learn more about using AWS solution constructs.
