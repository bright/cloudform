import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface TagProperties {
    TagKey: Value<string>;
    CatalogId?: Value<string>;
    TagValues: List<Value<string>>;
}
export default class Tag extends ResourceBase<TagProperties> {
    constructor(properties: TagProperties);
}
