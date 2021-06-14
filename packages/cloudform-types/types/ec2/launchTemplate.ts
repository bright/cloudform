/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class BlockDeviceMapping {
    NoDevice?: Value<string>
    VirtualName?: Value<string>
    DeviceName?: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class SpotOptions {
    SpotInstanceType?: Value<string>
    InstanceInterruptionBehavior?: Value<string>
    MaxPrice?: Value<string>
    BlockDurationMinutes?: Value<number>
    ValidUntil?: Value<string>

    constructor(properties: SpotOptions) {
        Object.assign(this, properties)
    }
}

export class ElasticGpuSpecification {
    Type?: Value<string>

    constructor(properties: ElasticGpuSpecification) {
        Object.assign(this, properties)
    }
}

export class TagSpecification {
    ResourceType?: Value<string>

    constructor(properties: TagSpecification) {
        Object.assign(this, properties)
    }
}

export class Ebs {
    SnapshotId?: Value<string>
    VolumeType?: Value<string>
    KmsKeyId?: Value<string>
    Encrypted?: Value<boolean>
    Throughput?: Value<number>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: Ebs) {
        Object.assign(this, properties)
    }
}

export class EnclaveOptions {
    Enabled?: Value<boolean>

    constructor(properties: EnclaveOptions) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateData {
    UserData?: Value<string>
    KernelId?: Value<string>
    EbsOptimized?: Value<boolean>
    ImageId?: Value<string>
    InstanceType?: Value<string>
    InstanceInitiatedShutdownBehavior?: Value<string>
    KeyName?: Value<string>
    DisableApiTermination?: Value<boolean>
    RamDiskId?: Value<string>

    constructor(properties: LaunchTemplateData) {
        Object.assign(this, properties)
    }
}

export class MetadataOptions {
    HttpPutResponseHopLimit?: Value<number>
    HttpTokens?: Value<string>
    HttpEndpoint?: Value<string>

    constructor(properties: MetadataOptions) {
        Object.assign(this, properties)
    }
}

export class CapacityReservationSpecification {
    CapacityReservationPreference?: Value<string>

    constructor(properties: CapacityReservationSpecification) {
        Object.assign(this, properties)
    }
}

export class CapacityReservationTarget {
    CapacityReservationResourceGroupArn?: Value<string>
    CapacityReservationId?: Value<string>

    constructor(properties: CapacityReservationTarget) {
        Object.assign(this, properties)
    }
}

export class CpuOptions {
    ThreadsPerCore?: Value<number>
    CoreCount?: Value<number>

    constructor(properties: CpuOptions) {
        Object.assign(this, properties)
    }
}

export class PrivateIpAdd {
    PrivateIpAddress?: Value<string>
    Primary?: Value<boolean>

    constructor(properties: PrivateIpAdd) {
        Object.assign(this, properties)
    }
}

export class IamInstanceProfile {
    Arn?: Value<string>
    Name?: Value<string>

    constructor(properties: IamInstanceProfile) {
        Object.assign(this, properties)
    }
}

export class LicenseSpecification {
    LicenseConfigurationArn?: Value<string>

    constructor(properties: LicenseSpecification) {
        Object.assign(this, properties)
    }
}

export class HibernationOptions {
    Configured?: Value<boolean>

    constructor(properties: HibernationOptions) {
        Object.assign(this, properties)
    }
}

export class InstanceMarketOptions {
    MarketType?: Value<string>

    constructor(properties: InstanceMarketOptions) {
        Object.assign(this, properties)
    }
}

export class CreditSpecification {
    CpuCredits?: Value<string>

    constructor(properties: CreditSpecification) {
        Object.assign(this, properties)
    }
}

export class Monitoring {
    Enabled?: Value<boolean>

    constructor(properties: Monitoring) {
        Object.assign(this, properties)
    }
}

export class Placement {
    GroupName?: Value<string>
    Tenancy?: Value<string>
    SpreadDomain?: Value<string>
    PartitionNumber?: Value<number>
    AvailabilityZone?: Value<string>
    Affinity?: Value<string>
    HostId?: Value<string>
    HostResourceGroupArn?: Value<string>

    constructor(properties: Placement) {
        Object.assign(this, properties)
    }
}

export class Ipv6Add {
    Ipv6Address?: Value<string>

    constructor(properties: Ipv6Add) {
        Object.assign(this, properties)
    }
}

export class NetworkInterface {
    Description?: Value<string>
    PrivateIpAddress?: Value<string>
    SecondaryPrivateIpAddressCount?: Value<number>
    DeviceIndex?: Value<number>
    SubnetId?: Value<string>
    AssociatePublicIpAddress?: Value<boolean>
    NetworkInterfaceId?: Value<string>
    NetworkCardIndex?: Value<number>
    InterfaceType?: Value<string>
    AssociateCarrierIpAddress?: Value<boolean>
    Ipv6AddressCount?: Value<number>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: NetworkInterface) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateElasticInferenceAccelerator {
    Type?: Value<string>
    Count?: Value<number>

    constructor(properties: LaunchTemplateElasticInferenceAccelerator) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateTagSpecification {
    ResourceType?: Value<string>

    constructor(properties: LaunchTemplateTagSpecification) {
        Object.assign(this, properties)
    }
}

export interface LaunchTemplateProperties {
    LaunchTemplateName?: Value<string>
}

export default class LaunchTemplate extends ResourceBase<LaunchTemplateProperties> {
    static BlockDeviceMapping = BlockDeviceMapping
    static SpotOptions = SpotOptions
    static ElasticGpuSpecification = ElasticGpuSpecification
    static TagSpecification = TagSpecification
    static Ebs = Ebs
    static EnclaveOptions = EnclaveOptions
    static LaunchTemplateData = LaunchTemplateData
    static MetadataOptions = MetadataOptions
    static CapacityReservationSpecification = CapacityReservationSpecification
    static CapacityReservationTarget = CapacityReservationTarget
    static CpuOptions = CpuOptions
    static PrivateIpAdd = PrivateIpAdd
    static IamInstanceProfile = IamInstanceProfile
    static LicenseSpecification = LicenseSpecification
    static HibernationOptions = HibernationOptions
    static InstanceMarketOptions = InstanceMarketOptions
    static CreditSpecification = CreditSpecification
    static Monitoring = Monitoring
    static Placement = Placement
    static Ipv6Add = Ipv6Add
    static NetworkInterface = NetworkInterface
    static LaunchTemplateElasticInferenceAccelerator = LaunchTemplateElasticInferenceAccelerator
    static LaunchTemplateTagSpecification = LaunchTemplateTagSpecification

    constructor(properties?: LaunchTemplateProperties) {
        super('AWS::EC2::LaunchTemplate', properties || {})
    }
}
