import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Backend {
    StackArn?: Value<string>;
    constructor(properties: Backend);
}
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
    EnablePerformanceMode?: Value<boolean>;
    Backend?: Backend;
    EnvironmentVariables?: List<EnvironmentVariable>;
    AppId: Value<string>;
    PullRequestEnvironmentName?: Value<string>;
    EnablePullRequestPreview?: Value<boolean>;
    EnableAutoBuild?: Value<boolean>;
    BuildSpec?: Value<string>;
    Stage?: Value<string>;
    BranchName: Value<string>;
    BasicAuthConfig?: BasicAuthConfig;
    Framework?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Branch extends ResourceBase<BranchProperties> {
    static Backend: typeof Backend;
    static BasicAuthConfig: typeof BasicAuthConfig;
    static EnvironmentVariable: typeof EnvironmentVariable;
    constructor(properties: BranchProperties);
}
