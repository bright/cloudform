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
const deployment_1 = require("./deployment");
const authorizer_1 = require("./authorizer");
const domainName_1 = require("./domainName");
const documentationPart_1 = require("./documentationPart");
const model_1 = require("./model");
const usagePlan_1 = require("./usagePlan");
const basePathMapping_1 = require("./basePathMapping");
const stage_1 = require("./stage");
const gatewayResponse_1 = require("./gatewayResponse");
const clientCertificate_1 = require("./clientCertificate");
const documentationVersion_1 = require("./documentationVersion");
const usagePlanKey_1 = require("./usagePlanKey");
const requestValidator_1 = require("./requestValidator");
const apiKey_1 = require("./apiKey");
const resource_1 = require("./resource");
const account_1 = require("./account");
const restApi_1 = require("./restApi");
const vpcLink_1 = require("./vpcLink");
const method_1 = require("./method");
var ApiGateway;
(function (ApiGateway) {
    ApiGateway.Deployment = deployment_1.default;
    ApiGateway.Authorizer = authorizer_1.default;
    ApiGateway.DomainName = domainName_1.default;
    ApiGateway.DocumentationPart = documentationPart_1.default;
    ApiGateway.Model = model_1.default;
    ApiGateway.UsagePlan = usagePlan_1.default;
    ApiGateway.BasePathMapping = basePathMapping_1.default;
    ApiGateway.Stage = stage_1.default;
    ApiGateway.GatewayResponse = gatewayResponse_1.default;
    ApiGateway.ClientCertificate = clientCertificate_1.default;
    ApiGateway.DocumentationVersion = documentationVersion_1.default;
    ApiGateway.UsagePlanKey = usagePlanKey_1.default;
    ApiGateway.RequestValidator = requestValidator_1.default;
    ApiGateway.ApiKey = apiKey_1.default;
    ApiGateway.Resource = resource_1.default;
    ApiGateway.Account = account_1.default;
    ApiGateway.RestApi = restApi_1.default;
    ApiGateway.VpcLink = vpcLink_1.default;
    ApiGateway.Method = method_1.default;
})(ApiGateway = exports.ApiGateway || (exports.ApiGateway = {}));
