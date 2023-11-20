"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cognito = void 0;
const identityPool_1 = require("./identityPool");
const identityPoolPrincipalTag_1 = require("./identityPoolPrincipalTag");
const identityPoolRoleAttachment_1 = require("./identityPoolRoleAttachment");
const logDeliveryConfiguration_1 = require("./logDeliveryConfiguration");
const userPool_1 = require("./userPool");
const userPoolClient_1 = require("./userPoolClient");
const userPoolDomain_1 = require("./userPoolDomain");
const userPoolGroup_1 = require("./userPoolGroup");
const userPoolIdentityProvider_1 = require("./userPoolIdentityProvider");
const userPoolResourceServer_1 = require("./userPoolResourceServer");
const userPoolRiskConfigurationAttachment_1 = require("./userPoolRiskConfigurationAttachment");
const userPoolUiCustomizationAttachment_1 = require("./userPoolUiCustomizationAttachment");
const userPoolUser_1 = require("./userPoolUser");
const userPoolUserToGroupAttachment_1 = require("./userPoolUserToGroupAttachment");
var Cognito;
(function (Cognito) {
    Cognito.IdentityPool = identityPool_1.default;
    Cognito.IdentityPoolPrincipalTag = identityPoolPrincipalTag_1.default;
    Cognito.IdentityPoolRoleAttachment = identityPoolRoleAttachment_1.default;
    Cognito.LogDeliveryConfiguration = logDeliveryConfiguration_1.default;
    Cognito.UserPool = userPool_1.default;
    Cognito.UserPoolClient = userPoolClient_1.default;
    Cognito.UserPoolDomain = userPoolDomain_1.default;
    Cognito.UserPoolGroup = userPoolGroup_1.default;
    Cognito.UserPoolIdentityProvider = userPoolIdentityProvider_1.default;
    Cognito.UserPoolResourceServer = userPoolResourceServer_1.default;
    Cognito.UserPoolRiskConfigurationAttachment = userPoolRiskConfigurationAttachment_1.default;
    Cognito.UserPoolUICustomizationAttachment = userPoolUiCustomizationAttachment_1.default;
    Cognito.UserPoolUser = userPoolUser_1.default;
    Cognito.UserPoolUserToGroupAttachment = userPoolUserToGroupAttachment_1.default;
})(Cognito = exports.Cognito || (exports.Cognito = {}));
