import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StorageLocationProperties {
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
}
export default class StorageLocation extends ResourceBase {
    constructor(properties: StorageLocationProperties, dependsOn?: Value<string>);
}
