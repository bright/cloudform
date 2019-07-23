import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PrivateIpAdd {
    PrivateIpAddress?: Value<string>;
    Primary?: Value<boolean>;
    constructor(properties: PrivateIpAdd);
}
export declare class BlockDeviceMapping {
    Ebs?: Ebs;
    NoDevice?: Value<string>;
    VirtualName?: Value<string>;
    DeviceName?: Value<string>;
    constructor(properties: BlockDeviceMapping);
}
export declare class SpotOptions {
    SpotInstanceType?: Value<string>;
    InstanceInterruptionBehavior?: Value<string>;
    MaxPrice?: Value<string>;
    BlockDurationMinutes?: Value<number>;
    ValidUntil?: Value<string>;
    constructor(properties: SpotOptions);
}
export declare type CapacityReservationPreference = Value<string>;
export declare class ElasticGpuSpecification {
    Type?: Value<string>;
    constructor(properties: ElasticGpuSpecification);
}
export declare class TagSpecification {
    ResourceType?: Value<string>;
    Tags?: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export declare class IamInstanceProfile {
    Arn?: Value<string>;
    Name?: Value<string>;
    constructor(properties: IamInstanceProfile);
}
export declare class LicenseSpecification {
    LicenseConfigurationArn?: Value<string>;
    constructor(properties: LicenseSpecification);
}
export declare class Ebs {
    SnapshotId?: Value<string>;
    VolumeType?: Value<string>;
    KmsKeyId?: Value<string>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: Ebs);
}
export declare class HibernationOptions {
    Configured?: Value<boolean>;
    constructor(properties: HibernationOptions);
}
export declare class LaunchTemplateData {
    SecurityGroups?: List<Value<string>>;
    TagSpecifications?: List<TagSpecification>;
    UserData?: Value<string>;
    BlockDeviceMappings?: List<BlockDeviceMapping>;
    IamInstanceProfile?: IamInstanceProfile;
    KernelId?: Value<string>;
    EbsOptimized?: Value<boolean>;
    ElasticGpuSpecifications?: List<ElasticGpuSpecification>;
    ElasticInferenceAccelerators?: List<LaunchTemplateElasticInferenceAccelerator>;
    Placement?: Placement;
    NetworkInterfaces?: List<NetworkInterface>;
    ImageId?: Value<string>;
    InstanceType?: Value<string>;
    Monitoring?: Monitoring;
    HibernationOptions?: HibernationOptions;
    LicenseSpecifications?: List<LicenseSpecification>;
    InstanceInitiatedShutdownBehavior?: Value<string>;
    CpuOptions?: CpuOptions;
    SecurityGroupIds?: List<Value<string>>;
    KeyName?: Value<string>;
    DisableApiTermination?: Value<boolean>;
    InstanceMarketOptions?: InstanceMarketOptions;
    RamDiskId?: Value<string>;
    CapacityReservationSpecification?: CapacityReservationSpecification;
    CreditSpecification?: CreditSpecification;
    constructor(properties: LaunchTemplateData);
}
export declare class InstanceMarketOptions {
    SpotOptions?: SpotOptions;
    MarketType?: Value<string>;
    constructor(properties: InstanceMarketOptions);
}
export declare class CreditSpecification {
    CpuCredits?: Value<string>;
    constructor(properties: CreditSpecification);
}
export declare class Monitoring {
    Enabled?: Value<boolean>;
    constructor(properties: Monitoring);
}
export declare class Placement {
    GroupName?: Value<string>;
    Tenancy?: Value<string>;
    AvailabilityZone?: Value<string>;
    Affinity?: Value<string>;
    HostId?: Value<string>;
    constructor(properties: Placement);
}
export declare class CapacityReservationSpecification {
    CapacityReservationPreference?: CapacityReservationPreference;
    CapacityReservationTarget?: CapacityReservationTarget;
    constructor(properties: CapacityReservationSpecification);
}
export declare class Ipv6Add {
    Ipv6Address?: Value<string>;
    constructor(properties: Ipv6Add);
}
export declare class CapacityReservationTarget {
    CapacityReservationId?: Value<string>;
    constructor(properties: CapacityReservationTarget);
}
export declare class NetworkInterface {
    Description?: Value<string>;
    PrivateIpAddress?: Value<string>;
    PrivateIpAddresses?: List<PrivateIpAdd>;
    SecondaryPrivateIpAddressCount?: Value<number>;
    DeviceIndex?: Value<number>;
    SubnetId?: Value<string>;
    Ipv6Addresses?: List<Ipv6Add>;
    AssociatePublicIpAddress?: Value<boolean>;
    NetworkInterfaceId?: Value<string>;
    InterfaceType?: Value<string>;
    Ipv6AddressCount?: Value<number>;
    Groups?: List<Value<string>>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: NetworkInterface);
}
export declare class CpuOptions {
    ThreadsPerCore?: Value<number>;
    CoreCount?: Value<number>;
    constructor(properties: CpuOptions);
}
export declare class LaunchTemplateElasticInferenceAccelerator {
    Type?: Value<string>;
    constructor(properties: LaunchTemplateElasticInferenceAccelerator);
}
export interface LaunchTemplateProperties {
    LaunchTemplateName?: Value<string>;
    LaunchTemplateData?: LaunchTemplateData;
}
export default class LaunchTemplate extends ResourceBase<LaunchTemplateProperties> {
    static PrivateIpAdd: typeof PrivateIpAdd;
    static BlockDeviceMapping: typeof BlockDeviceMapping;
    static SpotOptions: typeof SpotOptions;
    static ElasticGpuSpecification: typeof ElasticGpuSpecification;
    static TagSpecification: typeof TagSpecification;
    static IamInstanceProfile: typeof IamInstanceProfile;
    static LicenseSpecification: typeof LicenseSpecification;
    static Ebs: typeof Ebs;
    static HibernationOptions: typeof HibernationOptions;
    static LaunchTemplateData: typeof LaunchTemplateData;
    static InstanceMarketOptions: typeof InstanceMarketOptions;
    static CreditSpecification: typeof CreditSpecification;
    static Monitoring: typeof Monitoring;
    static Placement: typeof Placement;
    static CapacityReservationSpecification: typeof CapacityReservationSpecification;
    static Ipv6Add: typeof Ipv6Add;
    static CapacityReservationTarget: typeof CapacityReservationTarget;
    static NetworkInterface: typeof NetworkInterface;
    static CpuOptions: typeof CpuOptions;
    static LaunchTemplateElasticInferenceAccelerator: typeof LaunchTemplateElasticInferenceAccelerator;
    constructor(properties?: LaunchTemplateProperties);
}
