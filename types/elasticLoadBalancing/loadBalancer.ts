/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export interface HealthCheckProperties {
    HealthyThreshold: Value<string>
    Interval: Value<string>
    Target: Value<string>
    Timeout: Value<string>
    UnhealthyThreshold: Value<string>
}

export class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::HealthCheck', properties, dependsOn)
    }
}

export interface AccessLoggingPolicyProperties {
    EmitInterval?: Value<number>
    Enabled: Value<boolean>
    S3BucketName: Value<string>
    S3BucketPrefix?: Value<string>
}

export class AccessLoggingPolicy extends ResourceBase {
    constructor(properties: AccessLoggingPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::AccessLoggingPolicy', properties, dependsOn)
    }
}

export interface ConnectionSettingsProperties {
    IdleTimeout: Value<number>
}

export class ConnectionSettings extends ResourceBase {
    constructor(properties: ConnectionSettingsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::ConnectionSettings', properties, dependsOn)
    }
}

export interface LBCookieStickinessPolicyProperties {
    CookieExpirationPeriod?: Value<string>
    PolicyName?: Value<string>
}

export class LBCookieStickinessPolicy extends ResourceBase {
    constructor(properties: LBCookieStickinessPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::LBCookieStickinessPolicy', properties, dependsOn)
    }
}

export interface ConnectionDrainingPolicyProperties {
    Enabled: Value<boolean>
    Timeout?: Value<number>
}

export class ConnectionDrainingPolicy extends ResourceBase {
    constructor(properties: ConnectionDrainingPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::ConnectionDrainingPolicy', properties, dependsOn)
    }
}

export interface ListenersProperties {
    InstancePort: Value<string>
    InstanceProtocol?: Value<string>
    LoadBalancerPort: Value<string>
    PolicyNames?: List<Value<string>>
    Protocol: Value<string>
    SSLCertificateId?: Value<string>
}

export class Listeners extends ResourceBase {
    constructor(properties: ListenersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::Listeners', properties, dependsOn)
    }
}

export interface PoliciesProperties {
    Attributes: List<any>
    InstancePorts?: List<Value<string>>
    LoadBalancerPorts?: List<Value<string>>
    PolicyName: Value<string>
    PolicyType: Value<string>
}

export class Policies extends ResourceBase {
    constructor(properties: PoliciesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::Policies', properties, dependsOn)
    }
}

export interface AppCookieStickinessPolicyProperties {
    CookieName: Value<string>
    PolicyName: Value<string>
}

export class AppCookieStickinessPolicy extends ResourceBase {
    constructor(properties: AppCookieStickinessPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::AppCookieStickinessPolicy', properties, dependsOn)
    }
}

export interface LoadBalancerProperties {
    AccessLoggingPolicy?: AccessLoggingPolicy
    AppCookieStickinessPolicy?: List<AppCookieStickinessPolicy>
    AvailabilityZones?: List<Value<string>>
    ConnectionDrainingPolicy?: ConnectionDrainingPolicy
    ConnectionSettings?: ConnectionSettings
    CrossZone?: Value<boolean>
    HealthCheck?: HealthCheck
    Instances?: List<Value<string>>
    LBCookieStickinessPolicy?: List<LBCookieStickinessPolicy>
    Listeners: List<Listeners>
    LoadBalancerName?: Value<string>
    Policies?: List<Policies>
    Scheme?: Value<string>
    SecurityGroups?: List<Value<string>>
    Subnets?: List<Value<string>>
    Tags?: ResourceTag[]
}

export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancing::LoadBalancer', properties, dependsOn)
    }
}
