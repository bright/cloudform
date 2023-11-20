import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ReplicationSpecification {
    ReplicationStrategy?: Value<string>;
    RegionList?: List<Value<string>>;
    constructor(properties: ReplicationSpecification);
}
export interface KeyspaceProperties {
    KeyspaceName?: Value<string>;
    ReplicationSpecification?: ReplicationSpecification;
    Tags?: List<ResourceTag>;
}
export default class Keyspace extends ResourceBase<KeyspaceProperties> {
    static ReplicationSpecification: typeof ReplicationSpecification;
    constructor(properties?: KeyspaceProperties);
}
