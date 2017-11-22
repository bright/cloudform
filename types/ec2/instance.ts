/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'

export interface ElasticGpuSpecificationProperties {
    Type: Value<string>
}

export class ElasticGpuSpecification extends ResourceBase {
    constructor(properties: ElasticGpuSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::ElasticGpuSpecification', properties, dependsOn)
    }
}

export interface NetworkInterfaceProperties {
    AssociatePublicIpAddress?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Description?: Value<string>
    DeviceIndex: Value<string>
    GroupSet?: Value<string>[]
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: InstanceIpv6Address[]
    NetworkInterfaceId?: Value<string>
    PrivateIpAddress?: Value<string>
    PrivateIpAddresses?: PrivateIpAddressSpecification[]
    SecondaryPrivateIpAddressCount?: Value<number>
    SubnetId?: Value<string>
}

export class NetworkInterface extends ResourceBase {
    constructor(properties: NetworkInterfaceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterface', properties, dependsOn)
    }
}

export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>
}

export class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn)
    }
}

export interface VolumeProperties {
    Device: Value<string>
    VolumeId: Value<string>
}

export class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Volume', properties, dependsOn)
    }
}

export interface AssociationParameterProperties {
    Key: Value<string>
    Value: Value<string>[]
}

export class AssociationParameter extends ResourceBase {
    constructor(properties: AssociationParameterProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::AssociationParameter', properties, dependsOn)
    }
}

export interface EbsProperties {
    DeleteOnTermination?: Value<boolean>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>
}

export class Ebs extends ResourceBase {
    constructor(properties: EbsProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Ebs', properties, dependsOn)
    }
}

export interface NoDeviceProperties {

}

export class NoDevice extends ResourceBase {
    constructor(properties: NoDeviceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NoDevice', properties, dependsOn)
    }
}

export interface SsmAssociationProperties {
    AssociationParameters?: AssociationParameter[]
    DocumentName: Value<string>
}

export class SsmAssociation extends ResourceBase {
    constructor(properties: SsmAssociationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SsmAssociation', properties, dependsOn)
    }
}

export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>
    Ebs?: Ebs
    NoDevice?: NoDevice
    VirtualName?: Value<string>
}

export class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::BlockDeviceMapping', properties, dependsOn)
    }
}

export interface PrivateIpAddressSpecificationProperties {
    Primary: Value<boolean>
    PrivateIpAddress: Value<string>
}

export class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn)
    }
}

export interface InstanceProperties {
    AdditionalInfo?: Value<string>
    Affinity?: Value<string>
    AvailabilityZone?: Value<string>
    BlockDeviceMappings?: BlockDeviceMapping[]
    DisableApiTermination?: Value<boolean>
    EbsOptimized?: Value<boolean>
    ElasticGpuSpecifications?: ElasticGpuSpecification[]
    HostId?: Value<string>
    IamInstanceProfile?: Value<string>
    ImageId: Value<string>
    InstanceInitiatedShutdownBehavior?: Value<string>
    InstanceType?: Value<string>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: InstanceIpv6Address[]
    KernelId?: Value<string>
    KeyName?: Value<string>
    Monitoring?: Value<boolean>
    NetworkInterfaces?: NetworkInterface[]
    PlacementGroupName?: Value<string>
    PrivateIpAddress?: Value<string>
    RamdiskId?: Value<string>
    SecurityGroupIds?: Value<string>[]
    SecurityGroups?: Value<string>[]
    SourceDestCheck?: Value<boolean>
    SsmAssociations?: SsmAssociation[]
    SubnetId?: Value<string>
    Tags?: ResourceTag[]
    Tenancy?: Value<string>
    UserData?: Value<string>
    Volumes?: Volume[]
}

export default class Instance extends ResourceBase {
    constructor(properties: InstanceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Instance', properties, dependsOn)
    }
}