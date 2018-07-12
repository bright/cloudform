"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const requestValidator_1 = require("./requestValidator");
const deployment_1 = require("./deployment");
const authorizer_1 = require("./authorizer");
const domainName_1 = require("./domainName");
const documentationPart_1 = require("./documentationPart");
const apiKey_1 = require("./apiKey");
const model_1 = require("./model");
const resource_1 = require("./resource");
const account_1 = require("./account");
const restApi_1 = require("./restApi");
const usagePlan_1 = require("./usagePlan");
const basePathMapping_1 = require("./basePathMapping");
const stage_1 = require("./stage");
const vpcLink_1 = require("./vpcLink");
const gatewayResponse_1 = require("./gatewayResponse");
const clientCertificate_1 = require("./clientCertificate");
const method_1 = require("./method");
const documentationVersion_1 = require("./documentationVersion");
const usagePlanKey_1 = require("./usagePlanKey");
exports.default = {
    RequestValidator: requestValidator_1.default,
    Deployment: deployment_1.default,
    Authorizer: authorizer_1.default,
    DomainName: domainName_1.default,
    DocumentationPart: documentationPart_1.default,
    ApiKey: apiKey_1.default,
    Model: model_1.default,
    Resource: resource_1.default,
    Account: account_1.default,
    RestApi: restApi_1.default,
    UsagePlan: usagePlan_1.default,
    BasePathMapping: basePathMapping_1.default,
    Stage: stage_1.default,
    VpcLink: vpcLink_1.default,
    GatewayResponse: gatewayResponse_1.default,
    ClientCertificate: clientCertificate_1.default,
    Method: method_1.default,
    DocumentationVersion: documentationVersion_1.default,
    UsagePlanKey: usagePlanKey_1.default
};
