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
exports.VolumeFrom = exports.Volume = exports.Ulimit = exports.Tmpfs = exports.TaskDefinitionPlacementConstraint = exports.SystemControl = exports.Secret = exports.RuntimePlatform = exports.ResourceRequirement = exports.RepositoryCredentials = exports.ProxyConfiguration = exports.PortMapping = exports.MountPoint = exports.LogConfiguration = exports.LinuxParameters = exports.KeyValuePair = exports.KernelCapabilities = exports.InferenceAccelerator = exports.HostVolumeProperties = exports.HostEntry = exports.HealthCheck = exports.FirelensConfiguration = exports.EphemeralStorage = exports.EnvironmentFile = exports.EFSVolumeConfiguration = exports.DockerVolumeConfiguration = exports.Device = exports.ContainerDependency = exports.ContainerDefinition = exports.AuthorizationConfig = void 0;
const resource_1 = require("../resource");
class AuthorizationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthorizationConfig = AuthorizationConfig;
class ContainerDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerDefinition = ContainerDefinition;
class ContainerDependency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerDependency = ContainerDependency;
class Device {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Device = Device;
class DockerVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DockerVolumeConfiguration = DockerVolumeConfiguration;
class EFSVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EFSVolumeConfiguration = EFSVolumeConfiguration;
class EnvironmentFile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnvironmentFile = EnvironmentFile;
class EphemeralStorage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EphemeralStorage = EphemeralStorage;
class FirelensConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirelensConfiguration = FirelensConfiguration;
class HealthCheck {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheck = HealthCheck;
class HostEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostEntry = HostEntry;
class HostVolumeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostVolumeProperties = HostVolumeProperties;
class InferenceAccelerator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InferenceAccelerator = InferenceAccelerator;
class KernelCapabilities {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KernelCapabilities = KernelCapabilities;
class KeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValuePair = KeyValuePair;
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
class MountPoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoint = MountPoint;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
class ProxyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProxyConfiguration = ProxyConfiguration;
class RepositoryCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepositoryCredentials = RepositoryCredentials;
class ResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceRequirement = ResourceRequirement;
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
class SystemControl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SystemControl = SystemControl;
class TaskDefinitionPlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
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
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class VolumeFrom {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeFrom = VolumeFrom;
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ECS::TaskDefinition', properties || {});
    }
}
exports.default = TaskDefinition;
TaskDefinition.AuthorizationConfig = AuthorizationConfig;
TaskDefinition.ContainerDefinition = ContainerDefinition;
TaskDefinition.ContainerDependency = ContainerDependency;
TaskDefinition.Device = Device;
TaskDefinition.DockerVolumeConfiguration = DockerVolumeConfiguration;
TaskDefinition.EFSVolumeConfiguration = EFSVolumeConfiguration;
TaskDefinition.EnvironmentFile = EnvironmentFile;
TaskDefinition.EphemeralStorage = EphemeralStorage;
TaskDefinition.FirelensConfiguration = FirelensConfiguration;
TaskDefinition.HealthCheck = HealthCheck;
TaskDefinition.HostEntry = HostEntry;
TaskDefinition.HostVolumeProperties = HostVolumeProperties;
TaskDefinition.InferenceAccelerator = InferenceAccelerator;
TaskDefinition.KernelCapabilities = KernelCapabilities;
TaskDefinition.KeyValuePair = KeyValuePair;
TaskDefinition.LinuxParameters = LinuxParameters;
TaskDefinition.LogConfiguration = LogConfiguration;
TaskDefinition.MountPoint = MountPoint;
TaskDefinition.PortMapping = PortMapping;
TaskDefinition.ProxyConfiguration = ProxyConfiguration;
TaskDefinition.RepositoryCredentials = RepositoryCredentials;
TaskDefinition.ResourceRequirement = ResourceRequirement;
TaskDefinition.RuntimePlatform = RuntimePlatform;
TaskDefinition.Secret = Secret;
TaskDefinition.SystemControl = SystemControl;
TaskDefinition.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
TaskDefinition.Tmpfs = Tmpfs;
TaskDefinition.Ulimit = Ulimit;
TaskDefinition.Volume = Volume;
TaskDefinition.VolumeFrom = VolumeFrom;
