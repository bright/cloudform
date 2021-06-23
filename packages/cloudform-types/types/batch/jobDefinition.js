"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Volumes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volumes = Volumes;
class AuthorizationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthorizationConfig = AuthorizationConfig;
class ResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceRequirement = ResourceRequirement;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class VolumesHost {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumesHost = VolumesHost;
class NodeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeProperties = NodeProperties;
class RetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryStrategy = RetryStrategy;
class Secret {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Secret = Secret;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class LogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogConfiguration = LogConfiguration;
class ContainerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerProperties = ContainerProperties;
class MountPoints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoints = MountPoints;
class EvaluateOnExit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluateOnExit = EvaluateOnExit;
class Ulimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ulimit = Ulimit;
class LinuxParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LinuxParameters = LinuxParameters;
class FargatePlatformConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FargatePlatformConfiguration = FargatePlatformConfiguration;
class Timeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Timeout = Timeout;
class Tmpfs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tmpfs = Tmpfs;
class NodeRangeProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeRangeProperty = NodeRangeProperty;
class EfsVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EfsVolumeConfiguration = EfsVolumeConfiguration;
class Device {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Device = Device;
class JobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Batch::JobDefinition', properties);
    }
}
exports.default = JobDefinition;
JobDefinition.Volumes = Volumes;
JobDefinition.AuthorizationConfig = AuthorizationConfig;
JobDefinition.ResourceRequirement = ResourceRequirement;
JobDefinition.Environment = Environment;
JobDefinition.VolumesHost = VolumesHost;
JobDefinition.NodeProperties = NodeProperties;
JobDefinition.RetryStrategy = RetryStrategy;
JobDefinition.Secret = Secret;
JobDefinition.NetworkConfiguration = NetworkConfiguration;
JobDefinition.LogConfiguration = LogConfiguration;
JobDefinition.ContainerProperties = ContainerProperties;
JobDefinition.MountPoints = MountPoints;
JobDefinition.EvaluateOnExit = EvaluateOnExit;
JobDefinition.Ulimit = Ulimit;
JobDefinition.LinuxParameters = LinuxParameters;
JobDefinition.FargatePlatformConfiguration = FargatePlatformConfiguration;
JobDefinition.Timeout = Timeout;
JobDefinition.Tmpfs = Tmpfs;
JobDefinition.NodeRangeProperty = NodeRangeProperty;
JobDefinition.EfsVolumeConfiguration = EfsVolumeConfiguration;
JobDefinition.Device = Device;
