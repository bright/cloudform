import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CollectionProperties {
    CollectionId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Collection extends ResourceBase<CollectionProperties> {
    constructor(properties: CollectionProperties);
}
