import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface KeyspaceProperties {
    KeyspaceName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Keyspace extends ResourceBase<KeyspaceProperties> {
    constructor(properties?: KeyspaceProperties);
}
