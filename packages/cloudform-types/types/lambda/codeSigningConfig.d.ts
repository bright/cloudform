import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AllowedPublishers {
    SigningProfileVersionArns: List<Value<string>>;
    constructor(properties: AllowedPublishers);
}
export declare class CodeSigningPolicies {
    UntrustedArtifactOnDeployment: Value<string>;
    constructor(properties: CodeSigningPolicies);
}
export interface CodeSigningConfigProperties {
    Description?: Value<string>;
    AllowedPublishers: AllowedPublishers;
    CodeSigningPolicies?: CodeSigningPolicies;
}
export default class CodeSigningConfig extends ResourceBase<CodeSigningConfigProperties> {
    static AllowedPublishers: typeof AllowedPublishers;
    static CodeSigningPolicies: typeof CodeSigningPolicies;
    constructor(properties: CodeSigningConfigProperties);
}
