/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class StepScalingPolicyConfiguration {
    AdjustmentType?: Value<string>
    Cooldown?: Value<number>
    MetricAggregationType?: Value<string>
    MinAdjustmentMagnitude?: Value<number>
    StepAdjustments?: List<StepAdjustment>

    constructor(properties: StepScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class StepAdjustment {
    MetricIntervalLowerBound?: Value<number>
    MetricIntervalUpperBound?: Value<number>
    ScalingAdjustment!: Value<number>

    constructor(properties: StepAdjustment) {
        Object.assign(this, properties)
    }
}

export class PredefinedMetricSpecification {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredefinedMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class CustomizedMetricSpecification {
    Dimensions?: List<MetricDimension>
    MetricName!: Value<string>
    Namespace!: Value<string>
    Statistic!: Value<string>
    Unit?: Value<string>

    constructor(properties: CustomizedMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingScalingPolicyConfiguration {
    CustomizedMetricSpecification?: CustomizedMetricSpecification
    DisableScaleIn?: Value<boolean>
    PredefinedMetricSpecification?: PredefinedMetricSpecification
    ScaleInCooldown?: Value<number>
    ScaleOutCooldown?: Value<number>
    TargetValue!: Value<number>

    constructor(properties: TargetTrackingScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ScalingPolicyProperties {
    PolicyName: Value<string>
    PolicyType: Value<string>
    ResourceId?: Value<string>
    ScalableDimension?: Value<string>
    ScalingTargetId?: Value<string>
    ServiceNamespace?: Value<string>
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration
    TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration
}

export default class ScalingPolicy extends ResourceBase<ScalingPolicyProperties> {
    static StepScalingPolicyConfiguration = StepScalingPolicyConfiguration
    static MetricDimension = MetricDimension
    static StepAdjustment = StepAdjustment
    static PredefinedMetricSpecification = PredefinedMetricSpecification
    static CustomizedMetricSpecification = CustomizedMetricSpecification
    static TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration

    constructor(properties?: ScalingPolicyProperties) {
        super('AWS::ApplicationAutoScaling::ScalingPolicy', properties)
    }
}
