"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VolumeSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn);
    }
}
exports.VolumeSpecification = VolumeSpecification;
class SpotProvisioningSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::SpotProvisioningSpecification', properties, dependsOn);
    }
}
exports.SpotProvisioningSpecification = SpotProvisioningSpecification;
class Configuration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::Configuration', properties, dependsOn);
    }
}
exports.Configuration = Configuration;
class EbsConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::EbsConfiguration', properties, dependsOn);
    }
}
exports.EbsConfiguration = EbsConfiguration;
class InstanceTypeConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::InstanceTypeConfig', properties, dependsOn);
    }
}
exports.InstanceTypeConfig = InstanceTypeConfig;
class InstanceFleetProvisioningSpecifications extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::InstanceFleetProvisioningSpecifications', properties, dependsOn);
    }
}
exports.InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications;
class EbsBlockDeviceConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn);
    }
}
exports.EbsBlockDeviceConfig = EbsBlockDeviceConfig;
class InstanceFleetConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EMR::InstanceFleetConfig', properties, dependsOn);
    }
}
exports.default = InstanceFleetConfig;
