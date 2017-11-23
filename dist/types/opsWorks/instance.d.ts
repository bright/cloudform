import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface BlockDeviceMappingProperties {
    DeviceName?: Value<string>;
    Ebs?: EbsBlockDevice;
    NoDevice?: Value<string>;
    VirtualName?: Value<string>;
}
export declare class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string>);
}
export interface EbsBlockDeviceProperties {
    DeleteOnTermination?: Value<boolean>;
    Iops?: Value<number>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
}
export declare class EbsBlockDevice extends ResourceBase {
    constructor(properties: EbsBlockDeviceProperties, dependsOn?: Value<string>);
}
export interface TimeBasedAutoScalingProperties {
    Friday?: {
        [key: string]: Value<string>;
    };
    Monday?: {
        [key: string]: Value<string>;
    };
    Saturday?: {
        [key: string]: Value<string>;
    };
    Sunday?: {
        [key: string]: Value<string>;
    };
    Thursday?: {
        [key: string]: Value<string>;
    };
    Tuesday?: {
        [key: string]: Value<string>;
    };
    Wednesday?: {
        [key: string]: Value<string>;
    };
}
export declare class TimeBasedAutoScaling extends ResourceBase {
    constructor(properties: TimeBasedAutoScalingProperties, dependsOn?: Value<string>);
}
export interface InstanceProperties {
    AgentVersion?: Value<string>;
    AmiId?: Value<string>;
    Architecture?: Value<string>;
    AutoScalingType?: Value<string>;
    AvailabilityZone?: Value<string>;
    BlockDeviceMappings?: BlockDeviceMapping[];
    EbsOptimized?: Value<boolean>;
    ElasticIps?: Value<string>[];
    Hostname?: Value<string>;
    InstallUpdatesOnBoot?: Value<boolean>;
    InstanceType: Value<string>;
    LayerIds: Value<string>[];
    Os?: Value<string>;
    RootDeviceType?: Value<string>;
    SshKeyName?: Value<string>;
    StackId: Value<string>;
    SubnetId?: Value<string>;
    Tenancy?: Value<string>;
    TimeBasedAutoScaling?: TimeBasedAutoScaling;
    VirtualizationType?: Value<string>;
    Volumes?: Value<string>[];
}
export default class Instance extends ResourceBase {
    constructor(properties: InstanceProperties, dependsOn?: Value<string>);
}
