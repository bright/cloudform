import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GeoLocationProperties {
    ContinentCode?: Value<string>;
    CountryCode?: Value<string>;
    SubdivisionCode?: Value<string>;
}
export declare class GeoLocation extends ResourceBase {
    constructor(properties: GeoLocationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AliasTargetProperties {
    DNSName: Value<string>;
    EvaluateTargetHealth?: Value<boolean>;
    HostedZoneId: Value<string>;
}
export declare class AliasTarget extends ResourceBase {
    constructor(properties: AliasTargetProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RecordSetProperties {
    AliasTarget?: AliasTarget;
    Comment?: Value<string>;
    Failover?: Value<string>;
    GeoLocation?: GeoLocation;
    HealthCheckId?: Value<string>;
    HostedZoneId?: Value<string>;
    HostedZoneName?: Value<string>;
    Name: Value<string>;
    Region?: Value<string>;
    ResourceRecords?: Value<string>[];
    SetIdentifier?: Value<string>;
    TTL?: Value<string>;
    Type: Value<string>;
    Weight?: Value<number>;
}
export default class RecordSet extends ResourceBase {
    constructor(properties: RecordSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
