/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface RecordSetProperties {
    AliasTarget?: AliasTarget
    Comment?: Value<string>
    Failover?: Value<string>
    GeoLocation?: GeoLocation
    HealthCheckId?: Value<string>
    HostedZoneId?: Value<string>
    HostedZoneName?: Value<string>
    Name: Value<string>
    Region?: Value<string>
    ResourceRecords?: List<Value<string>>
    SetIdentifier?: Value<string>
    TTL?: Value<string>
    Type: Value<string>
    Weight?: Value<number>
}

export class RecordSet extends ResourceBase {
    constructor(properties: RecordSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::RecordSet', properties, dependsOn)
    }
}

export interface GeoLocationProperties {
    ContinentCode?: Value<string>
    CountryCode?: Value<string>
    SubdivisionCode?: Value<string>
}

export class GeoLocation extends ResourceBase {
    constructor(properties: GeoLocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::GeoLocation', properties, dependsOn)
    }
}

export interface AliasTargetProperties {
    DNSName: Value<string>
    EvaluateTargetHealth?: Value<boolean>
    HostedZoneId: Value<string>
}

export class AliasTarget extends ResourceBase {
    constructor(properties: AliasTargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::AliasTarget', properties, dependsOn)
    }
}

export interface RecordSetGroupProperties {
    Comment?: Value<string>
    HostedZoneId?: Value<string>
    HostedZoneName?: Value<string>
    RecordSets?: List<RecordSet>
}

export default class RecordSetGroup extends ResourceBase {
    constructor(properties: RecordSetGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::RecordSetGroup', properties, dependsOn)
    }
}
