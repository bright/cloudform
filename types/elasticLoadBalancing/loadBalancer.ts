/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.4.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HealthCheck {
    HealthyThreshold!: Value<string>
    Interval!: Value<string>
    Target!: Value<string>
    Timeout!: Value<string>
    UnhealthyThreshold!: Value<string>

    constructor(properties: HealthCheck) {
        Object.assign(this, properties)
    }
}

export class AccessLoggingPolicy {
    EmitInterval?: Value<number>
    Enabled!: Value<boolean>
    S3BucketName!: Value<string>
    S3BucketPrefix?: Value<string>

    constructor(properties: AccessLoggingPolicy) {
        Object.assign(this, properties)
    }
}

export class ConnectionSettings {
    IdleTimeout!: Value<number>

    constructor(properties: ConnectionSettings) {
        Object.assign(this, properties)
    }
}

export class LBCookieStickinessPolicy {
    CookieExpirationPeriod?: Value<string>
    PolicyName?: Value<string>

    constructor(properties: LBCookieStickinessPolicy) {
        Object.assign(this, properties)
    }
}

export class ConnectionDrainingPolicy {
    Enabled!: Value<boolean>
    Timeout?: Value<number>

    constructor(properties: ConnectionDrainingPolicy) {
        Object.assign(this, properties)
    }
}

export class Listeners {
    InstancePort!: Value<string>
    InstanceProtocol?: Value<string>
    LoadBalancerPort!: Value<string>
    PolicyNames?: List<Value<string>>
    Protocol!: Value<string>
    SSLCertificateId?: Value<string>

    constructor(properties: Listeners) {
        Object.assign(this, properties)
    }
}

export class Policies {
    Attributes!: List<any>
    InstancePorts?: List<Value<string>>
    LoadBalancerPorts?: List<Value<string>>
    PolicyName!: Value<string>
    PolicyType!: Value<string>

    constructor(properties: Policies) {
        Object.assign(this, properties)
    }
}

export class AppCookieStickinessPolicy {
    CookieName!: Value<string>
    PolicyName!: Value<string>

    constructor(properties: AppCookieStickinessPolicy) {
        Object.assign(this, properties)
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
    static HealthCheck = HealthCheck
    static AccessLoggingPolicy = AccessLoggingPolicy
    static ConnectionSettings = ConnectionSettings
    static LBCookieStickinessPolicy = LBCookieStickinessPolicy
    static ConnectionDrainingPolicy = ConnectionDrainingPolicy
    static Listeners = Listeners
    static Policies = Policies
    static AppCookieStickinessPolicy = AppCookieStickinessPolicy

    constructor(properties?: LoadBalancerProperties) {
        super('AWS::ElasticLoadBalancing::LoadBalancer', properties)
    }
}
