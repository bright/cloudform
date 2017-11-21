import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EbsProperties {
    DeleteOnTermination?: Value<boolean>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<string>;
    VolumeType?: Value<string>;
}
export default class Ebs extends ResourceBase {
    constructor(properties: EbsProperties, dependsOn?: Value<string>);
}
