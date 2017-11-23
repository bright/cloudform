import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ElasticGpuSpecificationProperties {
    Type: Value<string>;
}
export declare class ElasticGpuSpecification extends ResourceBase {
    constructor(properties: ElasticGpuSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface NetworkInterfaceProperties {
    AssociatePublicIpAddress?: Value<boolean>;
    DeleteOnTermination?: Value<boolean>;
    Description?: Value<string>;
    DeviceIndex: Value<string>;
    GroupSet?: Value<string>[];
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: InstanceIpv6Address[];
    NetworkInterfaceId?: Value<string>;
    PrivateIpAddress?: Value<string>;
    PrivateIpAddresses?: PrivateIpAddressSpecification[];
    SecondaryPrivateIpAddressCount?: Value<number>;
    SubnetId?: Value<string>;
}
export declare class NetworkInterface extends ResourceBase {
    constructor(properties: NetworkInterfaceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>;
}
export declare class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VolumeProperties {
    Device: Value<string>;
    VolumeId: Value<string>;
}
export declare class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AssociationParameterProperties {
    Key: Value<string>;
    Value: Value<string>[];
}
export declare class AssociationParameter extends ResourceBase {
    constructor(properties: AssociationParameterProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EbsProperties {
    DeleteOnTermination?: Value<boolean>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
}
export declare class Ebs extends ResourceBase {
    constructor(properties: EbsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface NoDeviceProperties {
}
export declare class NoDevice extends ResourceBase {
    constructor(properties: NoDeviceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SsmAssociationProperties {
    AssociationParameters?: AssociationParameter[];
    DocumentName: Value<string>;
}
export declare class SsmAssociation extends ResourceBase {
    constructor(properties: SsmAssociationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>;
    Ebs?: Ebs;
    NoDevice?: NoDevice;
    VirtualName?: Value<string>;
}
export declare class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PrivateIpAddressSpecificationProperties {
    Primary: Value<boolean>;
    PrivateIpAddress: Value<string>;
}
export declare class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceProperties {
    AdditionalInfo?: Value<string>;
    Affinity?: Value<string>;
    AvailabilityZone?: Value<string>;
    BlockDeviceMappings?: BlockDeviceMapping[];
    DisableApiTermination?: Value<boolean>;
    EbsOptimized?: Value<boolean>;
    ElasticGpuSpecifications?: ElasticGpuSpecification[];
    HostId?: Value<string>;
    IamInstanceProfile?: Value<string>;
    ImageId: Value<string>;
    InstanceInitiatedShutdownBehavior?: Value<string>;
    InstanceType?: Value<string>;
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: InstanceIpv6Address[];
    KernelId?: Value<string>;
    KeyName?: Value<string>;
    Monitoring?: Value<boolean>;
    NetworkInterfaces?: NetworkInterface[];
    PlacementGroupName?: Value<string>;
    PrivateIpAddress?: Value<string>;
    RamdiskId?: Value<string>;
    SecurityGroupIds?: Value<string>[];
    SecurityGroups?: Value<string>[];
    SourceDestCheck?: Value<boolean>;
    SsmAssociations?: SsmAssociation[];
    SubnetId?: Value<string>;
    Tags?: ResourceTag[];
    Tenancy?: Value<string>;
    UserData?: Value<string>;
    Volumes?: Volume[];
}
export default class Instance extends ResourceBase {
    constructor(properties: InstanceProperties, dependsOn?: Value<string> | Value<string>[]);
}
