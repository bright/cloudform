import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface SchemaProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Content: Value<string>;
    RegistryName: Value<string>;
    SchemaName?: Value<string>;
    Tags?: List<TagsEntry>;
}
export default class Schema extends ResourceBase<SchemaProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties: SchemaProperties);
}
