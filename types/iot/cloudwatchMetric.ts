import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CloudwatchMetricProperties {
    MetricName: Value<string>
    MetricNamespace: Value<string>
    MetricTimestamp?: Value<string>
    MetricUnit: Value<string>
    MetricValue: Value<string>
    RoleArn?: Value<string>
}

export default class CloudwatchMetric extends ResourceBase {
    constructor(properties: CloudwatchMetricProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::CloudwatchMetric', properties, dependsOn)
    }
}