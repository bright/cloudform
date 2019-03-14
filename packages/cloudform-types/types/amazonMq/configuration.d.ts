import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface ConfigurationProperties {
    EngineVersion: Value<string>;
    Description?: Value<string>;
    EngineType: Value<string>;
    Data: Value<string>;
    Tags?: List<TagsEntry>;
    Name: Value<string>;
}
export default class Configuration extends ResourceBase<ConfigurationProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties: ConfigurationProperties);
}
