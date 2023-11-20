import { ResourceBase } from '../resource';
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
export declare class InstanceRequirements {
    LocalStorageTypes?: List<Value<string>>;
    InstanceGenerations?: List<Value<string>>;
    NetworkInterfaceCount?: NetworkInterfaceCountRequest;
    AcceleratorTypes?: List<Value<string>>;
    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
    AcceleratorManufacturers?: List<Value<string>>;
    ExcludedInstanceTypes?: List<Value<string>>;
    VCpuCount?: VCpuCountRequest;
    AllowedInstanceTypes?: List<Value<string>>;
    LocalStorage?: Value<string>;
    CpuManufacturers?: List<Value<string>>;
    AcceleratorCount?: AcceleratorCountRequest;
    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
    BareMetal?: Value<string>;
    RequireHibernateSupport?: Value<boolean>;
    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
    SpotMaxPricePercentageOverLowestPrice?: Value<number>;
    AcceleratorNames?: List<Value<string>>;
    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
    OnDemandMaxPricePercentageOverLowestPrice?: Value<number>;
    BurstablePerformance?: Value<string>;
    MemoryMiB?: MemoryMiBRequest;
    TotalLocalStorageGB?: TotalLocalStorageGBRequest;
    constructor(properties: InstanceRequirements);
}
export declare class InstancesDistribution {
    OnDemandAllocationStrategy?: Value<string>;
    OnDemandBaseCapacity?: Value<number>;
    OnDemandPercentageAboveBaseCapacity?: Value<number>;
    SpotInstancePools?: Value<number>;
    SpotAllocationStrategy?: Value<string>;
    SpotMaxPrice?: Value<string>;
    constructor(properties: InstancesDistribution);
}
export declare class LaunchTemplate {
    LaunchTemplateSpecification: LaunchTemplateSpecification;
    Overrides?: List<LaunchTemplateOverrides>;
    constructor(properties: LaunchTemplate);
}
export declare class LaunchTemplateOverrides {
    LaunchTemplateSpecification?: LaunchTemplateSpecification;
    WeightedCapacity?: Value<string>;
    InstanceRequirements?: InstanceRequirements;
    InstanceType?: Value<string>;
    constructor(properties: LaunchTemplateOverrides);
}
export declare class LaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>;
    Version: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class LifecycleHookSpecification {
    LifecycleHookName: Value<string>;
    LifecycleTransition: Value<string>;
    HeartbeatTimeout?: Value<number>;
    NotificationMetadata?: Value<string>;
    DefaultResult?: Value<string>;
    NotificationTargetARN?: Value<string>;
    RoleARN?: Value<string>;
    constructor(properties: LifecycleHookSpecification);
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
export declare class MetricsCollection {
    Metrics?: List<Value<string>>;
    Granularity: Value<string>;
    constructor(properties: MetricsCollection);
}
export declare class MixedInstancesPolicy {
    InstancesDistribution?: InstancesDistribution;
    LaunchTemplate: LaunchTemplate;
    constructor(properties: MixedInstancesPolicy);
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
export declare class NotificationConfiguration {
    TopicARN: List<Value<string>>;
    NotificationTypes?: List<Value<string>>;
    constructor(properties: NotificationConfiguration);
}
export declare class TagProperty {
    Value: Value<string>;
    Key: Value<string>;
    PropagateAtLaunch: Value<boolean>;
    constructor(properties: TagProperty);
}
export declare class TotalLocalStorageGBRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: TotalLocalStorageGBRequest);
}
export declare class VCpuCountRequest {
    Min?: Value<number>;
    Max?: Value<number>;
    constructor(properties: VCpuCountRequest);
}
export interface AutoScalingGroupProperties {
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>;
    LoadBalancerNames?: List<Value<string>>;
    LaunchConfigurationName?: Value<string>;
    ServiceLinkedRoleARN?: Value<string>;
    TargetGroupARNs?: List<Value<string>>;
    Cooldown?: Value<string>;
    NotificationConfigurations?: List<NotificationConfiguration>;
    DesiredCapacity?: Value<string>;
    HealthCheckGracePeriod?: Value<number>;
    DefaultInstanceWarmup?: Value<number>;
    NewInstancesProtectedFromScaleIn?: Value<boolean>;
    LaunchTemplate?: LaunchTemplateSpecification;
    MixedInstancesPolicy?: MixedInstancesPolicy;
    VPCZoneIdentifier?: List<Value<string>>;
    Tags?: List<TagProperty>;
    Context?: Value<string>;
    CapacityRebalance?: Value<boolean>;
    InstanceId?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    MetricsCollection?: List<MetricsCollection>;
    MaxSize: Value<string>;
    MinSize: Value<string>;
    TerminationPolicies?: List<Value<string>>;
    AutoScalingGroupName?: Value<string>;
    DesiredCapacityType?: Value<string>;
    PlacementGroup?: Value<string>;
    HealthCheckType?: Value<string>;
    MaxInstanceLifetime?: Value<number>;
}
export default class AutoScalingGroup extends ResourceBase<AutoScalingGroupProperties> {
    static AcceleratorCountRequest: typeof AcceleratorCountRequest;
    static AcceleratorTotalMemoryMiBRequest: typeof AcceleratorTotalMemoryMiBRequest;
    static BaselineEbsBandwidthMbpsRequest: typeof BaselineEbsBandwidthMbpsRequest;
    static InstanceRequirements: typeof InstanceRequirements;
    static InstancesDistribution: typeof InstancesDistribution;
    static LaunchTemplate: typeof LaunchTemplate;
    static LaunchTemplateOverrides: typeof LaunchTemplateOverrides;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static LifecycleHookSpecification: typeof LifecycleHookSpecification;
    static MemoryGiBPerVCpuRequest: typeof MemoryGiBPerVCpuRequest;
    static MemoryMiBRequest: typeof MemoryMiBRequest;
    static MetricsCollection: typeof MetricsCollection;
    static MixedInstancesPolicy: typeof MixedInstancesPolicy;
    static NetworkBandwidthGbpsRequest: typeof NetworkBandwidthGbpsRequest;
    static NetworkInterfaceCountRequest: typeof NetworkInterfaceCountRequest;
    static NotificationConfiguration: typeof NotificationConfiguration;
    static TagProperty: typeof TagProperty;
    static TotalLocalStorageGBRequest: typeof TotalLocalStorageGBRequest;
    static VCpuCountRequest: typeof VCpuCountRequest;
    constructor(properties: AutoScalingGroupProperties);
}
