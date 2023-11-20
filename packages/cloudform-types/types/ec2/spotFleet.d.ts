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
export declare class BlockDeviceMapping {
    Ebs?: EbsBlockDevice;
    NoDevice?: Value<string>;
    VirtualName?: Value<string>;
    DeviceName: Value<string>;
    constructor(properties: BlockDeviceMapping);
}
export declare class ClassicLoadBalancer {
    Name: Value<string>;
    constructor(properties: ClassicLoadBalancer);
}
export declare class ClassicLoadBalancersConfig {
    ClassicLoadBalancers: List<ClassicLoadBalancer>;
    constructor(properties: ClassicLoadBalancersConfig);
}
export declare class EbsBlockDevice {
    SnapshotId?: Value<string>;
    VolumeType?: Value<string>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: EbsBlockDevice);
}
export declare class FleetLaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>;
    Version: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: FleetLaunchTemplateSpecification);
}
export declare class GroupIdentifier {
    GroupId: Value<string>;
    constructor(properties: GroupIdentifier);
}
export declare class IamInstanceProfileSpecification {
    Arn?: Value<string>;
    constructor(properties: IamInstanceProfileSpecification);
}
export declare class InstanceIpv6Address {
    Ipv6Address: Value<string>;
    constructor(properties: InstanceIpv6Address);
}
export declare class InstanceNetworkInterfaceSpecification {
    Description?: Value<string>;
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>;
    SecondaryPrivateIpAddressCount?: Value<number>;
    DeviceIndex?: Value<number>;
    Groups?: List<Value<string>>;
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: List<InstanceIpv6Address>;
    SubnetId?: Value<string>;
    AssociatePublicIpAddress?: Value<boolean>;
    NetworkInterfaceId?: Value<string>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: InstanceNetworkInterfaceSpecification);
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
export declare class LaunchTemplateConfig {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
    Overrides?: List<LaunchTemplateOverrides>;
    constructor(properties: LaunchTemplateConfig);
}
export declare class LaunchTemplateOverrides {
    SpotPrice?: Value<string>;
    WeightedCapacity?: Value<number>;
    Priority?: Value<number>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    InstanceRequirements?: InstanceRequirementsRequest;
    InstanceType?: Value<string>;
    constructor(properties: LaunchTemplateOverrides);
}
export declare class LoadBalancersConfig {
    ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;
    TargetGroupsConfig?: TargetGroupsConfig;
    constructor(properties: LoadBalancersConfig);
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
export declare class PrivateIpAddressSpecification {
    PrivateIpAddress: Value<string>;
    Primary?: Value<boolean>;
    constructor(properties: PrivateIpAddressSpecification);
}
export declare class SpotCapacityRebalance {
    TerminationDelay?: Value<number>;
    ReplacementStrategy?: Value<string>;
    constructor(properties: SpotCapacityRebalance);
}
export declare class SpotFleetLaunchSpecification {
    SecurityGroups?: List<GroupIdentifier>;
    TagSpecifications?: List<SpotFleetTagSpecification>;
    UserData?: Value<string>;
    BlockDeviceMappings?: List<BlockDeviceMapping>;
    IamInstanceProfile?: IamInstanceProfileSpecification;
    KernelId?: Value<string>;
    SubnetId?: Value<string>;
    EbsOptimized?: Value<boolean>;
    KeyName?: Value<string>;
    RamdiskId?: Value<string>;
    SpotPrice?: Value<string>;
    WeightedCapacity?: Value<number>;
    Placement?: SpotPlacement;
    NetworkInterfaces?: List<InstanceNetworkInterfaceSpecification>;
    ImageId: Value<string>;
    InstanceRequirements?: InstanceRequirementsRequest;
    InstanceType?: Value<string>;
    Monitoring?: SpotFleetMonitoring;
    constructor(properties: SpotFleetLaunchSpecification);
}
export declare class SpotFleetMonitoring {
    Enabled?: Value<boolean>;
    constructor(properties: SpotFleetMonitoring);
}
export declare class SpotFleetRequestConfigData {
    Context?: Value<string>;
    SpotMaxTotalPrice?: Value<string>;
    ExcessCapacityTerminationPolicy?: Value<string>;
    TagSpecifications?: List<SpotFleetTagSpecification>;
    InstancePoolsToUseCount?: Value<number>;
    LaunchTemplateConfigs?: List<LaunchTemplateConfig>;
    TargetCapacityUnitType?: Value<string>;
    IamFleetRole: Value<string>;
    SpotMaintenanceStrategies?: SpotMaintenanceStrategies;
    TerminateInstancesWithExpiration?: Value<boolean>;
    ValidUntil?: Value<string>;
    OnDemandMaxTotalPrice?: Value<string>;
    OnDemandAllocationStrategy?: Value<string>;
    SpotPrice?: Value<string>;
    AllocationStrategy?: Value<string>;
    OnDemandTargetCapacity?: Value<number>;
    Type?: Value<string>;
    LaunchSpecifications?: List<SpotFleetLaunchSpecification>;
    InstanceInterruptionBehavior?: Value<string>;
    LoadBalancersConfig?: LoadBalancersConfig;
    ValidFrom?: Value<string>;
    ReplaceUnhealthyInstances?: Value<boolean>;
    TargetCapacity: Value<number>;
    constructor(properties: SpotFleetRequestConfigData);
}
export declare class SpotFleetTagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: SpotFleetTagSpecification);
}
export declare class SpotMaintenanceStrategies {
    CapacityRebalance?: SpotCapacityRebalance;
    constructor(properties: SpotMaintenanceStrategies);
}
export declare class SpotPlacement {
    GroupName?: Value<string>;
    Tenancy?: Value<string>;
    AvailabilityZone?: Value<string>;
    constructor(properties: SpotPlacement);
}
export declare class TargetGroup {
    Arn: Value<string>;
    constructor(properties: TargetGroup);
}
export declare class TargetGroupsConfig {
    TargetGroups: List<TargetGroup>;
    constructor(properties: TargetGroupsConfig);
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
export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData;
}
export default class SpotFleet extends ResourceBase<SpotFleetProperties> {
    static AcceleratorCountRequest: typeof AcceleratorCountRequest;
    static AcceleratorTotalMemoryMiBRequest: typeof AcceleratorTotalMemoryMiBRequest;
    static BaselineEbsBandwidthMbpsRequest: typeof BaselineEbsBandwidthMbpsRequest;
    static BlockDeviceMapping: typeof BlockDeviceMapping;
    static ClassicLoadBalancer: typeof ClassicLoadBalancer;
    static ClassicLoadBalancersConfig: typeof ClassicLoadBalancersConfig;
    static EbsBlockDevice: typeof EbsBlockDevice;
    static FleetLaunchTemplateSpecification: typeof FleetLaunchTemplateSpecification;
    static GroupIdentifier: typeof GroupIdentifier;
    static IamInstanceProfileSpecification: typeof IamInstanceProfileSpecification;
    static InstanceIpv6Address: typeof InstanceIpv6Address;
    static InstanceNetworkInterfaceSpecification: typeof InstanceNetworkInterfaceSpecification;
    static InstanceRequirementsRequest: typeof InstanceRequirementsRequest;
    static LaunchTemplateConfig: typeof LaunchTemplateConfig;
    static LaunchTemplateOverrides: typeof LaunchTemplateOverrides;
    static LoadBalancersConfig: typeof LoadBalancersConfig;
    static MemoryGiBPerVCpuRequest: typeof MemoryGiBPerVCpuRequest;
    static MemoryMiBRequest: typeof MemoryMiBRequest;
    static NetworkBandwidthGbpsRequest: typeof NetworkBandwidthGbpsRequest;
    static NetworkInterfaceCountRequest: typeof NetworkInterfaceCountRequest;
    static PrivateIpAddressSpecification: typeof PrivateIpAddressSpecification;
    static SpotCapacityRebalance: typeof SpotCapacityRebalance;
    static SpotFleetLaunchSpecification: typeof SpotFleetLaunchSpecification;
    static SpotFleetMonitoring: typeof SpotFleetMonitoring;
    static SpotFleetRequestConfigData: typeof SpotFleetRequestConfigData;
    static SpotFleetTagSpecification: typeof SpotFleetTagSpecification;
    static SpotMaintenanceStrategies: typeof SpotMaintenanceStrategies;
    static SpotPlacement: typeof SpotPlacement;
    static TargetGroup: typeof TargetGroup;
    static TargetGroupsConfig: typeof TargetGroupsConfig;
    static TotalLocalStorageGBRequest: typeof TotalLocalStorageGBRequest;
    static VCpuCountRangeRequest: typeof VCpuCountRangeRequest;
    constructor(properties: SpotFleetProperties);
}
