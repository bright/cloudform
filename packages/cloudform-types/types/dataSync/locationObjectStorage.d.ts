import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationObjectStorageProperties {
    ServerCertificate?: Value<string>;
    SecretKey?: Value<string>;
    BucketName?: Value<string>;
    Subdirectory?: Value<string>;
    ServerHostname?: Value<string>;
    AccessKey?: Value<string>;
    ServerProtocol?: Value<string>;
    AgentArns: List<Value<string>>;
    ServerPort?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class LocationObjectStorage extends ResourceBase<LocationObjectStorageProperties> {
    constructor(properties: LocationObjectStorageProperties);
}
