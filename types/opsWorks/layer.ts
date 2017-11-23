/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface ShutdownEventConfigurationProperties {
    DelayUntilElbConnectionsDrained?: Value<boolean>
    ExecutionTimeout?: Value<number>
}

export class ShutdownEventConfiguration extends ResourceBase {
    constructor(properties: ShutdownEventConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::ShutdownEventConfiguration', properties, dependsOn)
    }
}

export interface VolumeConfigurationProperties {
    Iops?: Value<number>
    MountPoint?: Value<string>
    NumberOfDisks?: Value<number>
    RaidLevel?: Value<number>
    Size?: Value<number>
    VolumeType?: Value<string>
}

export class VolumeConfiguration extends ResourceBase {
    constructor(properties: VolumeConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::VolumeConfiguration', properties, dependsOn)
    }
}

export interface AutoScalingThresholdsProperties {
    CpuThreshold?: Value<number>
    IgnoreMetricsTime?: Value<number>
    InstanceCount?: Value<number>
    LoadThreshold?: Value<number>
    MemoryThreshold?: Value<number>
    ThresholdsWaitTime?: Value<number>
}

export class AutoScalingThresholds extends ResourceBase {
    constructor(properties: AutoScalingThresholdsProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::AutoScalingThresholds', properties, dependsOn)
    }
}

export interface RecipesProperties {
    Configure?: Value<string>[]
    Deploy?: Value<string>[]
    Setup?: Value<string>[]
    Shutdown?: Value<string>[]
    Undeploy?: Value<string>[]
}

export class Recipes extends ResourceBase {
    constructor(properties: RecipesProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::Recipes', properties, dependsOn)
    }
}

export interface LifecycleEventConfigurationProperties {
    ShutdownEventConfiguration?: ShutdownEventConfiguration
}

export class LifecycleEventConfiguration extends ResourceBase {
    constructor(properties: LifecycleEventConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::LifecycleEventConfiguration', properties, dependsOn)
    }
}

export interface LoadBasedAutoScalingProperties {
    DownScaling?: AutoScalingThresholds
    Enable?: Value<boolean>
    UpScaling?: AutoScalingThresholds
}

export class LoadBasedAutoScaling extends ResourceBase {
    constructor(properties: LoadBasedAutoScalingProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::LoadBasedAutoScaling', properties, dependsOn)
    }
}

export interface LayerProperties {
    Attributes?: {[key: string]: Value<string>}
    AutoAssignElasticIps: Value<boolean>
    AutoAssignPublicIps: Value<boolean>
    CustomInstanceProfileArn?: Value<string>
    CustomJson?: any
    CustomRecipes?: Recipes
    CustomSecurityGroupIds?: Value<string>[]
    EnableAutoHealing: Value<boolean>
    InstallUpdatesOnBoot?: Value<boolean>
    LifecycleEventConfiguration?: LifecycleEventConfiguration
    LoadBasedAutoScaling?: LoadBasedAutoScaling
    Name: Value<string>
    Packages?: Value<string>[]
    Shortname: Value<string>
    StackId: Value<string>
    Tags?: ResourceTag[]
    Type: Value<string>
    UseEbsOptimizedInstances?: Value<boolean>
    VolumeConfigurations?: VolumeConfiguration[]
}

export default class Layer extends ResourceBase {
    constructor(properties: LayerProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::Layer', properties, dependsOn)
    }
}