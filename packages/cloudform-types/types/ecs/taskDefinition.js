"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogConfiguration = LogConfiguration;
class Device {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Device = Device;
class Secret {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Secret = Secret;
class VolumeFrom {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeFrom = VolumeFrom;
class HostEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostEntry = HostEntry;
class TaskDefinitionPlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class Tmpfs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tmpfs = Tmpfs;
class ResourceRequirement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourceRequirement = ResourceRequirement;
class DockerVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DockerVolumeConfiguration = DockerVolumeConfiguration;
class ContainerDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerDefinition = ContainerDefinition;
class KeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValuePair = KeyValuePair;
class MountPoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoint = MountPoint;
class KernelCapabilities {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KernelCapabilities = KernelCapabilities;
class HealthCheck {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheck = HealthCheck;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
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
class ContainerDependency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerDependency = ContainerDependency;
class ProxyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProxyConfiguration = ProxyConfiguration;
class HostVolumeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostVolumeProperties = HostVolumeProperties;
class RepositoryCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepositoryCredentials = RepositoryCredentials;
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ECS::TaskDefinition', properties || {});
    }
}
TaskDefinition.LogConfiguration = LogConfiguration;
TaskDefinition.Device = Device;
TaskDefinition.Secret = Secret;
TaskDefinition.VolumeFrom = VolumeFrom;
TaskDefinition.HostEntry = HostEntry;
TaskDefinition.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
TaskDefinition.Volume = Volume;
TaskDefinition.Tmpfs = Tmpfs;
TaskDefinition.ResourceRequirement = ResourceRequirement;
TaskDefinition.DockerVolumeConfiguration = DockerVolumeConfiguration;
TaskDefinition.ContainerDefinition = ContainerDefinition;
TaskDefinition.KeyValuePair = KeyValuePair;
TaskDefinition.MountPoint = MountPoint;
TaskDefinition.KernelCapabilities = KernelCapabilities;
TaskDefinition.HealthCheck = HealthCheck;
TaskDefinition.PortMapping = PortMapping;
TaskDefinition.Ulimit = Ulimit;
TaskDefinition.LinuxParameters = LinuxParameters;
TaskDefinition.ContainerDependency = ContainerDependency;
TaskDefinition.ProxyConfiguration = ProxyConfiguration;
TaskDefinition.HostVolumeProperties = HostVolumeProperties;
TaskDefinition.RepositoryCredentials = RepositoryCredentials;
exports.default = TaskDefinition;
