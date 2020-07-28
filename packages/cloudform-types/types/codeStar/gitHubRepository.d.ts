import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
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
export interface GitHubRepositoryProperties {
    EnableIssues?: Value<boolean>;
    RepositoryName: Value<string>;
    RepositoryAccessToken: Value<string>;
    RepositoryOwner: Value<string>;
    IsPrivate?: Value<boolean>;
    Code?: Code;
    RepositoryDescription?: Value<string>;
}
export default class GitHubRepository extends ResourceBase<GitHubRepositoryProperties> {
    static Code: typeof Code;
    static S3: typeof S3;
    constructor(properties: GitHubRepositoryProperties);
}
