import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Volume {
    Device: Value<string>;
    VolumeId: Value<string>;
    constructor(properties: Volume);
}
export declare class Ebs {
    DeleteOnTermination?: Value<boolean>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    KmsKeyId?: Value<string>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
    constructor(properties: Ebs);
}
export declare class NoDevice {
    constructor(properties: NoDevice);
}
export declare class CreditSpecification {
    CPUCredits?: Value<string>;
    constructor(properties: CreditSpecification);
}
export declare class ElasticGpuSpecification {
    Type: Value<string>;
    constructor(properties: ElasticGpuSpecification);
}
export declare class NetworkInterface {
    AssociatePublicIpAddress?: Value<boolean>;
    DeleteOnTermination?: Value<boolean>;
    Description?: Value<string>;
    DeviceIndex: Value<string>;
    GroupSet?: List<Value<string>>;
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: List<InstanceIpv6Address>;
    NetworkInterfaceId?: Value<string>;
    PrivateIpAddress?: Value<string>;
    PrivateIpAddresses?: List<PrivateIpAddressSpecification>;
    SecondaryPrivateIpAddressCount?: Value<number>;
    SubnetId?: Value<string>;
    constructor(properties: NetworkInterface);
}
export declare class InstanceIpv6Address {
    Ipv6Address: Value<string>;
    constructor(properties: InstanceIpv6Address);
}
export declare class AssociationParameter {
    Key: Value<string>;
    Value: List<Value<string>>;
    constructor(properties: AssociationParameter);
}
export declare class CpuOptions {
    CoreCount?: Value<number>;
    ThreadsPerCore?: Value<number>;
    constructor(properties: CpuOptions);
}
export declare class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>;
    LaunchTemplateName?: Value<string>;
    Version: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class LicenseSpecification {
    LicenseConfigurationArn: Value<string>;
    constructor(properties: LicenseSpecification);
}
export declare class SsmAssociation {
    AssociationParameters?: List<AssociationParameter>;
    DocumentName: Value<string>;
    constructor(properties: SsmAssociation);
}
export declare class ElasticInferenceAccelerator {
    Type: Value<string>;
    constructor(properties: ElasticInferenceAccelerator);
}
export declare class BlockDeviceMapping {
    DeviceName: Value<string>;
    Ebs?: Ebs;
    NoDevice?: NoDevice;
    VirtualName?: Value<string>;
    constructor(properties: BlockDeviceMapping);
}
export declare class PrivateIpAddressSpecification {
    Primary: Value<boolean>;
    PrivateIpAddress: Value<string>;
    constructor(properties: PrivateIpAddressSpecification);
}
export interface InstanceProperties {
    AdditionalInfo?: Value<string>;
    Affinity?: Value<string>;
    AvailabilityZone?: Value<string>;
    BlockDeviceMappings?: List<BlockDeviceMapping>;
    CpuOptions?: CpuOptions;
    CreditSpecification?: CreditSpecification;
    DisableApiTermination?: Value<boolean>;
    EbsOptimized?: Value<boolean>;
    ElasticGpuSpecifications?: List<ElasticGpuSpecification>;
    ElasticInferenceAccelerators?: List<ElasticInferenceAccelerator>;
    HostId?: Value<string>;
    IamInstanceProfile?: Value<string>;
    ImageId?: Value<string>;
    InstanceInitiatedShutdownBehavior?: Value<string>;
    InstanceType?: Value<string>;
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: List<InstanceIpv6Address>;
    KernelId?: Value<string>;
    KeyName?: Value<string>;
    LaunchTemplate?: LaunchTemplateSpecification;
    LicenseSpecifications?: List<LicenseSpecification>;
    Monitoring?: Value<boolean>;
    NetworkInterfaces?: List<NetworkInterface>;
    PlacementGroupName?: Value<string>;
    PrivateIpAddress?: Value<string>;
    RamdiskId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SecurityGroups?: List<Value<string>>;
    SourceDestCheck?: Value<boolean>;
    SsmAssociations?: List<SsmAssociation>;
    SubnetId?: Value<string>;
    Tags?: List<ResourceTag>;
    Tenancy?: Value<string>;
    UserData?: Value<string>;
    Volumes?: List<Volume>;
}
export default class Instance extends ResourceBase<InstanceProperties> {
    static Volume: typeof Volume;
    static Ebs: typeof Ebs;
    static NoDevice: typeof NoDevice;
    static CreditSpecification: typeof CreditSpecification;
    static ElasticGpuSpecification: typeof ElasticGpuSpecification;
    static NetworkInterface: typeof NetworkInterface;
    static InstanceIpv6Address: typeof InstanceIpv6Address;
    static AssociationParameter: typeof AssociationParameter;
    static CpuOptions: typeof CpuOptions;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static LicenseSpecification: typeof LicenseSpecification;
    static SsmAssociation: typeof SsmAssociation;
    static ElasticInferenceAccelerator: typeof ElasticInferenceAccelerator;
    static BlockDeviceMapping: typeof BlockDeviceMapping;
    static PrivateIpAddressSpecification: typeof PrivateIpAddressSpecification;
    constructor(properties?: InstanceProperties);
}
