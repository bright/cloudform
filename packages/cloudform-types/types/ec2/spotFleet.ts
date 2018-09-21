/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ClassicLoadBalancer {
    Name!: Value<string>

    constructor(properties: ClassicLoadBalancer) {
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

export class IamInstanceProfileSpecification {
    Arn?: Value<string>

    constructor(properties: IamInstanceProfileSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceNetworkInterfaceSpecification {
    AssociatePublicIpAddress?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Description?: Value<string>
    DeviceIndex?: Value<number>
    Groups?: List<Value<string>>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: List<InstanceIpv6Address>
    NetworkInterfaceId?: Value<string>
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>
    SecondaryPrivateIpAddressCount?: Value<number>
    SubnetId?: Value<string>

    constructor(properties: InstanceNetworkInterfaceSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotFleetTagSpecification {
    ResourceType?: Value<string>

    constructor(properties: SpotFleetTagSpecification) {
        Object.assign(this, properties)
    }
}

export class PrivateIpAddressSpecification {
    Primary?: Value<boolean>
    PrivateIpAddress!: Value<string>

    constructor(properties: PrivateIpAddressSpecification) {
        Object.assign(this, properties)
    }
}

export class SpotFleetLaunchSpecification {
    BlockDeviceMappings?: List<BlockDeviceMapping>
    EbsOptimized?: Value<boolean>
    IamInstanceProfile?: IamInstanceProfileSpecification
    ImageId!: Value<string>
    InstanceType!: Value<string>
    KernelId?: Value<string>
    KeyName?: Value<string>
    Monitoring?: SpotFleetMonitoring
    NetworkInterfaces?: List<InstanceNetworkInterfaceSpecification>
    Placement?: SpotPlacement
    RamdiskId?: Value<string>
    SecurityGroups?: List<GroupIdentifier>
    SpotPrice?: Value<string>
    SubnetId?: Value<string>
    TagSpecifications?: List<SpotFleetTagSpecification>
    UserData?: Value<string>
    WeightedCapacity?: Value<number>

    constructor(properties: SpotFleetLaunchSpecification) {
        Object.assign(this, properties)
    }
}

export class ClassicLoadBalancersConfig {
    ClassicLoadBalancers!: List<ClassicLoadBalancer>

    constructor(properties: ClassicLoadBalancersConfig) {
        Object.assign(this, properties)
    }
}

export class SpotPlacement {
    AvailabilityZone?: Value<string>
    GroupName?: Value<string>
    Tenancy?: Value<string>

    constructor(properties: SpotPlacement) {
        Object.assign(this, properties)
    }
}

export class SpotFleetRequestConfigData {
    AllocationStrategy?: Value<string>
    ExcessCapacityTerminationPolicy?: Value<string>
    IamFleetRole!: Value<string>
    InstanceInterruptionBehavior?: Value<string>
    LaunchSpecifications?: List<SpotFleetLaunchSpecification>
    LaunchTemplateConfigs?: List<LaunchTemplateConfig>
    LoadBalancersConfig?: LoadBalancersConfig
    ReplaceUnhealthyInstances?: Value<boolean>
    SpotPrice?: Value<string>
    TargetCapacity!: Value<number>
    TerminateInstancesWithExpiration?: Value<boolean>
    Type?: Value<string>
    ValidFrom?: Value<string>
    ValidUntil?: Value<string>

    constructor(properties: SpotFleetRequestConfigData) {
        Object.assign(this, properties)
    }
}

export class EbsBlockDevice {
    DeleteOnTermination?: Value<boolean>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: EbsBlockDevice) {
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

export class FleetLaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version!: Value<string>

    constructor(properties: FleetLaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class TargetGroup {
    Arn!: Value<string>

    constructor(properties: TargetGroup) {
        Object.assign(this, properties)
    }
}

export class InstanceIpv6Address {
    Ipv6Address!: Value<string>

    constructor(properties: InstanceIpv6Address) {
        Object.assign(this, properties)
    }
}

export class TargetGroupsConfig {
    TargetGroups!: List<TargetGroup>

    constructor(properties: TargetGroupsConfig) {
        Object.assign(this, properties)
    }
}

export class GroupIdentifier {
    GroupId!: Value<string>

    constructor(properties: GroupIdentifier) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateOverrides {
    AvailabilityZone?: Value<string>
    InstanceType?: Value<string>
    SpotPrice?: Value<string>
    SubnetId?: Value<string>
    WeightedCapacity?: Value<number>

    constructor(properties: LaunchTemplateOverrides) {
        Object.assign(this, properties)
    }
}

export class SpotFleetMonitoring {
    Enabled?: Value<boolean>

    constructor(properties: SpotFleetMonitoring) {
        Object.assign(this, properties)
    }
}

export class BlockDeviceMapping {
    DeviceName!: Value<string>
    Ebs?: EbsBlockDevice
    NoDevice?: Value<string>
    VirtualName?: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData
}

export default class SpotFleet extends ResourceBase {
    static ClassicLoadBalancer = ClassicLoadBalancer
    static LaunchTemplateConfig = LaunchTemplateConfig
    static IamInstanceProfileSpecification = IamInstanceProfileSpecification
    static InstanceNetworkInterfaceSpecification = InstanceNetworkInterfaceSpecification
    static SpotFleetTagSpecification = SpotFleetTagSpecification
    static PrivateIpAddressSpecification = PrivateIpAddressSpecification
    static SpotFleetLaunchSpecification = SpotFleetLaunchSpecification
    static ClassicLoadBalancersConfig = ClassicLoadBalancersConfig
    static SpotPlacement = SpotPlacement
    static SpotFleetRequestConfigData = SpotFleetRequestConfigData
    static EbsBlockDevice = EbsBlockDevice
    static LoadBalancersConfig = LoadBalancersConfig
    static FleetLaunchTemplateSpecification = FleetLaunchTemplateSpecification
    static TargetGroup = TargetGroup
    static InstanceIpv6Address = InstanceIpv6Address
    static TargetGroupsConfig = TargetGroupsConfig
    static GroupIdentifier = GroupIdentifier
    static LaunchTemplateOverrides = LaunchTemplateOverrides
    static SpotFleetMonitoring = SpotFleetMonitoring
    static BlockDeviceMapping = BlockDeviceMapping

    constructor(properties?: SpotFleetProperties) {
        super('AWS::EC2::SpotFleet', properties)
    }
}
