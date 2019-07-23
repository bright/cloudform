import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Code {
    S3: S3;
    constructor(properties: Code);
}
export declare class S3 {
    ObjectVersion?: Value<string>;
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: S3);
}
export declare class RepositoryTrigger {
    Events?: List<Value<string>>;
    Branches?: List<Value<string>>;
    CustomData?: Value<string>;
    DestinationArn?: Value<string>;
    Name?: Value<string>;
    constructor(properties: RepositoryTrigger);
}
export interface RepositoryProperties {
    RepositoryName: Value<string>;
    Triggers?: List<RepositoryTrigger>;
    Code?: Code;
    RepositoryDescription?: Value<string>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    static Code: typeof Code;
    static S3: typeof S3;
    static RepositoryTrigger: typeof RepositoryTrigger;
    constructor(properties: RepositoryProperties);
}
