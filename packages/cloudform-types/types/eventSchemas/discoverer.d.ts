import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export interface DiscovererProperties {
    Description?: Value<string>;
    SourceArn: Value<string>;
    Tags?: List<TagsEntry>;
}
export default class Discoverer extends ResourceBase<DiscovererProperties> {
    static TagsEntry: typeof TagsEntry;
    constructor(properties: DiscovererProperties);
}
