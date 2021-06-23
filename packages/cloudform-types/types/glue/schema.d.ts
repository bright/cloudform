import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SchemaVersion {
    IsLatest?: Value<boolean>;
    VersionNumber?: Value<number>;
    constructor(properties: SchemaVersion);
}
export declare class Registry {
    Name?: Value<string>;
    Arn?: Value<string>;
    constructor(properties: Registry);
}
export interface SchemaProperties {
    Registry?: Registry;
    Name: Value<string>;
    Description?: Value<string>;
    DataFormat: Value<string>;
    Compatibility: Value<string>;
    SchemaDefinition: Value<string>;
    CheckpointVersion?: SchemaVersion;
    Tags?: List<ResourceTag>;
}
export default class Schema extends ResourceBase<SchemaProperties> {
    static SchemaVersion: typeof SchemaVersion;
    static Registry: typeof Registry;
    constructor(properties: SchemaProperties);
}
