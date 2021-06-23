import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbortIncompleteMultipartUpload {
    DaysAfterInitiation: Value<number>;
    constructor(properties: AbortIncompleteMultipartUpload);
}
export declare class Rule {
    Status?: Value<string>;
    Id?: Value<string>;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    ExpirationDate?: Value<string>;
    ExpirationInDays?: Value<number>;
    Filter?: {
        [key: string]: any;
    };
    constructor(properties: Rule);
}
export declare class LifecycleConfiguration {
    Rules: List<Rule>;
    constructor(properties: LifecycleConfiguration);
}
export interface BucketProperties {
    BucketName: Value<string>;
    OutpostId: Value<string>;
    Tags?: List<ResourceTag>;
    LifecycleConfiguration?: LifecycleConfiguration;
}
export default class Bucket extends ResourceBase<BucketProperties> {
    static AbortIncompleteMultipartUpload: typeof AbortIncompleteMultipartUpload;
    static Rule: typeof Rule;
    static LifecycleConfiguration: typeof LifecycleConfiguration;
    constructor(properties: BucketProperties);
}
