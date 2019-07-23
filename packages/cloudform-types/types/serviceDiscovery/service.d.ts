import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HealthCheckCustomConfig {
    FailureThreshold?: Value<number>;
    constructor(properties: HealthCheckCustomConfig);
}
export declare class DnsConfig {
    DnsRecords: List<DnsRecord>;
    RoutingPolicy?: Value<string>;
    NamespaceId?: Value<string>;
    constructor(properties: DnsConfig);
}
export declare class DnsRecord {
    Type: Value<string>;
    TTL: Value<number>;
    constructor(properties: DnsRecord);
}
export declare class HealthCheckConfig {
    Type: Value<string>;
    ResourcePath?: Value<string>;
    FailureThreshold?: Value<number>;
    constructor(properties: HealthCheckConfig);
}
export interface ServiceProperties {
    Description?: Value<string>;
    HealthCheckCustomConfig?: HealthCheckCustomConfig;
    DnsConfig?: DnsConfig;
    NamespaceId?: Value<string>;
    HealthCheckConfig?: HealthCheckConfig;
    Name?: Value<string>;
}
export default class Service extends ResourceBase<ServiceProperties> {
    static HealthCheckCustomConfig: typeof HealthCheckCustomConfig;
    static DnsConfig: typeof DnsConfig;
    static DnsRecord: typeof DnsRecord;
    static HealthCheckConfig: typeof HealthCheckConfig;
    constructor(properties?: ServiceProperties);
}
