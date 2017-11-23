/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface VolumeSpecificationProperties {
    Iops?: Value<number>
    SizeInGB: Value<number>
    VolumeType: Value<string>
}

export class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::VolumeSpecification', properties, dependsOn)
    }
}

export interface SpotProvisioningSpecificationProperties {
    BlockDurationMinutes?: Value<number>
    TimeoutAction: Value<string>
    TimeoutDurationMinutes: Value<number>
}

export class SpotProvisioningSpecification extends ResourceBase {
    constructor(properties: SpotProvisioningSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::SpotProvisioningSpecification', properties, dependsOn)
    }
}

export interface ConfigurationProperties {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: Configuration[]
}

export class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Configuration', properties, dependsOn)
    }
}

export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[]
    EbsOptimized?: Value<boolean>
}

export class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::EbsConfiguration', properties, dependsOn)
    }
}

export interface InstanceTypeConfigProperties {
    BidPrice?: Value<string>
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>
    Configurations?: Configuration[]
    EbsConfiguration?: EbsConfiguration
    InstanceType: Value<string>
    WeightedCapacity?: Value<number>
}

export class InstanceTypeConfig extends ResourceBase {
    constructor(properties: InstanceTypeConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceTypeConfig', properties, dependsOn)
    }
}

export interface InstanceFleetProvisioningSpecificationsProperties {
    SpotSpecification: SpotProvisioningSpecification
}

export class InstanceFleetProvisioningSpecifications extends ResourceBase {
    constructor(properties: InstanceFleetProvisioningSpecificationsProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceFleetProvisioningSpecifications', properties, dependsOn)
    }
}

export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification
    VolumesPerInstance?: Value<number>
}

export class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::EbsBlockDeviceConfig', properties, dependsOn)
    }
}

export interface InstanceFleetConfigProperties {
    ClusterId: Value<string>
    InstanceFleetType: Value<string>
    InstanceTypeConfigs?: InstanceTypeConfig[]
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications
    Name?: Value<string>
    TargetOnDemandCapacity?: Value<number>
    TargetSpotCapacity?: Value<number>
}

export default class InstanceFleetConfig extends ResourceBase {
    constructor(properties: InstanceFleetConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::InstanceFleetConfig', properties, dependsOn)
    }
}
