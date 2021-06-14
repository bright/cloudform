/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DnsConfig {
    DnsRecords!: List<DnsRecord>
    RoutingPolicy?: Value<string>
    NamespaceId?: Value<string>

    constructor(properties: DnsConfig) {
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

export class HealthCheckCustomConfig {
    FailureThreshold?: Value<number>

    constructor(properties: HealthCheckCustomConfig) {
        Object.assign(this, properties)
    }
}

export class DnsRecord {
    Type!: Value<string>
    TTL!: Value<number>

    constructor(properties: DnsRecord) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    Type?: Value<string>
    Description?: Value<string>
    HealthCheckCustomConfig?: HealthCheckCustomConfig
    DnsConfig?: DnsConfig
    NamespaceId?: Value<string>
    HealthCheckConfig?: HealthCheckConfig
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class Service extends ResourceBase<ServiceProperties> {
    static DnsConfig = DnsConfig
    static HealthCheckConfig = HealthCheckConfig
    static HealthCheckCustomConfig = HealthCheckCustomConfig
    static DnsRecord = DnsRecord

    constructor(properties?: ServiceProperties) {
        super('AWS::ServiceDiscovery::Service', properties || {})
    }
}
