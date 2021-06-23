import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Config {
    BucketAccessRoleArn: Value<string>;
    constructor(properties: S3Config);
}
export interface LocationS3Properties {
    S3Config: S3Config;
    S3BucketArn: Value<string>;
    Subdirectory?: Value<string>;
    S3StorageClass?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationS3 extends ResourceBase<LocationS3Properties> {
    static S3Config: typeof S3Config;
    constructor(properties: LocationS3Properties);
}
