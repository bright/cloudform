import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EnvironmentVariable {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export declare class AutoBranchCreationConfig {
    EnvironmentVariables?: List<EnvironmentVariable>;
    EnableAutoBranchCreation?: Value<boolean>;
    PullRequestEnvironmentName?: Value<string>;
    AutoBranchCreationPatterns?: List<Value<string>>;
    EnablePullRequestPreview?: Value<boolean>;
    EnableAutoBuild?: Value<boolean>;
    EnablePerformanceMode?: Value<boolean>;
    BuildSpec?: Value<string>;
    Stage?: Value<string>;
    BasicAuthConfig?: BasicAuthConfig;
    constructor(properties: AutoBranchCreationConfig);
}
export declare class BasicAuthConfig {
    Username?: Value<string>;
    EnableBasicAuth?: Value<boolean>;
    Password?: Value<string>;
    constructor(properties: BasicAuthConfig);
}
export declare class CustomRule {
    Condition?: Value<string>;
    Status?: Value<string>;
    Target: Value<string>;
    Source: Value<string>;
    constructor(properties: CustomRule);
}
export interface AppProperties {
    AutoBranchCreationConfig?: AutoBranchCreationConfig;
    OauthToken?: Value<string>;
    Description?: Value<string>;
    EnableBranchAutoDeletion?: Value<boolean>;
    Name: Value<string>;
    Repository?: Value<string>;
    EnvironmentVariables?: List<EnvironmentVariable>;
    AccessToken?: Value<string>;
    BuildSpec?: Value<string>;
    CustomRules?: List<CustomRule>;
    BasicAuthConfig?: BasicAuthConfig;
    CustomHeaders?: Value<string>;
    Tags?: List<ResourceTag>;
    IAMServiceRole?: Value<string>;
}
export default class App extends ResourceBase<AppProperties> {
    static EnvironmentVariable: typeof EnvironmentVariable;
    static AutoBranchCreationConfig: typeof AutoBranchCreationConfig;
    static BasicAuthConfig: typeof BasicAuthConfig;
    static CustomRule: typeof CustomRule;
    constructor(properties: AppProperties);
}
