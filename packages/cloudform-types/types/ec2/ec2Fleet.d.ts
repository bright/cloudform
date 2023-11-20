import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AcceleratorCountRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: AcceleratorCountRequest);
}
export declare class AcceleratorTotalMemoryMiBRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: AcceleratorTotalMemoryMiBRequest);
}
export declare class BaselineEbsBandwidthMbpsRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: BaselineEbsBandwidthMbpsRequest);
}
export declare class CapacityRebalance {
    TerminationDelay?: Value<number>;
    ReplacementStrategy?: Value<string>;
    constructor(properties: CapacityRebalance);
}
export declare class CapacityReservationOptionsRequest {
    UsageStrategy?: Value<string>;
    constructor(properties: CapacityReservationOptionsRequest);
}
export declare class FleetLaunchTemplateConfigRequest {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    Overrides?: List<FleetLaunchTemplateOverridesRequest>;
    constructor(properties: FleetLaunchTemplateConfigRequest);
}
export declare class FleetLaunchTemplateOverridesRequest {
    WeightedCapacity?: Value<number>;
    Placement?: Placement;
    Priority?: Value<number>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    InstanceRequirements?: InstanceRequirementsRequest;
    InstanceType?: Value<string>;
    MaxPrice?: Value<string>;
    constructor(properties: FleetLaunchTemplateOverridesRequest);
}
export declare class FleetLaunchTemplateSpecificationRequest {
    LaunchTemplateName?: Value<string>;
    Version: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: FleetLaunchTemplateSpecificationRequest);
}
export declare class InstanceRequirementsRequest {
    LocalStorageTypes?: List<Value<string>>;
    InstanceGenerations?: List<Value<string>>;
    NetworkInterfaceCount?: NetworkInterfaceCountRequest;
    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
    AcceleratorTypes?: List<Value<string>>;
    VCpuCount?: VCpuCountRangeRequest;
    ExcludedInstanceTypes?: List<Value<string>>;
    AcceleratorManufacturers?: List<Value<string>>;
    AllowedInstanceTypes?: List<Value<string>>;
    LocalStorage?: Value<string>;
    CpuManufacturers?: List<Value<string>>;
    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
    AcceleratorCount?: AcceleratorCountRequest;
    BareMetal?: Value<string>;
    RequireHibernateSupport?: Value<boolean>;
    SpotMaxPricePercentageOverLowestPrice?: Value<number>;
    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
    OnDemandMaxPricePercentageOverLowestPrice?: Value<number>;
    AcceleratorNames?: List<Value<string>>;
    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
    BurstablePerformance?: Value<string>;
    MemoryMiB?: MemoryMiBRequest;
    TotalLocalStorageGB?: TotalLocalStorageGBRequest;
    constructor(properties: InstanceRequirementsRequest);
}
export declare class MaintenanceStrategies {
    CapacityRebalance?: CapacityRebalance;
    constructor(properties: MaintenanceStrategies);
}
export declare class MemoryGiBPerVCpuRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: MemoryGiBPerVCpuRequest);
}
export declare class MemoryMiBRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: MemoryMiBRequest);
}
export declare class NetworkBandwidthGbpsRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: NetworkBandwidthGbpsRequest);
}
export declare class NetworkInterfaceCountRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: NetworkInterfaceCountRequest);
}
export declare class OnDemandOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>;
    AllocationStrategy?: Value<string>;
    SingleInstanceType?: Value<boolean>;
    MinTargetCapacity?: Value<number>;
    MaxTotalPrice?: Value<string>;
    CapacityReservationOptions?: CapacityReservationOptionsRequest;
    constructor(properties: OnDemandOptionsRequest);
}
export declare class Placement {
    GroupName?: Value<string>;
    Tenancy?: Value<string>;
    SpreadDomain?: Value<string>;
    PartitionNumber?: Value<number>;
    AvailabilityZone?: Value<string>;
    Affinity?: Value<string>;
    HostId?: Value<string>;
    HostResourceGroupArn?: Value<string>;
    constructor(properties: Placement);
}
export declare class SpotOptionsRequest {
    SingleAvailabilityZone?: Value<boolean>;
    AllocationStrategy?: Value<string>;
    SingleInstanceType?: Value<boolean>;
    MinTargetCapacity?: Value<number>;
    MaxTotalPrice?: Value<string>;
    MaintenanceStrategies?: MaintenanceStrategies;
    InstanceInterruptionBehavior?: Value<string>;
    InstancePoolsToUseCount?: Value<number>;
    constructor(properties: SpotOptionsRequest);
}
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export declare class TargetCapacitySpecificationRequest {
    DefaultTargetCapacityType?: Value<string>;
    TotalTargetCapacity: Value<number>;
    OnDemandTargetCapacity?: Value<number>;
    SpotTargetCapacity?: Value<number>;
    TargetCapacityUnitType?: Value<string>;
    constructor(properties: TargetCapacitySpecificationRequest);
}
export declare class TotalLocalStorageGBRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: TotalLocalStorageGBRequest);
}
export declare class VCpuCountRangeRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: VCpuCountRangeRequest);
}
export interface EC2FleetProperties {
    Context?: Value<string>;
    TargetCapacitySpecification: TargetCapacitySpecificationRequest;
    OnDemandOptions?: OnDemandOptionsRequest;
    Type?: Value<string>;
    ExcessCapacityTerminationPolicy?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    SpotOptions?: SpotOptionsRequest;
    ValidFrom?: Value<string>;
    ReplaceUnhealthyInstances?: Value<boolean>;
    LaunchTemplateConfigs: List<FleetLaunchTemplateConfigRequest>;
    TerminateInstancesWithExpiration?: Value<boolean>;
    ValidUntil?: Value<string>;
}
export default class EC2Fleet extends ResourceBase<EC2FleetProperties> {
    static AcceleratorCountRequest: typeof AcceleratorCountRequest;
    static AcceleratorTotalMemoryMiBRequest: typeof AcceleratorTotalMemoryMiBRequest;
    static BaselineEbsBandwidthMbpsRequest: typeof BaselineEbsBandwidthMbpsRequest;
    static CapacityRebalance: typeof CapacityRebalance;
    static CapacityReservationOptionsRequest: typeof CapacityReservationOptionsRequest;
    static FleetLaunchTemplateConfigRequest: typeof FleetLaunchTemplateConfigRequest;
    static FleetLaunchTemplateOverridesRequest: typeof FleetLaunchTemplateOverridesRequest;
    static FleetLaunchTemplateSpecificationRequest: typeof FleetLaunchTemplateSpecificationRequest;
    static InstanceRequirementsRequest: typeof InstanceRequirementsRequest;
    static MaintenanceStrategies: typeof MaintenanceStrategies;
    static MemoryGiBPerVCpuRequest: typeof MemoryGiBPerVCpuRequest;
    static MemoryMiBRequest: typeof MemoryMiBRequest;
    static NetworkBandwidthGbpsRequest: typeof NetworkBandwidthGbpsRequest;
    static NetworkInterfaceCountRequest: typeof NetworkInterfaceCountRequest;
    static OnDemandOptionsRequest: typeof OnDemandOptionsRequest;
    static Placement: typeof Placement;
    static SpotOptionsRequest: typeof SpotOptionsRequest;
    static TagSpecification: typeof TagSpecification;
    static TargetCapacitySpecificationRequest: typeof TargetCapacitySpecificationRequest;
    static TotalLocalStorageGBRequest: typeof TotalLocalStorageGBRequest;
    static VCpuCountRangeRequest: typeof VCpuCountRangeRequest;
    constructor(properties: EC2FleetProperties);
}
