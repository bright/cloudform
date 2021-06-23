import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DnsConfig {
    DnsRecords: List<DnsRecord>;
    RoutingPolicy?: Value<string>;
    NamespaceId?: Value<string>;
    constructor(properties: DnsConfig);
}
export declare class HealthCheckConfig {
    Type: Value<string>;
    ResourcePath?: Value<string>;
    FailureThreshold?: Value<number>;
    constructor(properties: HealthCheckConfig);
}
export declare class HealthCheckCustomConfig {
    FailureThreshold?: Value<number>;
    constructor(properties: HealthCheckCustomConfig);
}
export declare class DnsRecord {
    Type: Value<string>;
    TTL: Value<number>;
    constructor(properties: DnsRecord);
}
export interface ServiceProperties {
    Type?: Value<string>;
    Description?: Value<string>;
    HealthCheckCustomConfig?: HealthCheckCustomConfig;
    DnsConfig?: DnsConfig;
    NamespaceId?: Value<string>;
    HealthCheckConfig?: HealthCheckConfig;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static DnsConfig: typeof DnsConfig;
    static HealthCheckConfig: typeof HealthCheckConfig;
    static HealthCheckCustomConfig: typeof HealthCheckCustomConfig;
    static DnsRecord: typeof DnsRecord;
    constructor(properties?: ServiceProperties);
}
