"use strict";
/* Generated from:
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperuserParameters = exports.FederationParameters = exports.AttributeMapItems = void 0;
const resource_1 = require("../resource");
class AttributeMapItems {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeMapItems = AttributeMapItems;
class FederationParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FederationParameters = FederationParameters;
class SuperuserParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SuperuserParameters = SuperuserParameters;
class Environment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::FinSpace::Environment', properties);
    }
}
exports.default = Environment;
Environment.AttributeMapItems = AttributeMapItems;
Environment.FederationParameters = FederationParameters;
Environment.SuperuserParameters = SuperuserParameters;
