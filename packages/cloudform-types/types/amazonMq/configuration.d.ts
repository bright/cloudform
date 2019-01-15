import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
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
    Tags?: ResourceTag[];
    Name: Value<string>;
}
export default class Configuration extends ResourceBase {
    static TagsEntry: typeof TagsEntry;
    constructor(properties?: ConfigurationProperties);
}
