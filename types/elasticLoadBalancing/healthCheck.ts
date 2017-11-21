import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface HealthCheckProperties {
    HealthyThreshold: Value<string>
    Interval: Value<string>
    Target: Value<string>
    Timeout: Value<string>
    UnhealthyThreshold: Value<string>
}

export default class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancing::HealthCheck', properties, dependsOn)
    }
}