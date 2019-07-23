import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HealthCheckConfig {
    AlarmIdentifier?: AlarmIdentifier;
    ChildHealthChecks?: List<Value<string>>;
    EnableSNI?: Value<boolean>;
    FailureThreshold?: Value<number>;
    FullyQualifiedDomainName?: Value<string>;
    HealthThreshold?: Value<number>;
    IPAddress?: Value<string>;
    InsufficientDataHealthStatus?: Value<string>;
    Inverted?: Value<boolean>;
    MeasureLatency?: Value<boolean>;
    Port?: Value<number>;
    Regions?: List<Value<string>>;
    RequestInterval?: Value<number>;
    ResourcePath?: Value<string>;
    SearchString?: Value<string>;
    Type: Value<string>;
    constructor(properties: HealthCheckConfig);
}
export declare class AlarmIdentifier {
    Name: Value<string>;
    Region: Value<string>;
    constructor(properties: AlarmIdentifier);
}
export declare class HealthCheckTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: HealthCheckTag);
}
export interface HealthCheckProperties {
    HealthCheckConfig: HealthCheckConfig;
    HealthCheckTags?: List<HealthCheckTag>;
}
export default class HealthCheck extends ResourceBase<HealthCheckProperties> {
    static HealthCheckConfig: typeof HealthCheckConfig;
    static AlarmIdentifier: typeof AlarmIdentifier;
    static HealthCheckTag: typeof HealthCheckTag;
    constructor(properties: HealthCheckProperties);
}
