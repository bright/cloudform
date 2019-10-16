import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class GitConfig {
    SecretArn?: Value<string>;
    Branch?: Value<string>;
    RepositoryUrl: Value<string>;
    constructor(properties: GitConfig);
}
export interface CodeRepositoryProperties {
    CodeRepositoryName?: Value<string>;
    GitConfig: GitConfig;
}
export default class CodeRepository extends ResourceBase<CodeRepositoryProperties> {
    static GitConfig: typeof GitConfig;
    constructor(properties: CodeRepositoryProperties);
}
