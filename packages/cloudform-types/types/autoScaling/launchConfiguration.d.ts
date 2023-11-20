import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BlockDevice {
    SnapshotId?: Value<string>;
    VolumeType?: Value<string>;
    Encrypted?: Value<boolean>;
    Throughput?: Value<number>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: BlockDevice);
}
export declare class BlockDeviceMapping {
    Ebs?: BlockDevice;
    NoDevice?: Value<boolean>;
    VirtualName?: Value<string>;
    DeviceName: Value<string>;
    constructor(properties: BlockDeviceMapping);
}
export declare class MetadataOptions {
    HttpPutResponseHopLimit?: Value<number>;
    HttpTokens?: Value<string>;
    HttpEndpoint?: Value<string>;
    constructor(properties: MetadataOptions);
}
export interface LaunchConfigurationProperties {
    PlacementTenancy?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    LaunchConfigurationName?: Value<string>;
    MetadataOptions?: MetadataOptions;
    InstanceId?: Value<string>;
    UserData?: Value<string>;
    ClassicLinkVPCSecurityGroups?: List<Value<string>>;
    BlockDeviceMappings?: List<BlockDeviceMapping>;
    IamInstanceProfile?: Value<string>;
    KernelId?: Value<string>;
    AssociatePublicIpAddress?: Value<boolean>;
    ClassicLinkVPCId?: Value<string>;
    EbsOptimized?: Value<boolean>;
    KeyName?: Value<string>;
    SpotPrice?: Value<string>;
    ImageId: Value<string>;
    InstanceType: Value<string>;
    RamDiskId?: Value<string>;
    InstanceMonitoring?: Value<boolean>;
}
export default class LaunchConfiguration extends ResourceBase<LaunchConfigurationProperties> {
    static BlockDevice: typeof BlockDevice;
    static BlockDeviceMapping: typeof BlockDeviceMapping;
    static MetadataOptions: typeof MetadataOptions;
    constructor(properties: LaunchConfigurationProperties);
}
