import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceCollectionFilter {
    CloudFormation?: CloudFormationCollectionFilter;
    constructor(properties: ResourceCollectionFilter);
}
export declare class CloudFormationCollectionFilter {
    StackNames?: List<Value<string>>;
    constructor(properties: CloudFormationCollectionFilter);
}
export interface ResourceCollectionProperties {
    ResourceCollectionFilter: ResourceCollectionFilter;
}
export default class ResourceCollection extends ResourceBase<ResourceCollectionProperties> {
    static ResourceCollectionFilter: typeof ResourceCollectionFilter;
    static CloudFormationCollectionFilter: typeof CloudFormationCollectionFilter;
    constructor(properties: ResourceCollectionProperties);
}
