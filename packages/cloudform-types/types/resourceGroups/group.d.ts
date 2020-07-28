import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagFilter {
    Key?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: TagFilter);
}
export declare class Query {
    ResourceTypeFilters?: List<Value<string>>;
    StackIdentifier?: Value<string>;
    TagFilters?: List<TagFilter>;
    constructor(properties: Query);
}
export declare class ResourceQuery {
    Type?: Value<string>;
    Query?: Query;
    constructor(properties: ResourceQuery);
}
export interface GroupProperties {
    Name: Value<string>;
    Description?: Value<string>;
    ResourceQuery?: ResourceQuery;
    Tags?: List<ResourceTag>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static TagFilter: typeof TagFilter;
    static Query: typeof Query;
    static ResourceQuery: typeof ResourceQuery;
    constructor(properties: GroupProperties);
}
