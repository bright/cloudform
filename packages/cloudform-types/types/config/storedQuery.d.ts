import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StoredQueryProperties {
    QueryDescription?: Value<string>;
    QueryExpression: Value<string>;
    Tags?: List<ResourceTag>;
    QueryName: Value<string>;
}
export default class StoredQuery extends ResourceBase<StoredQueryProperties> {
    constructor(properties: StoredQueryProperties);
}
