import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConfigurationItem {
    Type?: Value<string>;
    Parameters?: List<ConfigurationParameter>;
    constructor(properties: ConfigurationItem);
}
export declare class ConfigurationParameter {
    Values?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: ConfigurationParameter);
}
export declare class Query {
    TagFilters?: List<TagFilter>;
    ResourceTypeFilters?: List<Value<string>>;
    StackIdentifier?: Value<string>;
    constructor(properties: Query);
}
export declare class ResourceQuery {
    Type?: Value<string>;
    Query?: Query;
    constructor(properties: ResourceQuery);
}
export declare class TagFilter {
    Values?: List<Value<string>>;
    Key?: Value<string>;
    constructor(properties: TagFilter);
}
export interface GroupProperties {
    Description?: Value<string>;
    Configuration?: List<ConfigurationItem>;
    ResourceQuery?: ResourceQuery;
    Resources?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static ConfigurationItem: typeof ConfigurationItem;
    static ConfigurationParameter: typeof ConfigurationParameter;
    static Query: typeof Query;
    static ResourceQuery: typeof ResourceQuery;
    static TagFilter: typeof TagFilter;
    constructor(properties: GroupProperties);
}
