import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface KeyspaceProperties {
    KeyspaceName?: Value<string>;
}
export default class Keyspace extends ResourceBase<KeyspaceProperties> {
    constructor(properties?: KeyspaceProperties);
}
