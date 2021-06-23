import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BasicAuthConfig {
    Username: Value<string>;
    EnableBasicAuth?: Value<boolean>;
    Password: Value<string>;
    constructor(properties: BasicAuthConfig);
}
export declare class EnvironmentVariable {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export interface BranchProperties {
    Description?: Value<string>;
    EnvironmentVariables?: List<EnvironmentVariable>;
    AppId: Value<string>;
    PullRequestEnvironmentName?: Value<string>;
    EnablePullRequestPreview?: Value<boolean>;
    EnableAutoBuild?: Value<boolean>;
    EnablePerformanceMode?: Value<boolean>;
    BuildSpec?: Value<string>;
    Stage?: Value<string>;
    BranchName: Value<string>;
    BasicAuthConfig?: BasicAuthConfig;
    Tags?: List<ResourceTag>;
}
export default class Branch extends ResourceBase<BranchProperties> {
    static BasicAuthConfig: typeof BasicAuthConfig;
    static EnvironmentVariable: typeof EnvironmentVariable;
    constructor(properties: BranchProperties);
}
