import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AliasTarget {
    DNSName: Value<string>;
    EvaluateTargetHealth?: Value<boolean>;
    HostedZoneId: Value<string>;
    constructor(properties: AliasTarget);
}
export declare class CidrRoutingConfig {
    CollectionId: Value<string>;
    LocationName: Value<string>;
    constructor(properties: CidrRoutingConfig);
}
export declare class GeoLocation {
    ContinentCode?: Value<string>;
    CountryCode?: Value<string>;
    SubdivisionCode?: Value<string>;
    constructor(properties: GeoLocation);
}
export interface RecordSetProperties {
    AliasTarget?: AliasTarget;
    CidrRoutingConfig?: CidrRoutingConfig;
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
}
export default class RecordSet extends ResourceBase<RecordSetProperties> {
    static AliasTarget: typeof AliasTarget;
    static CidrRoutingConfig: typeof CidrRoutingConfig;
    static GeoLocation: typeof GeoLocation;
    constructor(properties: RecordSetProperties);
}
