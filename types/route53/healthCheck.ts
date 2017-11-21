import {ResourceBase} from '../resource'
import {Value} from '../internal'
import HealthCheckConfig from './healthCheckConfig'
import HealthCheckTag from './healthCheckTag'



export interface HealthCheckProperties {
    HealthCheckConfig?: HealthCheckConfig
    HealthCheckTags?: HealthCheckTag[]
}

export default class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::HealthCheck', properties, dependsOn)
    }
}