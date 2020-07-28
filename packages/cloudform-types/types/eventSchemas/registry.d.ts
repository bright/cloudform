import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface RegistryProperties {
    Description?: Value<string>;
    RegistryName?: Value<string>;
    Tags?: List<TagsEntry>;
}
export default class Registry extends ResourceBase<RegistryProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties?: RegistryProperties);
}
