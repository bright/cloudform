import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VolumeSpecificationProperties {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    VolumeType: Value<string>;
}
export declare class VolumeSpecification extends ResourceBase {
    constructor(properties: VolumeSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotProvisioningSpecificationProperties {
    BlockDurationMinutes?: Value<number>;
    TimeoutAction: Value<string>;
    TimeoutDurationMinutes: Value<number>;
}
export declare class SpotProvisioningSpecification extends ResourceBase {
    constructor(properties: SpotProvisioningSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConfigurationProperties {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<Configuration>;
}
export declare class Configuration extends ResourceBase {
    constructor(properties: ConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EbsConfigurationProperties {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>;
    EbsOptimized?: Value<boolean>;
}
export declare class EbsConfiguration extends ResourceBase {
    constructor(properties: EbsConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceTypeConfigProperties {
    BidPrice?: Value<string>;
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    Configurations?: List<Configuration>;
    EbsConfiguration?: EbsConfiguration;
    InstanceType: Value<string>;
    WeightedCapacity?: Value<number>;
}
export declare class InstanceTypeConfig extends ResourceBase {
    constructor(properties: InstanceTypeConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceFleetProvisioningSpecificationsProperties {
    SpotSpecification: SpotProvisioningSpecification;
}
export declare class InstanceFleetProvisioningSpecifications extends ResourceBase {
    constructor(properties: InstanceFleetProvisioningSpecificationsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EbsBlockDeviceConfigProperties {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
}
export declare class EbsBlockDeviceConfig extends ResourceBase {
    constructor(properties: EbsBlockDeviceConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceFleetConfigProperties {
    ClusterId: Value<string>;
    InstanceFleetType: Value<string>;
    InstanceTypeConfigs?: List<InstanceTypeConfig>;
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
    Name?: Value<string>;
    TargetOnDemandCapacity?: Value<number>;
    TargetSpotCapacity?: Value<number>;
}
export default class InstanceFleetConfig extends ResourceBase {
    constructor(properties: InstanceFleetConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
