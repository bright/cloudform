import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface ActivityProperties {
    Tags?: List<TagsEntry>;
    Name: Value<string>;
}
export default class Activity extends ResourceBase<ActivityProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties: ActivityProperties);
}
