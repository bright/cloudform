import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComponentPlatform {
    Name?: Value<string>;
    Attributes?: {
        [key: string]: Value<string>;
    };
    constructor(properties: ComponentPlatform);
}
export declare class LambdaContainerParams {
    MemorySizeInKB?: Value<number>;
    MountROSysfs?: Value<boolean>;
    Volumes?: List<LambdaVolumeMount>;
    Devices?: List<LambdaDeviceMount>;
    constructor(properties: LambdaContainerParams);
}
export declare class LambdaVolumeMount {
    SourcePath?: Value<string>;
    DestinationPath?: Value<string>;
    Permission?: Value<string>;
    AddGroupOwner?: Value<boolean>;
    constructor(properties: LambdaVolumeMount);
}
export declare class LambdaFunctionRecipeSource {
    LambdaArn?: Value<string>;
    ComponentName?: Value<string>;
    ComponentVersion?: Value<string>;
    ComponentPlatforms?: List<ComponentPlatform>;
    ComponentDependencies?: {
        [key: string]: ComponentDependencyRequirement;
    };
    ComponentLambdaParameters?: LambdaExecutionParameters;
    constructor(properties: LambdaFunctionRecipeSource);
}
export declare class ComponentDependencyRequirement {
    VersionRequirement?: Value<string>;
    DependencyType?: Value<string>;
    constructor(properties: ComponentDependencyRequirement);
}
export declare class LambdaDeviceMount {
    Path?: Value<string>;
    Permission?: Value<string>;
    AddGroupOwner?: Value<boolean>;
    constructor(properties: LambdaDeviceMount);
}
export declare class LambdaLinuxProcessParams {
    IsolationMode?: Value<string>;
    ContainerParams?: LambdaContainerParams;
    constructor(properties: LambdaLinuxProcessParams);
}
export declare class LambdaEventSource {
    Topic?: Value<string>;
    Type?: Value<string>;
    constructor(properties: LambdaEventSource);
}
export declare class LambdaExecutionParameters {
    EventSources?: List<LambdaEventSource>;
    MaxQueueSize?: Value<number>;
    MaxInstancesCount?: Value<number>;
    MaxIdleTimeInSeconds?: Value<number>;
    TimeoutInSeconds?: Value<number>;
    StatusTimeoutInSeconds?: Value<number>;
    Pinned?: Value<boolean>;
    InputPayloadEncodingType?: Value<string>;
    ExecArgs?: List<Value<string>>;
    EnvironmentVariables?: {
        [key: string]: Value<string>;
    };
    LinuxProcessParams?: LambdaLinuxProcessParams;
    constructor(properties: LambdaExecutionParameters);
}
export interface ComponentVersionProperties {
    InlineRecipe?: Value<string>;
    LambdaFunction?: LambdaFunctionRecipeSource;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ComponentVersion extends ResourceBase<ComponentVersionProperties> {
    static ComponentPlatform: typeof ComponentPlatform;
    static LambdaContainerParams: typeof LambdaContainerParams;
    static LambdaVolumeMount: typeof LambdaVolumeMount;
    static LambdaFunctionRecipeSource: typeof LambdaFunctionRecipeSource;
    static ComponentDependencyRequirement: typeof ComponentDependencyRequirement;
    static LambdaDeviceMount: typeof LambdaDeviceMount;
    static LambdaLinuxProcessParams: typeof LambdaLinuxProcessParams;
    static LambdaEventSource: typeof LambdaEventSource;
    static LambdaExecutionParameters: typeof LambdaExecutionParameters;
    constructor(properties?: ComponentVersionProperties);
}
