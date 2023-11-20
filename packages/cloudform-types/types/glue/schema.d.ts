import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Registry {
    Arn?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Registry);
}
export declare class SchemaVersion {
    IsLatest?: Value<boolean>;
    VersionNumber?: Value<number>;
    constructor(properties: SchemaVersion);
}
export interface SchemaProperties {
    SchemaDefinition: Value<string>;
    Description?: Value<string>;
    DataFormat: Value<string>;
    Registry?: Registry;
    Compatibility: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    CheckpointVersion?: SchemaVersion;
}
export default class Schema extends ResourceBase<SchemaProperties> {
    static Registry: typeof Registry;
    static SchemaVersion: typeof SchemaVersion;
    constructor(properties: SchemaProperties);
}
