/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CustomizedMetricSpecification {
    MetricName!: Value<string>
    Statistic!: Value<string>
    Dimensions?: List<MetricDimension>
    Unit?: Value<string>
    Namespace!: Value<string>

    constructor(properties: CustomizedMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class Metric {
    MetricName!: Value<string>
    Dimensions?: List<MetricDimension>
    Namespace!: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export class MetricDataQuery {
    ReturnData?: Value<boolean>
    Expression?: Value<string>
    Label?: Value<string>
    MetricStat?: MetricStat
    Id!: Value<string>

    constructor(properties: MetricDataQuery) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class MetricStat {
    Stat!: Value<string>
    Metric!: Metric
    Unit?: Value<string>

    constructor(properties: MetricStat) {
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

export class PredictiveScalingConfiguration {
    MaxCapacityBreachBehavior?: Value<string>
    MaxCapacityBuffer?: Value<number>
    Mode?: Value<string>
    MetricSpecifications!: List<PredictiveScalingMetricSpecification>
    SchedulingBufferTime?: Value<number>

    constructor(properties: PredictiveScalingConfiguration) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedCapacityMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedCapacityMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedLoadMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedLoadMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedScalingMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedScalingMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingMetricSpecification {
    CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric
    PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric
    TargetValue!: Value<number>
    PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric
    CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric
    CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric
    PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair

    constructor(properties: PredictiveScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedLoadMetric {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedLoadMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedMetricPair {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedMetricPair) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedScalingMetric {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedScalingMetric) {
        Object.assign(this, properties)
    }
}

export class StepAdjustment {
    MetricIntervalUpperBound?: Value<number>
    MetricIntervalLowerBound?: Value<number>
    ScalingAdjustment!: Value<number>

    constructor(properties: StepAdjustment) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingConfiguration {
    TargetValue!: Value<number>
    CustomizedMetricSpecification?: CustomizedMetricSpecification
    DisableScaleIn?: Value<boolean>
    PredefinedMetricSpecification?: PredefinedMetricSpecification

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ScalingPolicyProperties {
    MetricAggregationType?: Value<string>
    PolicyType?: Value<string>
    PredictiveScalingConfiguration?: PredictiveScalingConfiguration
    ScalingAdjustment?: Value<number>
    Cooldown?: Value<string>
    StepAdjustments?: List<StepAdjustment>
    AutoScalingGroupName: Value<string>
    MinAdjustmentMagnitude?: Value<number>
    TargetTrackingConfiguration?: TargetTrackingConfiguration
    EstimatedInstanceWarmup?: Value<number>
    AdjustmentType?: Value<string>
}

export default class ScalingPolicy extends ResourceBase<ScalingPolicyProperties> {
    static CustomizedMetricSpecification = CustomizedMetricSpecification
    static Metric = Metric
    static MetricDataQuery = MetricDataQuery
    static MetricDimension = MetricDimension
    static MetricStat = MetricStat
    static PredefinedMetricSpecification = PredefinedMetricSpecification
    static PredictiveScalingConfiguration = PredictiveScalingConfiguration
    static PredictiveScalingCustomizedCapacityMetric = PredictiveScalingCustomizedCapacityMetric
    static PredictiveScalingCustomizedLoadMetric = PredictiveScalingCustomizedLoadMetric
    static PredictiveScalingCustomizedScalingMetric = PredictiveScalingCustomizedScalingMetric
    static PredictiveScalingMetricSpecification = PredictiveScalingMetricSpecification
    static PredictiveScalingPredefinedLoadMetric = PredictiveScalingPredefinedLoadMetric
    static PredictiveScalingPredefinedMetricPair = PredictiveScalingPredefinedMetricPair
    static PredictiveScalingPredefinedScalingMetric = PredictiveScalingPredefinedScalingMetric
    static StepAdjustment = StepAdjustment
    static TargetTrackingConfiguration = TargetTrackingConfiguration

    constructor(properties: ScalingPolicyProperties) {
        super('AWS::AutoScaling::ScalingPolicy', properties)
    }
}
