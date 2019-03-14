import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceDataSyncProperties {
    KMSKeyArn?: Value<string>;
    BucketName: Value<string>;
    BucketRegion: Value<string>;
    SyncFormat: Value<string>;
    SyncName: Value<string>;
    BucketPrefix?: Value<string>;
}
export default class ResourceDataSync extends ResourceBase<ResourceDataSyncProperties> {
    constructor(properties: ResourceDataSyncProperties);
}
