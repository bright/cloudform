import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Location {
    ObjectVersion?: Value<string>;
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3Location);
}
export interface ScriptProperties {
    Version?: Value<string>;
    StorageLocation: S3Location;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Script extends ResourceBase<ScriptProperties> {
    static S3Location: typeof S3Location;
    constructor(properties: ScriptProperties);
}
