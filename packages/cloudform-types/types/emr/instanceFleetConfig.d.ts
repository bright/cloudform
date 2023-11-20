import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Configuration {
    Classification?: Value<string>;
    ConfigurationProperties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<Configuration>;
    constructor(properties: Configuration);
}
export declare class EbsBlockDeviceConfig {
    VolumeSpecification: VolumeSpecification;
    VolumesPerInstance?: Value<number>;
    constructor(properties: EbsBlockDeviceConfig);
}
export declare class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>;
    EbsOptimized?: Value<boolean>;
    constructor(properties: EbsConfiguration);
}
export declare class InstanceFleetProvisioningSpecifications {
    OnDemandSpecification?: OnDemandProvisioningSpecification;
    SpotSpecification?: SpotProvisioningSpecification;
    constructor(properties: InstanceFleetProvisioningSpecifications);
}
export declare class InstanceTypeConfig {
    BidPrice?: Value<string>;
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
    Configurations?: List<Configuration>;
    CustomAmiId?: Value<string>;
    EbsConfiguration?: EbsConfiguration;
    InstanceType: Value<string>;
    WeightedCapacity?: Value<number>;
    constructor(properties: InstanceTypeConfig);
}
export declare class OnDemandProvisioningSpecification {
    AllocationStrategy: Value<string>;
    constructor(properties: OnDemandProvisioningSpecification);
}
export declare class SpotProvisioningSpecification {
    AllocationStrategy?: Value<string>;
    BlockDurationMinutes?: Value<number>;
    TimeoutAction: Value<string>;
    TimeoutDurationMinutes: Value<number>;
    constructor(properties: SpotProvisioningSpecification);
}
export declare class VolumeSpecification {
    Iops?: Value<number>;
    SizeInGB: Value<number>;
    Throughput?: Value<number>;
    VolumeType: Value<string>;
    constructor(properties: VolumeSpecification);
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
    static Configuration: typeof Configuration;
    static EbsBlockDeviceConfig: typeof EbsBlockDeviceConfig;
    static EbsConfiguration: typeof EbsConfiguration;
    static InstanceFleetProvisioningSpecifications: typeof InstanceFleetProvisioningSpecifications;
    static InstanceTypeConfig: typeof InstanceTypeConfig;
    static OnDemandProvisioningSpecification: typeof OnDemandProvisioningSpecification;
    static SpotProvisioningSpecification: typeof SpotProvisioningSpecification;
    static VolumeSpecification: typeof VolumeSpecification;
    constructor(properties: InstanceFleetConfigProperties);
}
