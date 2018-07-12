/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DnsConfig {
    DnsRecords!: List<DnsRecord>
    RoutingPolicy?: Value<string>
    NamespaceId!: Value<string>

    constructor(properties: DnsConfig) {
        Object.assign(this, properties)
    }
}

export class DnsRecord {
    Type!: Value<string>
    TTL!: Value<string>

    constructor(properties: DnsRecord) {
        Object.assign(this, properties)
    }
}

export class HealthCheckCustomConfig {
    FailureThreshold?: Value<number>

    constructor(properties: HealthCheckCustomConfig) {
        Object.assign(this, properties)
    }
}

export class HealthCheckConfig {
    Type!: Value<string>
    ResourcePath?: Value<string>
    FailureThreshold?: Value<number>

    constructor(properties: HealthCheckConfig) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    Description?: Value<string>
    HealthCheckCustomConfig?: HealthCheckCustomConfig
    DnsConfig: DnsConfig
    HealthCheckConfig?: HealthCheckConfig
    Name?: Value<string>
}

export default class Service extends ResourceBase {
    static DnsConfig = DnsConfig
    static DnsRecord = DnsRecord
    static HealthCheckCustomConfig = HealthCheckCustomConfig
    static HealthCheckConfig = HealthCheckConfig

    constructor(properties?: ServiceProperties) {
        super('AWS::ServiceDiscovery::Service', properties)
    }
}
