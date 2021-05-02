import * as cdk from "@aws-cdk/core";
import { AuthorizationType } from "@aws-cdk/aws-apigateway";
import { ApiGatewayToIot, ApiGatewayToIotProps } from "@aws-solutions-constructs/aws-apigateway-iot";

export class ImageTranslatorIotgatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const propsIoT: ApiGatewayToIotProps = {
      iotEndpoint: "aqps5hxerpy80-ats",
      apiGatewayProps: {
        defaultMethodOptions: {
          authorizationType: AuthorizationType.NONE,
        },
      },
    };

    new ApiGatewayToIot(this, "ApiGatewayToIotPattern", propsIoT);
  }
}

/*

How to deploy and run:
(Assumes you have aws cli installed and configured with your credentials).

1. npm i
2. npm run build
3. cdk synth
4. cdk diff
5. cdk deploy


Test command:
This sends a message to broker_interface topic.

curl -XPOST https://c02zu014q2.execute-api.eu-central-1.amazonaws.com/prod/message/broker_interface -H "Content-Type: application/json" -d '{"Hello": "World"}'
*/
