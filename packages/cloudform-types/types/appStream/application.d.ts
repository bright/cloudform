import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Location {
    S3Bucket: Value<string>;
    S3Key: Value<string>;
    constructor(properties: S3Location);
}
export interface ApplicationProperties {
    WorkingDirectory?: Value<string>;
    Platforms: List<Value<string>>;
    AppBlockArn: Value<string>;
    Description?: Value<string>;
    InstanceFamilies: List<Value<string>>;
    AttributesToDelete?: List<Value<string>>;
    DisplayName?: Value<string>;
    LaunchPath: Value<string>;
    LaunchParameters?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    IconS3Location: S3Location;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static S3Location: typeof S3Location;
    constructor(properties: ApplicationProperties);
}
