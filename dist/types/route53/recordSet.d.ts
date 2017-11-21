import { ResourceBase } from '../resource';
import { Value } from '../internal';
import AliasTarget from './aliasTarget';
import GeoLocation from './geoLocation';
export declare type Failover = "PRIMARY" | "SECONDARY";
export declare type Type = "A" | "AAAA" | "CNAME" | "MX" | "NS" | "PTR" | "SOA" | "SPF" | "SRV" | "TXT";
export interface RecordSetProperties {
    AliasTarget?: AliasTarget;
    Comment?: Value<string>;
    Failover?: Value<Failover>;
    GeoLocation?: GeoLocation;
    HostedZoneId?: Value<string>;
    HostedZoneName?: Value<string>;
    Name: Value<string>;
    Region?: Value<string>;
    ResourceRecords?: Value<string>[];
    SetIdentifier?: Value<string>;
    TTL?: Value<string>;
    Type: Value<Type>;
    Weight?: Value<number>;
}
export default class RecordSet extends ResourceBase {
    constructor(properties: RecordSetProperties, dependsOn?: Value<string>);
}
