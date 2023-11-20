import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VolumeProperties {
    MultiAttachEnabled?: Value<boolean>;
    SnapshotId?: Value<string>;
    VolumeType?: Value<string>;
    KmsKeyId?: Value<string>;
    Encrypted?: Value<boolean>;
    Size?: Value<number>;
    AutoEnableIO?: Value<boolean>;
    OutpostArn?: Value<string>;
    AvailabilityZone: Value<string>;
    Throughput?: Value<number>;
    Iops?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class Volume extends ResourceBase<VolumeProperties> {
    constructor(properties: VolumeProperties);
}
