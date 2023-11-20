import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudFormationCollectionFilter {
    StackNames?: List<Value<string>>;
    constructor(properties: CloudFormationCollectionFilter);
}
export declare class ResourceCollectionFilter {
    CloudFormation?: CloudFormationCollectionFilter;
    Tags?: List<TagCollection>;
    constructor(properties: ResourceCollectionFilter);
}
export declare class TagCollection {
    AppBoundaryKey?: Value<string>;
    TagValues?: List<Value<string>>;
    constructor(properties: TagCollection);
}
export interface ResourceCollectionProperties {
    ResourceCollectionFilter: ResourceCollectionFilter;
}
export default class ResourceCollection extends ResourceBase<ResourceCollectionProperties> {
    static CloudFormationCollectionFilter: typeof CloudFormationCollectionFilter;
    static ResourceCollectionFilter: typeof ResourceCollectionFilter;
    static TagCollection: typeof TagCollection;
    constructor(properties: ResourceCollectionProperties);
}
