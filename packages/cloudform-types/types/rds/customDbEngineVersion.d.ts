import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomDBEngineVersionProperties {
    Status?: Value<string>;
    DatabaseInstallationFilesS3BucketName: Value<string>;
    Description?: Value<string>;
    EngineVersion: Value<string>;
    KMSKeyId?: Value<string>;
    DatabaseInstallationFilesS3Prefix?: Value<string>;
    Manifest?: Value<string>;
    Engine: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class CustomDBEngineVersion extends ResourceBase<CustomDBEngineVersionProperties> {
    constructor(properties: CustomDBEngineVersionProperties);
}
