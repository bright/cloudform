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

export class AssociationParameter {
    Key!: Value<string>
    Value!: List<Value<string>>

    constructor(properties: AssociationParameter) {
        Object.assign(this, properties)
    }
}

export class BlockDeviceMapping {
    DeviceName!: Value<string>
    Ebs?: Ebs
    NoDevice?: NoDevice
    VirtualName?: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class CpuOptions {
    CoreCount?: Value<number>
    ThreadsPerCore?: Value<number>

    constructor(properties: CpuOptions) {
        Object.assign(this, properties)
    }
}

export class CreditSpecification {
    CPUCredits?: Value<string>

    constructor(properties: CreditSpecification) {
        Object.assign(this, properties)
    }
}

export class Ebs {
    DeleteOnTermination?: Value<boolean>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    KmsKeyId?: Value<string>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: Ebs) {
        Object.assign(this, properties)
    }
}

export class ElasticGpuSpecification {
    Type!: Value<string>

    constructor(properties: ElasticGpuSpecification) {
        Object.assign(this, properties)
    }
}

export class ElasticInferenceAccelerator {
    Count?: Value<number>
    Type!: Value<string>

    constructor(properties: ElasticInferenceAccelerator) {
        Object.assign(this, properties)
    }
}

export class EnclaveOptions {
    Enabled?: Value<boolean>

    constructor(properties: EnclaveOptions) {
        Object.assign(this, properties)
    }
}

export class HibernationOptions {
    Configured?: Value<boolean>

    constructor(properties: HibernationOptions) {
        Object.assign(this, properties)
    }
}

export class InstanceIpv6Address {
    Ipv6Address!: Value<string>

    constructor(properties: InstanceIpv6Address) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version!: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class LicenseSpecification {
    LicenseConfigurationArn!: Value<string>

    constructor(properties: LicenseSpecification) {
        Object.assign(this, properties)
    }
}

export class NetworkInterface {
    AssociateCarrierIpAddress?: Value<boolean>
    AssociatePublicIpAddress?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Description?: Value<string>
    DeviceIndex!: Value<string>
    GroupSet?: List<Value<string>>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: List<InstanceIpv6Address>
    NetworkInterfaceId?: Value<string>
    PrivateIpAddress?: Value<string>
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>
    SecondaryPrivateIpAddressCount?: Value<number>
    SubnetId?: Value<string>

    constructor(properties: NetworkInterface) {
        Object.assign(this, properties)
    }
}

export class NoDevice {


    constructor(properties: NoDevice) {
        Object.assign(this, properties)
    }
}

export class PrivateDnsNameOptions {
    EnableResourceNameDnsAAAARecord?: Value<boolean>
    EnableResourceNameDnsARecord?: Value<boolean>
    HostnameType?: Value<string>

    constructor(properties: PrivateDnsNameOptions) {
        Object.assign(this, properties)
    }
}

export class PrivateIpAddressSpecification {
    Primary!: Value<boolean>
    PrivateIpAddress!: Value<string>

    constructor(properties: PrivateIpAddressSpecification) {
        Object.assign(this, properties)
    }
}

export class SsmAssociation {
    AssociationParameters?: List<AssociationParameter>
    DocumentName!: Value<string>

    constructor(properties: SsmAssociation) {
        Object.assign(this, properties)
    }
}

export class Volume {
    Device!: Value<string>
    VolumeId!: Value<string>

    constructor(properties: Volume) {
        Object.assign(this, properties)
    }
}

export interface InstanceProperties {
    AdditionalInfo?: Value<string>
    Affinity?: Value<string>
    AvailabilityZone?: Value<string>
    BlockDeviceMappings?: List<BlockDeviceMapping>
    CpuOptions?: CpuOptions
    CreditSpecification?: CreditSpecification
    DisableApiTermination?: Value<boolean>
    EbsOptimized?: Value<boolean>
    ElasticGpuSpecifications?: List<ElasticGpuSpecification>
    ElasticInferenceAccelerators?: List<ElasticInferenceAccelerator>
    EnclaveOptions?: EnclaveOptions
    HibernationOptions?: HibernationOptions
    HostId?: Value<string>
    HostResourceGroupArn?: Value<string>
    IamInstanceProfile?: Value<string>
    ImageId?: Value<string>
    InstanceInitiatedShutdownBehavior?: Value<string>
    InstanceType?: Value<string>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: List<InstanceIpv6Address>
    KernelId?: Value<string>
    KeyName?: Value<string>
    LaunchTemplate?: LaunchTemplateSpecification
    LicenseSpecifications?: List<LicenseSpecification>
    Monitoring?: Value<boolean>
    NetworkInterfaces?: List<NetworkInterface>
    PlacementGroupName?: Value<string>
    PrivateDnsNameOptions?: PrivateDnsNameOptions
    PrivateIpAddress?: Value<string>
    PropagateTagsToVolumeOnCreation?: Value<boolean>
    RamdiskId?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SecurityGroups?: List<Value<string>>
    SourceDestCheck?: Value<boolean>
    SsmAssociations?: List<SsmAssociation>
    SubnetId?: Value<string>
    Tags?: List<ResourceTag>
    Tenancy?: Value<string>
    UserData?: Value<string>
    Volumes?: List<Volume>
}

export default class Instance extends ResourceBase<InstanceProperties> {
    static AssociationParameter = AssociationParameter
    static BlockDeviceMapping = BlockDeviceMapping
    static CpuOptions = CpuOptions
    static CreditSpecification = CreditSpecification
    static Ebs = Ebs
    static ElasticGpuSpecification = ElasticGpuSpecification
    static ElasticInferenceAccelerator = ElasticInferenceAccelerator
    static EnclaveOptions = EnclaveOptions
    static HibernationOptions = HibernationOptions
    static InstanceIpv6Address = InstanceIpv6Address
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static LicenseSpecification = LicenseSpecification
    static NetworkInterface = NetworkInterface
    static NoDevice = NoDevice
    static PrivateDnsNameOptions = PrivateDnsNameOptions
    static PrivateIpAddressSpecification = PrivateIpAddressSpecification
    static SsmAssociation = SsmAssociation
    static Volume = Volume

    constructor(properties?: InstanceProperties) {
        super('AWS::EC2::Instance', properties || {})
    }
}
