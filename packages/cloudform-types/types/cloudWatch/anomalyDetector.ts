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

export class Configuration {
    MetricTimeZone?: Value<string>
    ExcludedTimeRanges?: List<Range>

    constructor(properties: Configuration) {
        Object.assign(this, properties)
    }
}

export class Dimension {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class Metric {
    MetricName!: Value<string>
    Dimensions?: List<Dimension>
    Namespace!: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export type MetricDataQueries = List<MetricDataQuery>

export class MetricDataQuery {
    AccountId?: Value<string>
    ReturnData?: Value<boolean>
    Expression?: Value<string>
    MetricStat?: MetricStat
    Label?: Value<string>
    Period?: Value<number>
    Id!: Value<string>

    constructor(properties: MetricDataQuery) {
        Object.assign(this, properties)
    }
}

export class MetricMathAnomalyDetector {
    MetricDataQueries?: List<MetricDataQuery>

    constructor(properties: MetricMathAnomalyDetector) {
        Object.assign(this, properties)
    }
}

export class MetricStat {
    Stat!: Value<string>
    Period!: Value<number>
    Metric!: Metric
    Unit?: Value<string>

    constructor(properties: MetricStat) {
        Object.assign(this, properties)
    }
}

export class Range {
    EndTime!: Value<string>
    StartTime!: Value<string>

    constructor(properties: Range) {
        Object.assign(this, properties)
    }
}

export class SingleMetricAnomalyDetector {
    MetricName?: Value<string>
    Stat?: Value<string>
    Dimensions?: List<Dimension>
    Namespace?: Value<string>

    constructor(properties: SingleMetricAnomalyDetector) {
        Object.assign(this, properties)
    }
}

export interface AnomalyDetectorProperties {
    MetricName?: Value<string>
    Stat?: Value<string>
    Configuration?: Configuration
    MetricMathAnomalyDetector?: MetricMathAnomalyDetector
    Dimensions?: List<Dimension>
    Namespace?: Value<string>
    SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector
}

export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static Configuration = Configuration
    static Dimension = Dimension
    static Metric = Metric
    static MetricDataQuery = MetricDataQuery
    static MetricMathAnomalyDetector = MetricMathAnomalyDetector
    static MetricStat = MetricStat
    static Range = Range
    static SingleMetricAnomalyDetector = SingleMetricAnomalyDetector

    constructor(properties?: AnomalyDetectorProperties) {
        super('AWS::CloudWatch::AnomalyDetector', properties || {})
    }
}
