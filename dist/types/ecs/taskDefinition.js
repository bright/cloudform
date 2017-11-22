"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ContainerDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::ContainerDefinition', properties, dependsOn);
    }
}
exports.ContainerDefinition = ContainerDefinition;
class LogConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::LogConfiguration', properties, dependsOn);
    }
}
exports.LogConfiguration = LogConfiguration;
class Device extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Device', properties, dependsOn);
    }
}
exports.Device = Device;
class KeyValuePair extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::KeyValuePair', properties, dependsOn);
    }
}
exports.KeyValuePair = KeyValuePair;
class MountPoint extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::MountPoint', properties, dependsOn);
    }
}
exports.MountPoint = MountPoint;
class VolumeFrom extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::VolumeFrom', properties, dependsOn);
    }
}
exports.VolumeFrom = VolumeFrom;
class HostEntry extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::HostEntry', properties, dependsOn);
    }
}
exports.HostEntry = HostEntry;
class KernelCapabilities extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::KernelCapabilities', properties, dependsOn);
    }
}
exports.KernelCapabilities = KernelCapabilities;
class TaskDefinitionPlacementConstraint extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::TaskDefinitionPlacementConstraint', properties, dependsOn);
    }
}
exports.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
class Volume extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Volume', properties, dependsOn);
    }
}
exports.Volume = Volume;
class PortMapping extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::PortMapping', properties, dependsOn);
    }
}
exports.PortMapping = PortMapping;
class Ulimit extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Ulimit', properties, dependsOn);
    }
}
exports.Ulimit = Ulimit;
class LinuxParameters extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::LinuxParameters', properties, dependsOn);
    }
}
exports.LinuxParameters = LinuxParameters;
class HostVolumeProperties extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::HostVolumeProperties', properties, dependsOn);
    }
}
exports.HostVolumeProperties = HostVolumeProperties;
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn);
    }
}
exports.default = TaskDefinition;
