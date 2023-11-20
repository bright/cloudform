import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbortIncompleteMultipartUpload {
    DaysAfterInitiation: Value<number>;
    constructor(properties: AbortIncompleteMultipartUpload);
}
export declare class Filter {
    AndOperator?: FilterAndOperator;
    Prefix?: Value<string>;
    Tag?: FilterTag;
    constructor(properties: Filter);
}
export declare class FilterAndOperator {
    Prefix?: Value<string>;
    Tags: List<FilterTag>;
    constructor(properties: FilterAndOperator);
}
export declare class FilterTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: FilterTag);
}
export declare class LifecycleConfiguration {
    Rules: List<Rule>;
    constructor(properties: LifecycleConfiguration);
}
export declare class Rule {
    Status: Value<string>;
    ExpirationDate?: Value<string>;
    Filter?: Filter;
    ExpirationInDays?: Value<number>;
    Id?: Value<string>;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    constructor(properties: Rule);
}
export interface BucketProperties {
    OutpostId: Value<string>;
    BucketName: Value<string>;
    LifecycleConfiguration?: LifecycleConfiguration;
    Tags?: List<ResourceTag>;
}
export default class Bucket extends ResourceBase<BucketProperties> {
    static AbortIncompleteMultipartUpload: typeof AbortIncompleteMultipartUpload;
    static Filter: typeof Filter;
    static FilterAndOperator: typeof FilterAndOperator;
    static FilterTag: typeof FilterTag;
    static LifecycleConfiguration: typeof LifecycleConfiguration;
    static Rule: typeof Rule;
    constructor(properties: BucketProperties);
}
