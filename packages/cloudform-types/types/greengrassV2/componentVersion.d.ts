import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComponentDependencyRequirement {
    VersionRequirement?: Value<string>;
    DependencyType?: Value<string>;
    constructor(properties: ComponentDependencyRequirement);
}
export declare class ComponentPlatform {
    Attributes?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
    constructor(properties: ComponentPlatform);
}
export declare class LambdaContainerParams {
    Volumes?: List<LambdaVolumeMount>;
    MountROSysfs?: Value<boolean>;
    MemorySizeInKB?: Value<number>;
    Devices?: List<LambdaDeviceMount>;
    constructor(properties: LambdaContainerParams);
}
export declare class LambdaDeviceMount {
    Path?: Value<string>;
    AddGroupOwner?: Value<boolean>;
    Permission?: Value<string>;
    constructor(properties: LambdaDeviceMount);
}
export declare class LambdaEventSource {
    Type?: Value<string>;
    Topic?: Value<string>;
    constructor(properties: LambdaEventSource);
}
export declare class LambdaExecutionParameters {
    MaxInstancesCount?: Value<number>;
    TimeoutInSeconds?: Value<number>;
    EnvironmentVariables?: {
        [key: string]: Value<string>;
    };
    EventSources?: List<LambdaEventSource>;
    Pinned?: Value<boolean>;
    ExecArgs?: List<Value<string>>;
    LinuxProcessParams?: LambdaLinuxProcessParams;
    InputPayloadEncodingType?: Value<string>;
    MaxQueueSize?: Value<number>;
    StatusTimeoutInSeconds?: Value<number>;
    MaxIdleTimeInSeconds?: Value<number>;
    constructor(properties: LambdaExecutionParameters);
}
export declare class LambdaFunctionRecipeSource {
    ComponentDependencies?: {
        [key: string]: ComponentDependencyRequirement;
    };
    ComponentLambdaParameters?: LambdaExecutionParameters;
    LambdaArn?: Value<string>;
    ComponentPlatforms?: List<ComponentPlatform>;
    ComponentName?: Value<string>;
    ComponentVersion?: Value<string>;
    constructor(properties: LambdaFunctionRecipeSource);
}
export declare class LambdaLinuxProcessParams {
    IsolationMode?: Value<string>;
    ContainerParams?: LambdaContainerParams;
    constructor(properties: LambdaLinuxProcessParams);
}
export declare class LambdaVolumeMount {
    SourcePath?: Value<string>;
    DestinationPath?: Value<string>;
    AddGroupOwner?: Value<boolean>;
    Permission?: Value<string>;
    constructor(properties: LambdaVolumeMount);
}
export interface ComponentVersionProperties {
    LambdaFunction?: LambdaFunctionRecipeSource;
    InlineRecipe?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ComponentVersion extends ResourceBase<ComponentVersionProperties> {
    static ComponentDependencyRequirement: typeof ComponentDependencyRequirement;
    static ComponentPlatform: typeof ComponentPlatform;
    static LambdaContainerParams: typeof LambdaContainerParams;
    static LambdaDeviceMount: typeof LambdaDeviceMount;
    static LambdaEventSource: typeof LambdaEventSource;
    static LambdaExecutionParameters: typeof LambdaExecutionParameters;
    static LambdaFunctionRecipeSource: typeof LambdaFunctionRecipeSource;
    static LambdaLinuxProcessParams: typeof LambdaLinuxProcessParams;
    static LambdaVolumeMount: typeof LambdaVolumeMount;
    constructor(properties?: ComponentVersionProperties);
}
