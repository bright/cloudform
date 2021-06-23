import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GitConfig {
    SecretArn?: Value<string>;
    Branch?: Value<string>;
    RepositoryUrl: Value<string>;
    constructor(properties: GitConfig);
}
export interface CodeRepositoryProperties {
    CodeRepositoryName?: Value<string>;
    GitConfig: GitConfig;
    Tags?: List<ResourceTag>;
}
export default class CodeRepository extends ResourceBase<CodeRepositoryProperties> {
    static GitConfig: typeof GitConfig;
    constructor(properties: CodeRepositoryProperties);
}
