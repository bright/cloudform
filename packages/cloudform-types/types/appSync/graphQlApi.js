"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPoolConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserPoolConfig = UserPoolConfig;
class OpenIDConnectConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenIDConnectConfig = OpenIDConnectConfig;
class LogConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogConfig = LogConfig;
class CognitoUserPoolConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoUserPoolConfig = CognitoUserPoolConfig;
class AdditionalAuthenticationProvider {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdditionalAuthenticationProvider = AdditionalAuthenticationProvider;
class GraphQLApi extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppSync::GraphQLApi', properties);
    }
}
GraphQLApi.UserPoolConfig = UserPoolConfig;
GraphQLApi.OpenIDConnectConfig = OpenIDConnectConfig;
GraphQLApi.LogConfig = LogConfig;
GraphQLApi.CognitoUserPoolConfig = CognitoUserPoolConfig;
GraphQLApi.AdditionalAuthenticationProvider = AdditionalAuthenticationProvider;
exports.default = GraphQLApi;
