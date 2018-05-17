/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.2.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class MetricTransformation {
    MetricName: Value<string>
    MetricNamespace: Value<string>
    MetricValue: Value<string>

    constructor(properties: MetricTransformation) {
        Object.assign(this, properties)
    }
}

export interface MetricFilterProperties {
    FilterPattern: Value<string>
    LogGroupName: Value<string>
    MetricTransformations: List<MetricTransformation>
}

export default class MetricFilter extends ResourceBase {
    static MetricTransformation = MetricTransformation

    constructor(properties?: MetricFilterProperties) {
        super('AWS::Logs::MetricFilter', properties)
    }
}
