import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface MetricTransformationProperties {
    MetricName: Value<string>
    MetricNamespace: Value<string>
    MetricValue: Value<string>
}

export default class MetricTransformation extends ResourceBase {
    constructor(properties: MetricTransformationProperties, dependsOn?: Value<string>) {
        super('AWS::Logs::MetricTransformation', properties, dependsOn)
    }
}