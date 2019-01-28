/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ShutdownEventConfiguration {
    DelayUntilElbConnectionsDrained?: Value<boolean>
    ExecutionTimeout?: Value<number>

    constructor(properties: ShutdownEventConfiguration) {
        Object.assign(this, properties)
    }
}

export class VolumeConfiguration {
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    MountPoint?: Value<string>
    NumberOfDisks?: Value<number>
    RaidLevel?: Value<number>
    Size?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: VolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export class AutoScalingThresholds {
    CpuThreshold?: Value<number>
    IgnoreMetricsTime?: Value<number>
    InstanceCount?: Value<number>
    LoadThreshold?: Value<number>
    MemoryThreshold?: Value<number>
    ThresholdsWaitTime?: Value<number>

    constructor(properties: AutoScalingThresholds) {
        Object.assign(this, properties)
    }
}

export class Recipes {
    Configure?: List<Value<string>>
    Deploy?: List<Value<string>>
    Setup?: List<Value<string>>
    Shutdown?: List<Value<string>>
    Undeploy?: List<Value<string>>

    constructor(properties: Recipes) {
        Object.assign(this, properties)
    }
}

export class LifecycleEventConfiguration {
    ShutdownEventConfiguration?: ShutdownEventConfiguration

    constructor(properties: LifecycleEventConfiguration) {
        Object.assign(this, properties)
    }
}

export class LoadBasedAutoScaling {
    DownScaling?: AutoScalingThresholds
    Enable?: Value<boolean>
    UpScaling?: AutoScalingThresholds

    constructor(properties: LoadBasedAutoScaling) {
        Object.assign(this, properties)
    }
}

export interface LayerProperties {
    Attributes?: {[key: string]: Value<string>}
    AutoAssignElasticIps: Value<boolean>
    AutoAssignPublicIps: Value<boolean>
    CustomInstanceProfileArn?: Value<string>
    CustomJson?: {[key: string]: any}
    CustomRecipes?: Recipes
    CustomSecurityGroupIds?: List<Value<string>>
    EnableAutoHealing: Value<boolean>
    InstallUpdatesOnBoot?: Value<boolean>
    LifecycleEventConfiguration?: LifecycleEventConfiguration
    LoadBasedAutoScaling?: LoadBasedAutoScaling
    Name: Value<string>
    Packages?: List<Value<string>>
    Shortname: Value<string>
    StackId: Value<string>
    Tags?: List<ResourceTag>
    Type: Value<string>
    UseEbsOptimizedInstances?: Value<boolean>
    VolumeConfigurations?: List<VolumeConfiguration>
}

export default class Layer extends ResourceBase {
    static ShutdownEventConfiguration = ShutdownEventConfiguration
    static VolumeConfiguration = VolumeConfiguration
    static AutoScalingThresholds = AutoScalingThresholds
    static Recipes = Recipes
    static LifecycleEventConfiguration = LifecycleEventConfiguration
    static LoadBasedAutoScaling = LoadBasedAutoScaling

    constructor(properties?: LayerProperties) {
        super('AWS::OpsWorks::Layer', properties)
    }
}
