/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface HostedZoneTagProperties {
    Key: Value<string>
    Value: Value<string>
}

export class HostedZoneTag extends ResourceBase {
    constructor(properties: HostedZoneTagProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::HostedZoneTag', properties, dependsOn)
    }
}

export interface HostedZoneConfigProperties {
    Comment?: Value<string>
}

export class HostedZoneConfig extends ResourceBase {
    constructor(properties: HostedZoneConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::HostedZoneConfig', properties, dependsOn)
    }
}

export interface QueryLoggingConfigProperties {
    CloudWatchLogsLogGroupArn: Value<string>
}

export class QueryLoggingConfig extends ResourceBase {
    constructor(properties: QueryLoggingConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::QueryLoggingConfig', properties, dependsOn)
    }
}

export interface VPCProperties {
    VPCId: Value<string>
    VPCRegion: Value<string>
}

export class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::VPC', properties, dependsOn)
    }
}

export interface HostedZoneProperties {
    HostedZoneConfig?: HostedZoneConfig
    HostedZoneTags?: List<HostedZoneTag>
    Name: Value<string>
    QueryLoggingConfig?: QueryLoggingConfig
    VPCs?: List<VPC>
}

export default class HostedZone extends ResourceBase {
    constructor(properties: HostedZoneProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Route53::HostedZone', properties, dependsOn)
    }
}
