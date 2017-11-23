import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface S3LocationProperties {
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
}
export declare class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface BuildProperties {
    Name?: Value<string>;
    StorageLocation?: S3Location;
    Version?: Value<string>;
}
export default class Build extends ResourceBase {
    constructor(properties: BuildProperties, dependsOn?: Value<string> | Value<string>[]);
}
