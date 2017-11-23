/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface DimensionProperties {
    Name: Value<string>
    Value: Value<string>
}

export class Dimension extends ResourceBase {
    constructor(properties: DimensionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudWatch::Dimension', properties, dependsOn)
    }
}

export interface AlarmProperties {
    ActionsEnabled?: Value<boolean>
    AlarmActions?: Value<string>[]
    AlarmDescription?: Value<string>
    AlarmName?: Value<string>
    ComparisonOperator: Value<string>
    Dimensions?: Dimension[]
    EvaluateLowSampleCountPercentile?: Value<string>
    EvaluationPeriods: Value<number>
    ExtendedStatistic?: Value<string>
    InsufficientDataActions?: Value<string>[]
    MetricName: Value<string>
    Namespace: Value<string>
    OKActions?: Value<string>[]
    Period: Value<number>
    Statistic?: Value<string>
    Threshold: Value<number>
    TreatMissingData?: Value<string>
    Unit?: Value<string>
}

export default class Alarm extends ResourceBase {
    constructor(properties: AlarmProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudWatch::Alarm', properties, dependsOn)
    }
}
