/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface MetricTransformationProperties {
    MetricName: Value<string>
    MetricNamespace: Value<string>
    MetricValue: Value<string>
}

export class MetricTransformation extends ResourceBase {
    constructor(properties: MetricTransformationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Logs::MetricTransformation', properties, dependsOn)
    }
}

export interface MetricFilterProperties {
    FilterPattern: Value<string>
    LogGroupName: Value<string>
    MetricTransformations: MetricTransformation[]
}

export default class MetricFilter extends ResourceBase {
    constructor(properties: MetricFilterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Logs::MetricFilter', properties, dependsOn)
    }
}
