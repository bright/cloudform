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
export declare class ConfigurationParameter {
    Name?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: ConfigurationParameter);
}
export declare class ConfigurationItem {
    Type?: Value<string>;
    Parameters?: List<ConfigurationParameter>;
    constructor(properties: ConfigurationItem);
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
    Configuration?: List<ConfigurationItem>;
    Resources?: List<Value<string>>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static TagFilter: typeof TagFilter;
    static Query: typeof Query;
    static ConfigurationParameter: typeof ConfigurationParameter;
    static ConfigurationItem: typeof ConfigurationItem;
    static ResourceQuery: typeof ResourceQuery;
    constructor(properties: GroupProperties);
}
