/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AcceleratorCountRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: AcceleratorCountRequest) {
        Object.assign(this, properties)
    }
}

export class AcceleratorTotalMemoryMiBRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: AcceleratorTotalMemoryMiBRequest) {
        Object.assign(this, properties)
    }
}

export class BaselineEbsBandwidthMbpsRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: BaselineEbsBandwidthMbpsRequest) {
        Object.assign(this, properties)
    }
}

export class InstanceRequirements {
    LocalStorageTypes?: List<Value<string>>
    InstanceGenerations?: List<Value<string>>
    NetworkInterfaceCount?: NetworkInterfaceCountRequest
    AcceleratorTypes?: List<Value<string>>
    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest
    AcceleratorManufacturers?: List<Value<string>>
    ExcludedInstanceTypes?: List<Value<string>>
    VCpuCount?: VCpuCountRequest
    AllowedInstanceTypes?: List<Value<string>>
    LocalStorage?: Value<string>
    CpuManufacturers?: List<Value<string>>
    AcceleratorCount?: AcceleratorCountRequest
    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest
    BareMetal?: Value<string>
    RequireHibernateSupport?: Value<boolean>
    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest
    SpotMaxPricePercentageOverLowestPrice?: Value<number>
    AcceleratorNames?: List<Value<string>>
    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest
    OnDemandMaxPricePercentageOverLowestPrice?: Value<number>
    BurstablePerformance?: Value<string>
    MemoryMiB?: MemoryMiBRequest
    TotalLocalStorageGB?: TotalLocalStorageGBRequest

    constructor(properties: InstanceRequirements) {
        Object.assign(this, properties)
    }
}

export class InstancesDistribution {
    OnDemandAllocationStrategy?: Value<string>
    OnDemandBaseCapacity?: Value<number>
    OnDemandPercentageAboveBaseCapacity?: Value<number>
    SpotInstancePools?: Value<number>
    SpotAllocationStrategy?: Value<string>
    SpotMaxPrice?: Value<string>

    constructor(properties: InstancesDistribution) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplate {
    LaunchTemplateSpecification!: LaunchTemplateSpecification
    Overrides?: List<LaunchTemplateOverrides>

    constructor(properties: LaunchTemplate) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateOverrides {
    LaunchTemplateSpecification?: LaunchTemplateSpecification
    WeightedCapacity?: Value<string>
    InstanceRequirements?: InstanceRequirements
    InstanceType?: Value<string>

    constructor(properties: LaunchTemplateOverrides) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>
    Version!: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class LifecycleHookSpecification {
    LifecycleHookName!: Value<string>
    LifecycleTransition!: Value<string>
    HeartbeatTimeout?: Value<number>
    NotificationMetadata?: Value<string>
    DefaultResult?: Value<string>
    NotificationTargetARN?: Value<string>
    RoleARN?: Value<string>

    constructor(properties: LifecycleHookSpecification) {
        Object.assign(this, properties)
    }
}

export class MemoryGiBPerVCpuRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: MemoryGiBPerVCpuRequest) {
        Object.assign(this, properties)
    }
}

export class MemoryMiBRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: MemoryMiBRequest) {
        Object.assign(this, properties)
    }
}

export class MetricsCollection {
    Metrics?: List<Value<string>>
    Granularity!: Value<string>

    constructor(properties: MetricsCollection) {
        Object.assign(this, properties)
    }
}

export class MixedInstancesPolicy {
    InstancesDistribution?: InstancesDistribution
    LaunchTemplate!: LaunchTemplate

    constructor(properties: MixedInstancesPolicy) {
        Object.assign(this, properties)
    }
}

export class NetworkBandwidthGbpsRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: NetworkBandwidthGbpsRequest) {
        Object.assign(this, properties)
    }
}

export class NetworkInterfaceCountRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: NetworkInterfaceCountRequest) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {
    TopicARN!: List<Value<string>>
    NotificationTypes?: List<Value<string>>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class TagProperty {
    Value!: Value<string>
    Key!: Value<string>
    PropagateAtLaunch!: Value<boolean>

    constructor(properties: TagProperty) {
        Object.assign(this, properties)
    }
}

export class TotalLocalStorageGBRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: TotalLocalStorageGBRequest) {
        Object.assign(this, properties)
    }
}

export class VCpuCountRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: VCpuCountRequest) {
        Object.assign(this, properties)
    }
}

export interface AutoScalingGroupProperties {
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>
    LoadBalancerNames?: List<Value<string>>
    LaunchConfigurationName?: Value<string>
    ServiceLinkedRoleARN?: Value<string>
    TargetGroupARNs?: List<Value<string>>
    Cooldown?: Value<string>
    NotificationConfigurations?: List<NotificationConfiguration>
    DesiredCapacity?: Value<string>
    HealthCheckGracePeriod?: Value<number>
    DefaultInstanceWarmup?: Value<number>
    NewInstancesProtectedFromScaleIn?: Value<boolean>
    LaunchTemplate?: LaunchTemplateSpecification
    MixedInstancesPolicy?: MixedInstancesPolicy
    VPCZoneIdentifier?: List<Value<string>>
    Tags?: List<TagProperty>
    Context?: Value<string>
    CapacityRebalance?: Value<boolean>
    InstanceId?: Value<string>
    AvailabilityZones?: List<Value<string>>
    MetricsCollection?: List<MetricsCollection>
    MaxSize: Value<string>
    MinSize: Value<string>
    TerminationPolicies?: List<Value<string>>
    AutoScalingGroupName?: Value<string>
    DesiredCapacityType?: Value<string>
    PlacementGroup?: Value<string>
    HealthCheckType?: Value<string>
    MaxInstanceLifetime?: Value<number>
}

export default class AutoScalingGroup extends ResourceBase<AutoScalingGroupProperties> {
    static AcceleratorCountRequest = AcceleratorCountRequest
    static AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest
    static BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest
    static InstanceRequirements = InstanceRequirements
    static InstancesDistribution = InstancesDistribution
    static LaunchTemplate = LaunchTemplate
    static LaunchTemplateOverrides = LaunchTemplateOverrides
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static LifecycleHookSpecification = LifecycleHookSpecification
    static MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest
    static MemoryMiBRequest = MemoryMiBRequest
    static MetricsCollection = MetricsCollection
    static MixedInstancesPolicy = MixedInstancesPolicy
    static NetworkBandwidthGbpsRequest = NetworkBandwidthGbpsRequest
    static NetworkInterfaceCountRequest = NetworkInterfaceCountRequest
    static NotificationConfiguration = NotificationConfiguration
    static TagProperty = TagProperty
    static TotalLocalStorageGBRequest = TotalLocalStorageGBRequest
    static VCpuCountRequest = VCpuCountRequest

    constructor(properties: AutoScalingGroupProperties) {
        super('AWS::AutoScaling::AutoScalingGroup', properties)
    }
}
