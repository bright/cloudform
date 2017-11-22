"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RunCommandParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::RunCommandParameters', properties, dependsOn);
    }
}
exports.RunCommandParameters = RunCommandParameters;
class Target extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::Target', properties, dependsOn);
    }
}
exports.Target = Target;
class RunCommandTarget extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::RunCommandTarget', properties, dependsOn);
    }
}
exports.RunCommandTarget = RunCommandTarget;
class InputTransformer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::InputTransformer', properties, dependsOn);
    }
}
exports.InputTransformer = InputTransformer;
class KinesisParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::KinesisParameters', properties, dependsOn);
    }
}
exports.KinesisParameters = KinesisParameters;
class EcsParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::EcsParameters', properties, dependsOn);
    }
}
exports.EcsParameters = EcsParameters;
class Rule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::Rule', properties, dependsOn);
    }
}
exports.default = Rule;
