/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface HealthCheckConfigProperties {
    AlarmIdentifier?: AlarmIdentifier
    ChildHealthChecks?: Value<string>[]
    EnableSNI?: Value<boolean>
    FailureThreshold?: Value<number>
    FullyQualifiedDomainName?: Value<string>
    HealthThreshold?: Value<number>
    IPAddress?: Value<string>
    InsufficientDataHealthStatus?: Value<string>
    Inverted?: Value<boolean>
    MeasureLatency?: Value<boolean>
    Port?: Value<number>
    RequestInterval?: Value<number>
    ResourcePath?: Value<string>
    SearchString?: Value<string>
    Type: Value<string>
}

export class HealthCheckConfig extends ResourceBase {
    constructor(properties: HealthCheckConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::HealthCheckConfig', properties, dependsOn)
    }
}

export interface HealthCheckTagProperties {
    Key: Value<string>
    Value: Value<string>
}

export class HealthCheckTag extends ResourceBase {
    constructor(properties: HealthCheckTagProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::HealthCheckTag', properties, dependsOn)
    }
}

export interface AlarmIdentifierProperties {
    Name: Value<string>
    Region: Value<string>
}

export class AlarmIdentifier extends ResourceBase {
    constructor(properties: AlarmIdentifierProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::AlarmIdentifier', properties, dependsOn)
    }
}

export interface HealthCheckProperties {
    HealthCheckConfig: HealthCheckConfig
    HealthCheckTags?: HealthCheckTag[]
}

export default class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::HealthCheck', properties, dependsOn)
    }
}
