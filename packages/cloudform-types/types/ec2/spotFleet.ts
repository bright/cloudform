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

export class BlockDeviceMapping {
    Ebs?: EbsBlockDevice
    NoDevice?: Value<string>
    VirtualName?: Value<string>
    DeviceName!: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class ClassicLoadBalancer {
    Name!: Value<string>

    constructor(properties: ClassicLoadBalancer) {
        Object.assign(this, properties)
    }
}

export class ClassicLoadBalancersConfig {
    ClassicLoadBalancers!: List<ClassicLoadBalancer>

    constructor(properties: ClassicLoadBalancersConfig) {
        Object.assign(this, properties)
    }
}

export class EbsBlockDevice {
    SnapshotId?: Value<string>
    VolumeType?: Value<string>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: EbsBlockDevice) {
        Object.assign(this, properties)
    }
}

export class FleetLaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>
    Version!: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: FleetLaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class GroupIdentifier {
    GroupId!: Value<string>

    constructor(properties: GroupIdentifier) {
        Object.assign(this, properties)
    }
}

export class IamInstanceProfileSpecification {
    Arn?: Value<string>

    constructor(properties: IamInstanceProfileSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceIpv6Address {
    Ipv6Address!: Value<string>

    constructor(properties: InstanceIpv6Address) {
        Object.assign(this, properties)
    }
}

export class InstanceNetworkInterfaceSpecification {
    Description?: Value<string>
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>
    SecondaryPrivateIpAddressCount?: Value<number>
    DeviceIndex?: Value<number>
    Groups?: List<Value<string>>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: List<InstanceIpv6Address>
    SubnetId?: Value<string>
    AssociatePublicIpAddress?: Value<boolean>
    NetworkInterfaceId?: Value<string>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: InstanceNetworkInterfaceSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceRequirementsRequest {
    LocalStorageTypes?: List<Value<string>>
    InstanceGenerations?: List<Value<string>>
    NetworkInterfaceCount?: NetworkInterfaceCountRequest
    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest
    AcceleratorTypes?: List<Value<string>>
    VCpuCount?: VCpuCountRangeRequest
    ExcludedInstanceTypes?: List<Value<string>>
    AcceleratorManufacturers?: List<Value<string>>
    AllowedInstanceTypes?: List<Value<string>>
    LocalStorage?: Value<string>
    CpuManufacturers?: List<Value<string>>
    NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest
    AcceleratorCount?: AcceleratorCountRequest
    BareMetal?: Value<string>
    RequireHibernateSupport?: Value<boolean>
    SpotMaxPricePercentageOverLowestPrice?: Value<number>
    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest
    OnDemandMaxPricePercentageOverLowestPrice?: Value<number>
    AcceleratorNames?: List<Value<string>>
    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest
    BurstablePerformance?: Value<string>
    MemoryMiB?: MemoryMiBRequest
    TotalLocalStorageGB?: TotalLocalStorageGBRequest

    constructor(properties: InstanceRequirementsRequest) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateConfig {
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecification
    Overrides?: List<LaunchTemplateOverrides>

    constructor(properties: LaunchTemplateConfig) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateOverrides {
    SpotPrice?: Value<string>
    WeightedCapacity?: Value<number>
    Priority?: Value<number>
    AvailabilityZone?: Value<string>
    SubnetId?: Value<string>
    InstanceRequirements?: InstanceRequirementsRequest
    InstanceType?: Value<string>

    constructor(properties: LaunchTemplateOverrides) {
        Object.assign(this, properties)
    }
}

export class LoadBalancersConfig {
    ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig
    TargetGroupsConfig?: TargetGroupsConfig

    constructor(properties: LoadBalancersConfig) {
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

export class PrivateIpAddressSpecification {
    PrivateIpAddress!: Value<string>
    Primary?: Value<boolean>

    constructor(properties: PrivateIpAddressSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotCapacityRebalance {
    TerminationDelay?: Value<number>
    ReplacementStrategy?: Value<string>

    constructor(properties: SpotCapacityRebalance) {
        Object.assign(this, properties)
    }
}

export class SpotFleetLaunchSpecification {
    SecurityGroups?: List<GroupIdentifier>
    TagSpecifications?: List<SpotFleetTagSpecification>
    UserData?: Value<string>
    BlockDeviceMappings?: List<BlockDeviceMapping>
    IamInstanceProfile?: IamInstanceProfileSpecification
    KernelId?: Value<string>
    SubnetId?: Value<string>
    EbsOptimized?: Value<boolean>
    KeyName?: Value<string>
    RamdiskId?: Value<string>
    SpotPrice?: Value<string>
    WeightedCapacity?: Value<number>
    Placement?: SpotPlacement
    NetworkInterfaces?: List<InstanceNetworkInterfaceSpecification>
    ImageId!: Value<string>
    InstanceRequirements?: InstanceRequirementsRequest
    InstanceType?: Value<string>
    Monitoring?: SpotFleetMonitoring

    constructor(properties: SpotFleetLaunchSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotFleetMonitoring {
    Enabled?: Value<boolean>

    constructor(properties: SpotFleetMonitoring) {
        Object.assign(this, properties)
    }
}

export class SpotFleetRequestConfigData {
    Context?: Value<string>
    SpotMaxTotalPrice?: Value<string>
    ExcessCapacityTerminationPolicy?: Value<string>
    TagSpecifications?: List<SpotFleetTagSpecification>
    InstancePoolsToUseCount?: Value<number>
    LaunchTemplateConfigs?: List<LaunchTemplateConfig>
    TargetCapacityUnitType?: Value<string>
    IamFleetRole!: Value<string>
    SpotMaintenanceStrategies?: SpotMaintenanceStrategies
    TerminateInstancesWithExpiration?: Value<boolean>
    ValidUntil?: Value<string>
    OnDemandMaxTotalPrice?: Value<string>
    OnDemandAllocationStrategy?: Value<string>
    SpotPrice?: Value<string>
    AllocationStrategy?: Value<string>
    OnDemandTargetCapacity?: Value<number>
    Type?: Value<string>
    LaunchSpecifications?: List<SpotFleetLaunchSpecification>
    InstanceInterruptionBehavior?: Value<string>
    LoadBalancersConfig?: LoadBalancersConfig
    ValidFrom?: Value<string>
    ReplaceUnhealthyInstances?: Value<boolean>
    TargetCapacity!: Value<number>

    constructor(properties: SpotFleetRequestConfigData) {
        Object.assign(this, properties)
    }
}

export class SpotFleetTagSpecification {
    ResourceType?: Value<string>
    Tags?: List<ResourceTag>

    constructor(properties: SpotFleetTagSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotMaintenanceStrategies {
    CapacityRebalance?: SpotCapacityRebalance

    constructor(properties: SpotMaintenanceStrategies) {
        Object.assign(this, properties)
    }
}

export class SpotPlacement {
    GroupName?: Value<string>
    Tenancy?: Value<string>
    AvailabilityZone?: Value<string>

    constructor(properties: SpotPlacement) {
        Object.assign(this, properties)
    }
}

export class TargetGroup {
    Arn!: Value<string>

    constructor(properties: TargetGroup) {
        Object.assign(this, properties)
    }
}

export class TargetGroupsConfig {
    TargetGroups!: List<TargetGroup>

    constructor(properties: TargetGroupsConfig) {
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

export class VCpuCountRangeRequest {
    Min?: Value<number>
    Max?: Value<number>

    constructor(properties: VCpuCountRangeRequest) {
        Object.assign(this, properties)
    }
}

export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData
}

export default class SpotFleet extends ResourceBase<SpotFleetProperties> {
    static AcceleratorCountRequest = AcceleratorCountRequest
    static AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest
    static BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest
    static BlockDeviceMapping = BlockDeviceMapping
    static ClassicLoadBalancer = ClassicLoadBalancer
    static ClassicLoadBalancersConfig = ClassicLoadBalancersConfig
    static EbsBlockDevice = EbsBlockDevice
    static FleetLaunchTemplateSpecification = FleetLaunchTemplateSpecification
    static GroupIdentifier = GroupIdentifier
    static IamInstanceProfileSpecification = IamInstanceProfileSpecification
    static InstanceIpv6Address = InstanceIpv6Address
    static InstanceNetworkInterfaceSpecification = InstanceNetworkInterfaceSpecification
    static InstanceRequirementsRequest = InstanceRequirementsRequest
    static LaunchTemplateConfig = LaunchTemplateConfig
    static LaunchTemplateOverrides = LaunchTemplateOverrides
    static LoadBalancersConfig = LoadBalancersConfig
    static MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest
    static MemoryMiBRequest = MemoryMiBRequest
    static NetworkBandwidthGbpsRequest = NetworkBandwidthGbpsRequest
    static NetworkInterfaceCountRequest = NetworkInterfaceCountRequest
    static PrivateIpAddressSpecification = PrivateIpAddressSpecification
    static SpotCapacityRebalance = SpotCapacityRebalance
    static SpotFleetLaunchSpecification = SpotFleetLaunchSpecification
    static SpotFleetMonitoring = SpotFleetMonitoring
    static SpotFleetRequestConfigData = SpotFleetRequestConfigData
    static SpotFleetTagSpecification = SpotFleetTagSpecification
    static SpotMaintenanceStrategies = SpotMaintenanceStrategies
    static SpotPlacement = SpotPlacement
    static TargetGroup = TargetGroup
    static TargetGroupsConfig = TargetGroupsConfig
    static TotalLocalStorageGBRequest = TotalLocalStorageGBRequest
    static VCpuCountRangeRequest = VCpuCountRangeRequest

    constructor(properties: SpotFleetProperties) {
        super('AWS::EC2::SpotFleet', properties)
    }
}
