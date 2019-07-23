"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FunctionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FunctionConfiguration = FunctionConfiguration;
class Execution {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Execution = Execution;
class RunAs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RunAs = RunAs;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class DefaultConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultConfig = DefaultConfig;
class Function {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Function = Function;
class ResourceAccessPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceAccessPolicy = ResourceAccessPolicy;
class FunctionDefinitionVersion extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Greengrass::FunctionDefinitionVersion', properties);
    }
}
FunctionDefinitionVersion.FunctionConfiguration = FunctionConfiguration;
FunctionDefinitionVersion.Execution = Execution;
FunctionDefinitionVersion.RunAs = RunAs;
FunctionDefinitionVersion.Environment = Environment;
FunctionDefinitionVersion.DefaultConfig = DefaultConfig;
FunctionDefinitionVersion.Function = Function;
FunctionDefinitionVersion.ResourceAccessPolicy = ResourceAccessPolicy;
exports.default = FunctionDefinitionVersion;
