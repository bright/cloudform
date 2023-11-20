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
exports.VolumesHost = exports.Volumes = exports.Ulimit = exports.Tmpfs = exports.Timeout = exports.Secret = exports.RuntimePlatform = exports.RetryStrategy = exports.ResourceRequirement = exports.PodProperties = exports.NodeRangeProperty = exports.NodeProperties = exports.NetworkConfiguration = exports.MountPoints = exports.Metadata = exports.LogConfiguration = exports.LinuxParameters = exports.FargatePlatformConfiguration = exports.EvaluateOnExit = exports.EphemeralStorage = exports.Environment = exports.EksVolume = exports.EksSecret = exports.EksProperties = exports.EksHostPath = exports.EksEmptyDir = exports.EksContainerVolumeMount = exports.EksContainerSecurityContext = exports.EksContainerResourceRequirements = exports.EksContainerEnvironmentVariable = exports.EksContainer = exports.EfsVolumeConfiguration = exports.Device = exports.ContainerProperties = exports.AuthorizationConfig = void 0;
const resource_1 = require("../resource");
class AuthorizationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthorizationConfig = AuthorizationConfig;
class ContainerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerProperties = ContainerProperties;
class Device {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Device = Device;
class EfsVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EfsVolumeConfiguration = EfsVolumeConfiguration;
class EksContainer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksContainer = EksContainer;
class EksContainerEnvironmentVariable {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksContainerEnvironmentVariable = EksContainerEnvironmentVariable;
class EksContainerResourceRequirements {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksContainerResourceRequirements = EksContainerResourceRequirements;
class EksContainerSecurityContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksContainerSecurityContext = EksContainerSecurityContext;
class EksContainerVolumeMount {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksContainerVolumeMount = EksContainerVolumeMount;
class EksEmptyDir {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksEmptyDir = EksEmptyDir;
class EksHostPath {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksHostPath = EksHostPath;
class EksProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksProperties = EksProperties;
class EksSecret {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksSecret = EksSecret;
class EksVolume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EksVolume = EksVolume;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class EphemeralStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EphemeralStorage = EphemeralStorage;
class EvaluateOnExit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EvaluateOnExit = EvaluateOnExit;
class FargatePlatformConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FargatePlatformConfiguration = FargatePlatformConfiguration;
class LinuxParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LinuxParameters = LinuxParameters;
class LogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogConfiguration = LogConfiguration;
class Metadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metadata = Metadata;
class MountPoints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoints = MountPoints;
class NetworkConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfiguration = NetworkConfiguration;
class NodeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeProperties = NodeProperties;
class NodeRangeProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeRangeProperty = NodeRangeProperty;
class PodProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PodProperties = PodProperties;
class ResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceRequirement = ResourceRequirement;
class RetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryStrategy = RetryStrategy;
class RuntimePlatform {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RuntimePlatform = RuntimePlatform;
class Secret {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Secret = Secret;
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
class Ulimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ulimit = Ulimit;
class Volumes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volumes = Volumes;
class VolumesHost {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumesHost = VolumesHost;
class JobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Batch::JobDefinition', properties);
    }
}
exports.default = JobDefinition;
JobDefinition.AuthorizationConfig = AuthorizationConfig;
JobDefinition.ContainerProperties = ContainerProperties;
JobDefinition.Device = Device;
JobDefinition.EfsVolumeConfiguration = EfsVolumeConfiguration;
JobDefinition.EksContainer = EksContainer;
JobDefinition.EksContainerEnvironmentVariable = EksContainerEnvironmentVariable;
JobDefinition.EksContainerResourceRequirements = EksContainerResourceRequirements;
JobDefinition.EksContainerSecurityContext = EksContainerSecurityContext;
JobDefinition.EksContainerVolumeMount = EksContainerVolumeMount;
JobDefinition.EksEmptyDir = EksEmptyDir;
JobDefinition.EksHostPath = EksHostPath;
JobDefinition.EksProperties = EksProperties;
JobDefinition.EksSecret = EksSecret;
JobDefinition.EksVolume = EksVolume;
JobDefinition.Environment = Environment;
JobDefinition.EphemeralStorage = EphemeralStorage;
JobDefinition.EvaluateOnExit = EvaluateOnExit;
JobDefinition.FargatePlatformConfiguration = FargatePlatformConfiguration;
JobDefinition.LinuxParameters = LinuxParameters;
JobDefinition.LogConfiguration = LogConfiguration;
JobDefinition.Metadata = Metadata;
JobDefinition.MountPoints = MountPoints;
JobDefinition.NetworkConfiguration = NetworkConfiguration;
JobDefinition.NodeProperties = NodeProperties;
JobDefinition.NodeRangeProperty = NodeRangeProperty;
JobDefinition.PodProperties = PodProperties;
JobDefinition.ResourceRequirement = ResourceRequirement;
JobDefinition.RetryStrategy = RetryStrategy;
JobDefinition.RuntimePlatform = RuntimePlatform;
JobDefinition.Secret = Secret;
JobDefinition.Timeout = Timeout;
JobDefinition.Tmpfs = Tmpfs;
JobDefinition.Ulimit = Ulimit;
JobDefinition.Volumes = Volumes;
JobDefinition.VolumesHost = VolumesHost;
