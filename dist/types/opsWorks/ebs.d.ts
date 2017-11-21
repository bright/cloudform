import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type VolumeType = "*" | "standard" | "io1" | "gp2";
export interface EbsProperties {
    DeleteOnTermination?: Value<boolean>;
    Iops?: Value<string>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<string>;
    VolumeType?: Value<VolumeType>;
}
export default class Ebs extends ResourceBase {
    constructor(properties: EbsProperties, dependsOn?: Value<string>);
}
