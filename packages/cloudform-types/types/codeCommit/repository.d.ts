import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Code {
    S3: S3;
    BranchName?: Value<string>;
    constructor(properties: Code);
}
export declare class RepositoryTrigger {
    Events: List<Value<string>>;
    Branches?: List<Value<string>>;
    CustomData?: Value<string>;
    DestinationArn: Value<string>;
    Name: Value<string>;
    constructor(properties: RepositoryTrigger);
}
export declare class S3 {
    ObjectVersion?: Value<string>;
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: S3);
}
export interface RepositoryProperties {
    RepositoryName: Value<string>;
    Triggers?: List<RepositoryTrigger>;
    Code?: Code;
    RepositoryDescription?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    static Code: typeof Code;
    static RepositoryTrigger: typeof RepositoryTrigger;
    static S3: typeof S3;
    constructor(properties: RepositoryProperties);
}
