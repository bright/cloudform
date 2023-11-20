import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SnapshotProperties {
    VolumeId: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Snapshot extends ResourceBase<SnapshotProperties> {
    constructor(properties: SnapshotProperties);
}
