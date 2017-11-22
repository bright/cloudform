"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VpcConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::VpcConfig', properties, dependsOn);
    }
}
exports.VpcConfig = VpcConfig;
class DeadLetterConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::DeadLetterConfig', properties, dependsOn);
    }
}
exports.DeadLetterConfig = DeadLetterConfig;
class TracingConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::TracingConfig', properties, dependsOn);
    }
}
exports.TracingConfig = TracingConfig;
class Code extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Code', properties, dependsOn);
    }
}
exports.Code = Code;
class Environment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Environment', properties, dependsOn);
    }
}
exports.Environment = Environment;
class Function extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Function', properties, dependsOn);
    }
}
exports.default = Function;
