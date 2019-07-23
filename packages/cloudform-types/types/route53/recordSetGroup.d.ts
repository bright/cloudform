import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RecordSet {
    AliasTarget?: AliasTarget;
    Comment?: Value<string>;
    Failover?: Value<string>;
    GeoLocation?: GeoLocation;
    HealthCheckId?: Value<string>;
    HostedZoneId?: Value<string>;
    HostedZoneName?: Value<string>;
    MultiValueAnswer?: Value<boolean>;
    Name: Value<string>;
    Region?: Value<string>;
    ResourceRecords?: List<Value<string>>;
    SetIdentifier?: Value<string>;
    TTL?: Value<string>;
    Type: Value<string>;
    Weight?: Value<number>;
    constructor(properties: RecordSet);
}
export declare class AliasTarget {
    DNSName: Value<string>;
    EvaluateTargetHealth?: Value<boolean>;
    HostedZoneId: Value<string>;
    constructor(properties: AliasTarget);
}
export declare class GeoLocation {
    ContinentCode?: Value<string>;
    CountryCode?: Value<string>;
    SubdivisionCode?: Value<string>;
    constructor(properties: GeoLocation);
}
export interface RecordSetGroupProperties {
    Comment?: Value<string>;
    HostedZoneId?: Value<string>;
    HostedZoneName?: Value<string>;
    RecordSets?: List<RecordSet>;
}
export default class RecordSetGroup extends ResourceBase<RecordSetGroupProperties> {
    static RecordSet: typeof RecordSet;
    static AliasTarget: typeof AliasTarget;
    static GeoLocation: typeof GeoLocation;
    constructor(properties?: RecordSetGroupProperties);
}
