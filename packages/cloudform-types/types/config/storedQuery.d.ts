import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StoredQueryProperties {
    QueryName: Value<string>;
    QueryDescription?: Value<string>;
    QueryExpression: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class StoredQuery extends ResourceBase<StoredQueryProperties> {
    constructor(properties: StoredQueryProperties);
}
