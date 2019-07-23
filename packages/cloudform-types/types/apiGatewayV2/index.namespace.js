"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const stage_1 = require("./stage");
const api_1 = require("./api");
const routeResponse_1 = require("./routeResponse");
const domainName_1 = require("./domainName");
const integration_1 = require("./integration");
const deployment_1 = require("./deployment");
const model_1 = require("./model");
const authorizer_1 = require("./authorizer");
const integrationResponse_1 = require("./integrationResponse");
const apiMapping_1 = require("./apiMapping");
var ApiGatewayV2;
(function (ApiGatewayV2) {
    ApiGatewayV2.Route = route_1.default;
    ApiGatewayV2.Stage = stage_1.default;
    ApiGatewayV2.Api = api_1.default;
    ApiGatewayV2.RouteResponse = routeResponse_1.default;
    ApiGatewayV2.DomainName = domainName_1.default;
    ApiGatewayV2.Integration = integration_1.default;
    ApiGatewayV2.Deployment = deployment_1.default;
    ApiGatewayV2.Model = model_1.default;
    ApiGatewayV2.Authorizer = authorizer_1.default;
    ApiGatewayV2.IntegrationResponse = integrationResponse_1.default;
    ApiGatewayV2.ApiMapping = apiMapping_1.default;
})(ApiGatewayV2 = exports.ApiGatewayV2 || (exports.ApiGatewayV2 = {}));
