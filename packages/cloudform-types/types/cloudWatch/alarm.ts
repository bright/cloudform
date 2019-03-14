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

export class MetricStat {
    Metric!: Metric
    Period!: Value<number>
    Stat!: Value<string>
    Unit?: Value<string>

    constructor(properties: MetricStat) {
        Object.assign(this, properties)
    }
}

export class Dimension {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class MetricDataQuery {
    Expression?: Value<string>
    Id!: Value<string>
    Label?: Value<string>
    MetricStat?: MetricStat
    ReturnData?: Value<boolean>

    constructor(properties: MetricDataQuery) {
        Object.assign(this, properties)
    }
}

export class Metric {
    Dimensions?: List<Dimension>
    MetricName?: Value<string>
    Namespace?: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export interface AlarmProperties {
    ActionsEnabled?: Value<boolean>
    AlarmActions?: List<Value<string>>
    AlarmDescription?: Value<string>
    AlarmName?: Value<string>
    ComparisonOperator: Value<string>
    DatapointsToAlarm?: Value<number>
    Dimensions?: List<Dimension>
    EvaluateLowSampleCountPercentile?: Value<string>
    EvaluationPeriods: Value<number>
    ExtendedStatistic?: Value<string>
    InsufficientDataActions?: List<Value<string>>
    MetricName?: Value<string>
    Metrics?: List<MetricDataQuery>
    Namespace?: Value<string>
    OKActions?: List<Value<string>>
    Period?: Value<number>
    Statistic?: Value<string>
    Threshold: Value<number>
    TreatMissingData?: Value<string>
    Unit?: Value<string>
}

export default class Alarm extends ResourceBase<AlarmProperties> {
    static MetricStat = MetricStat
    static Dimension = Dimension
    static MetricDataQuery = MetricDataQuery
    static Metric = Metric

    constructor(properties?: AlarmProperties) {
        super('AWS::CloudWatch::Alarm', properties)
    }
}
