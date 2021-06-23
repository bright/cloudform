import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationObjectStorageProperties {
    AccessKey?: Value<string>;
    AgentArns: List<Value<string>>;
    BucketName: Value<string>;
    SecretKey?: Value<string>;
    ServerHostname: Value<string>;
    ServerPort?: Value<number>;
    ServerProtocol?: Value<string>;
    Subdirectory?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationObjectStorage extends ResourceBase<LocationObjectStorageProperties> {
    constructor(properties: LocationObjectStorageProperties);
}
