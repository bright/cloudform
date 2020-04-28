/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class EbsBlockDeviceConfig {
    VolumeSpecification!: VolumeSpecification
    VolumesPerInstance?: Value<number>

    constructor(properties: EbsBlockDeviceConfig) {
        Object.assign(this, properties)
    }
}

export class ScalingAction {
    Market?: Value<string>
    SimpleScalingPolicyConfiguration!: SimpleScalingPolicyConfiguration

    constructor(properties: ScalingAction) {
        Object.assign(this, properties)
    }
}

export class ScalingTrigger {
    CloudWatchAlarmDefinition!: CloudWatchAlarmDefinition

    constructor(properties: ScalingTrigger) {
        Object.assign(this, properties)
    }
}

export class VolumeSpecification {
    Iops?: Value<number>
    SizeInGB!: Value<number>
    VolumeType!: Value<string>

    constructor(properties: VolumeSpecification) {
        Object.assign(this, properties)
    }
}

export class AutoScalingPolicy {
    Constraints!: ScalingConstraints
    Rules!: List<ScalingRule>

    constructor(properties: AutoScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>
    EbsOptimized?: Value<boolean>

    constructor(properties: EbsConfiguration) {
        Object.assign(this, properties)
    }
}

export class Configuration {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: List<Configuration>

    constructor(properties: Configuration) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class SimpleScalingPolicyConfiguration {
    AdjustmentType?: Value<string>
    CoolDown?: Value<number>
    ScalingAdjustment!: Value<number>

    constructor(properties: SimpleScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScalingRule {
    Action!: ScalingAction
    Description?: Value<string>
    Name!: Value<string>
    Trigger!: ScalingTrigger

    constructor(properties: ScalingRule) {
        Object.assign(this, properties)
    }
}

export class ScalingConstraints {
    MaxCapacity!: Value<number>
    MinCapacity!: Value<number>

    constructor(properties: ScalingConstraints) {
        Object.assign(this, properties)
    }
}

export class CloudWatchAlarmDefinition {
    ComparisonOperator!: Value<string>
    Dimensions?: List<MetricDimension>
    EvaluationPeriods?: Value<number>
    MetricName!: Value<string>
    Namespace?: Value<string>
    Period!: Value<number>
    Statistic?: Value<string>
    Threshold!: Value<number>
    Unit?: Value<string>

    constructor(properties: CloudWatchAlarmDefinition) {
        Object.assign(this, properties)
    }
}

export interface InstanceGroupConfigProperties {
    AutoScalingPolicy?: AutoScalingPolicy
    BidPrice?: Value<string>
    Configurations?: List<Configuration>
    EbsConfiguration?: EbsConfiguration
    InstanceCount: Value<number>
    InstanceRole: Value<string>
    InstanceType: Value<string>
    JobFlowId: Value<string>
    Market?: Value<string>
    Name?: Value<string>
}

export default class InstanceGroupConfig extends ResourceBase<InstanceGroupConfigProperties> {
    static EbsBlockDeviceConfig = EbsBlockDeviceConfig
    static ScalingAction = ScalingAction
    static ScalingTrigger = ScalingTrigger
    static VolumeSpecification = VolumeSpecification
    static AutoScalingPolicy = AutoScalingPolicy
    static EbsConfiguration = EbsConfiguration
    static Configuration = Configuration
    static MetricDimension = MetricDimension
    static SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration
    static ScalingRule = ScalingRule
    static ScalingConstraints = ScalingConstraints
    static CloudWatchAlarmDefinition = CloudWatchAlarmDefinition

    constructor(properties: InstanceGroupConfigProperties) {
        super('AWS::EMR::InstanceGroupConfig', properties)
    }
}
