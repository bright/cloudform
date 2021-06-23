/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MetricToRetain {
    Metric!: Value<string>
    MetricDimension?: MetricDimension

    constructor(properties: MetricToRetain) {
        Object.assign(this, properties)
    }
}

export class MachineLearningDetectionConfig {
    ConfidenceLevel?: Value<string>

    constructor(properties: MachineLearningDetectionConfig) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    DimensionName!: Value<string>
    Operator?: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class MetricValue {
    Count?: Value<string>
    Cidrs?: List<Value<string>>
    Ports?: List<Value<number>>
    Number?: Value<number>
    Numbers?: List<Value<number>>
    Strings?: List<Value<string>>

    constructor(properties: MetricValue) {
        Object.assign(this, properties)
    }
}

export class AlertTarget {
    AlertTargetArn!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: AlertTarget) {
        Object.assign(this, properties)
    }
}

export class Behavior {
    Name!: Value<string>
    Metric?: Value<string>
    MetricDimension?: MetricDimension
    Criteria?: BehaviorCriteria
    SuppressAlerts?: Value<boolean>

    constructor(properties: Behavior) {
        Object.assign(this, properties)
    }
}

export class BehaviorCriteria {
    ComparisonOperator?: Value<string>
    Value?: MetricValue
    DurationSeconds?: Value<number>
    ConsecutiveDatapointsToAlarm?: Value<number>
    ConsecutiveDatapointsToClear?: Value<number>
    StatisticalThreshold?: StatisticalThreshold
    MlDetectionConfig?: MachineLearningDetectionConfig

    constructor(properties: BehaviorCriteria) {
        Object.assign(this, properties)
    }
}

export class StatisticalThreshold {
    Statistic?: Value<string>

    constructor(properties: StatisticalThreshold) {
        Object.assign(this, properties)
    }
}

export interface SecurityProfileProperties {
    SecurityProfileName?: Value<string>
    SecurityProfileDescription?: Value<string>
    Behaviors?: List<Behavior>
    AlertTargets?: {[key: string]: AlertTarget}
    AdditionalMetricsToRetainV2?: List<MetricToRetain>
    Tags?: List<ResourceTag>
    TargetArns?: List<Value<string>>
}

export default class SecurityProfile extends ResourceBase<SecurityProfileProperties> {
    static MetricToRetain = MetricToRetain
    static MachineLearningDetectionConfig = MachineLearningDetectionConfig
    static MetricDimension = MetricDimension
    static MetricValue = MetricValue
    static AlertTarget = AlertTarget
    static Behavior = Behavior
    static BehaviorCriteria = BehaviorCriteria
    static StatisticalThreshold = StatisticalThreshold

    constructor(properties?: SecurityProfileProperties) {
        super('AWS::IoT::SecurityProfile', properties || {})
    }
}
