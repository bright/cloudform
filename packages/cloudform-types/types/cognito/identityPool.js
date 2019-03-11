"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PushSync {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PushSync = PushSync;
class CognitoIdentityProvider {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoIdentityProvider = CognitoIdentityProvider;
class CognitoStreams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CognitoStreams = CognitoStreams;
class IdentityPool extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cognito::IdentityPool', properties);
    }
}
IdentityPool.PushSync = PushSync;
IdentityPool.CognitoIdentityProvider = CognitoIdentityProvider;
IdentityPool.CognitoStreams = CognitoStreams;
exports.default = IdentityPool;
