import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class StorageLocation {
    ObjectVersion?: Value<string>;
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: StorageLocation);
}
export declare class S3Location {
    Bucket: Value<string>;
    Key: Value<string>;
    ObjectVersion?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3Location);
}
export interface BuildProperties {
    OperatingSystem?: Value<string>;
    Version?: Value<string>;
    ServerSdkVersion?: Value<string>;
    StorageLocation?: StorageLocation;
    Name?: Value<string>;
}
export default class Build extends ResourceBase<BuildProperties> {
    static StorageLocation: typeof StorageLocation;
    static S3Location: typeof S3Location;
    constructor(properties?: BuildProperties);
}
