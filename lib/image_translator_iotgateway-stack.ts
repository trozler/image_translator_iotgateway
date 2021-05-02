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
