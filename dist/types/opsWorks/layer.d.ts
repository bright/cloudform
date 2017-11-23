import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ShutdownEventConfigurationProperties {
    DelayUntilElbConnectionsDrained?: Value<boolean>;
    ExecutionTimeout?: Value<number>;
}
export declare class ShutdownEventConfiguration extends ResourceBase {
    constructor(properties: ShutdownEventConfigurationProperties, dependsOn?: Value<string>);
}
export interface VolumeConfigurationProperties {
    Iops?: Value<number>;
    MountPoint?: Value<string>;
    NumberOfDisks?: Value<number>;
    RaidLevel?: Value<number>;
    Size?: Value<number>;
    VolumeType?: Value<string>;
}
export declare class VolumeConfiguration extends ResourceBase {
    constructor(properties: VolumeConfigurationProperties, dependsOn?: Value<string>);
}
export interface AutoScalingThresholdsProperties {
    CpuThreshold?: Value<number>;
    IgnoreMetricsTime?: Value<number>;
    InstanceCount?: Value<number>;
    LoadThreshold?: Value<number>;
    MemoryThreshold?: Value<number>;
    ThresholdsWaitTime?: Value<number>;
}
export declare class AutoScalingThresholds extends ResourceBase {
    constructor(properties: AutoScalingThresholdsProperties, dependsOn?: Value<string>);
}
export interface RecipesProperties {
    Configure?: Value<string>[];
    Deploy?: Value<string>[];
    Setup?: Value<string>[];
    Shutdown?: Value<string>[];
    Undeploy?: Value<string>[];
}
export declare class Recipes extends ResourceBase {
    constructor(properties: RecipesProperties, dependsOn?: Value<string>);
}
export interface LifecycleEventConfigurationProperties {
    ShutdownEventConfiguration?: ShutdownEventConfiguration;
}
export declare class LifecycleEventConfiguration extends ResourceBase {
    constructor(properties: LifecycleEventConfigurationProperties, dependsOn?: Value<string>);
}
export interface LoadBasedAutoScalingProperties {
    DownScaling?: AutoScalingThresholds;
    Enable?: Value<boolean>;
    UpScaling?: AutoScalingThresholds;
}
export declare class LoadBasedAutoScaling extends ResourceBase {
    constructor(properties: LoadBasedAutoScalingProperties, dependsOn?: Value<string>);
}
export interface LayerProperties {
    Attributes?: {
        [key: string]: Value<string>;
    };
    AutoAssignElasticIps: Value<boolean>;
    AutoAssignPublicIps: Value<boolean>;
    CustomInstanceProfileArn?: Value<string>;
    CustomJson?: any;
    CustomRecipes?: Recipes;
    CustomSecurityGroupIds?: Value<string>[];
    EnableAutoHealing: Value<boolean>;
    InstallUpdatesOnBoot?: Value<boolean>;
    LifecycleEventConfiguration?: LifecycleEventConfiguration;
    LoadBasedAutoScaling?: LoadBasedAutoScaling;
    Name: Value<string>;
    Packages?: Value<string>[];
    Shortname: Value<string>;
    StackId: Value<string>;
    Tags?: ResourceTag[];
    Type: Value<string>;
    UseEbsOptimizedInstances?: Value<boolean>;
    VolumeConfigurations?: VolumeConfiguration[];
}
export default class Layer extends ResourceBase {
    constructor(properties: LayerProperties, dependsOn?: Value<string>);
}
