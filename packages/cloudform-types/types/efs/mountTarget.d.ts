import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface MountTargetProperties {
    SecurityGroups: List<Value<string>>;
    FileSystemId: Value<string>;
    IpAddress?: Value<string>;
    SubnetId: Value<string>;
}
export default class MountTarget extends ResourceBase<MountTargetProperties> {
    constructor(properties: MountTargetProperties);
}
