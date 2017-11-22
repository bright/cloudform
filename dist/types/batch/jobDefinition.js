"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Volumes extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::Volumes', properties, dependsOn);
    }
}
exports.Volumes = Volumes;
class RetryStrategy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::RetryStrategy', properties, dependsOn);
    }
}
exports.RetryStrategy = RetryStrategy;
class ContainerProperties extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::ContainerProperties', properties, dependsOn);
    }
}
exports.ContainerProperties = ContainerProperties;
class MountPoints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::MountPoints', properties, dependsOn);
    }
}
exports.MountPoints = MountPoints;
class Environment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::Environment', properties, dependsOn);
    }
}
exports.Environment = Environment;
class Ulimit extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::Ulimit', properties, dependsOn);
    }
}
exports.Ulimit = Ulimit;
class VolumesHost extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::VolumesHost', properties, dependsOn);
    }
}
exports.VolumesHost = VolumesHost;
class JobDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::JobDefinition', properties, dependsOn);
    }
}
exports.default = JobDefinition;
