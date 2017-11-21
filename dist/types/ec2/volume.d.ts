import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export declare type AvailabilityZone = "us-east-1b" | "us-east-1c" | "us-east-1d" | "us-east-1e" | "us-west-1b" | "us-west-1c" | "us-west-2a" | "us-west-2b" | "us-west-2c" | "ap-northeast-1a" | "ap-northeast-1c" | "ap-northeast-2a" | "ap-northeast-2c" | "ap-south-1a" | "ap-south-1b" | "ap-southeast-1a" | "ap-southeast-1b" | "ap-southeast-2a" | "ap-southeast-2b" | "ap-southeast-2c" | "sa-east-1a" | "sa-east-1b" | "sa-east-1c" | "eu-west-1a" | "eu-west-1b" | "eu-west-1c" | "eu-central-1a" | "eu-central-1b";
export declare type VolumeType = "*" | "standard" | "io1" | "gp2" | "sc1" | "st1";
export interface VolumeProperties {
    AutoEnableIO?: Value<boolean>;
    AvailabilityZone: Value<AvailabilityZone>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    KmsKeyId?: Value<string>;
    Size?: Value<string>;
    SnapshotId?: Value<string>;
    VolumeType?: Value<VolumeType>;
    Tags?: ResourceTag[];
}
export default class Volume extends ResourceBase {
    constructor(properties: VolumeProperties, dependsOn?: Value<string>);
}
