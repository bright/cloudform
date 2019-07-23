import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SpotProvisioningSpecification {
    BlockDurationMinutes?: Value<number>;
    TimeoutAction: Value<string>;
    TimeoutDurationMinutes: Value<number>;
    constructor(properties: SpotProvisioningSpecification);
}
export declare class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>;
    EbsOptimized?: Value<boolean>;
    constructor(properties: EbsConfiguration);
}
export declare class VolumeSpecification {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    VolumeType: Value<string>;
    constructor(properties: VolumeSpecification);
}
export declare class Configuration {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<Configuration>;
    constructor(properties: Configuration);
}
export declare class InstanceTypeConfig {
    BidPrice?: Value<string>;
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    Configurations?: List<Configuration>;
    EbsConfiguration?: EbsConfiguration;
    InstanceType: Value<string>;
    WeightedCapacity?: Value<number>;
    constructor(properties: InstanceTypeConfig);
}
export declare class InstanceFleetProvisioningSpecifications {
    SpotSpecification: SpotProvisioningSpecification;
    constructor(properties: InstanceFleetProvisioningSpecifications);
}
export declare class EbsBlockDeviceConfig {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
    constructor(properties: EbsBlockDeviceConfig);
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
export default class InstanceFleetConfig extends ResourceBase<InstanceFleetConfigProperties> {
    static SpotProvisioningSpecification: typeof SpotProvisioningSpecification;
    static EbsConfiguration: typeof EbsConfiguration;
    static VolumeSpecification: typeof VolumeSpecification;
    static Configuration: typeof Configuration;
    static InstanceTypeConfig: typeof InstanceTypeConfig;
    static InstanceFleetProvisioningSpecifications: typeof InstanceFleetProvisioningSpecifications;
    static EbsBlockDeviceConfig: typeof EbsBlockDeviceConfig;
    constructor(properties: InstanceFleetConfigProperties);
}
