import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CollectionProperties {
    Type?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Collection extends ResourceBase<CollectionProperties> {
    constructor(properties: CollectionProperties);
}
