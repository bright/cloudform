"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunAs = exports.ResourceAccessPolicy = exports.FunctionDefinitionVersion = exports.FunctionConfiguration = exports.Function = exports.Execution = exports.Environment = exports.DefaultConfig = void 0;
const resource_1 = require("../resource");
class DefaultConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultConfig = DefaultConfig;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class Execution {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Execution = Execution;
class Function {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Function = Function;
class FunctionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunctionConfiguration = FunctionConfiguration;
class FunctionDefinitionVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunctionDefinitionVersion = FunctionDefinitionVersion;
class ResourceAccessPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceAccessPolicy = ResourceAccessPolicy;
class RunAs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunAs = RunAs;
class FunctionDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Greengrass::FunctionDefinition', properties);
    }
}
exports.default = FunctionDefinition;
FunctionDefinition.DefaultConfig = DefaultConfig;
FunctionDefinition.Environment = Environment;
FunctionDefinition.Execution = Execution;
FunctionDefinition.Function = Function;
FunctionDefinition.FunctionConfiguration = FunctionConfiguration;
FunctionDefinition.FunctionDefinitionVersion = FunctionDefinitionVersion;
FunctionDefinition.ResourceAccessPolicy = ResourceAccessPolicy;
FunctionDefinition.RunAs = RunAs;
