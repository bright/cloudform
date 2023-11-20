/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AlertTarget {
    AlertTargetArn!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: AlertTarget) {
        Object.assign(this, properties)
    }
}

export class Behavior {
    SuppressAlerts?: Value<boolean>
    Metric?: Value<string>
    Criteria?: BehaviorCriteria
    MetricDimension?: MetricDimension
    Name!: Value<string>

    constructor(properties: Behavior) {
        Object.assign(this, properties)
    }
}

export class BehaviorCriteria {
    ComparisonOperator?: Value<string>
    MlDetectionConfig?: MachineLearningDetectionConfig
    Value?: MetricValue
    StatisticalThreshold?: StatisticalThreshold
    DurationSeconds?: Value<number>
    ConsecutiveDatapointsToAlarm?: Value<number>
    ConsecutiveDatapointsToClear?: Value<number>

    constructor(properties: BehaviorCriteria) {
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
    Operator?: Value<string>
    DimensionName!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class MetricToRetain {
    Metric!: Value<string>
    MetricDimension?: MetricDimension

    constructor(properties: MetricToRetain) {
        Object.assign(this, properties)
    }
}

export class MetricValue {
    Numbers?: List<Value<number>>
    Number?: Value<number>
    Ports?: List<Value<number>>
    Count?: Value<string>
    Strings?: List<Value<string>>
    Cidrs?: List<Value<string>>

    constructor(properties: MetricValue) {
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
    AdditionalMetricsToRetainV2?: List<MetricToRetain>
    SecurityProfileDescription?: Value<string>
    Behaviors?: List<Behavior>
    SecurityProfileName?: Value<string>
    AlertTargets?: {[key: string]: AlertTarget}
    TargetArns?: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class SecurityProfile extends ResourceBase<SecurityProfileProperties> {
    static AlertTarget = AlertTarget
    static Behavior = Behavior
    static BehaviorCriteria = BehaviorCriteria
    static MachineLearningDetectionConfig = MachineLearningDetectionConfig
    static MetricDimension = MetricDimension
    static MetricToRetain = MetricToRetain
    static MetricValue = MetricValue
    static StatisticalThreshold = StatisticalThreshold

    constructor(properties?: SecurityProfileProperties) {
        super('AWS::IoT::SecurityProfile', properties || {})
    }
}
