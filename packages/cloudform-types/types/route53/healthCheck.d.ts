import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AlarmIdentifier {
    Region: Value<string>;
    Name: Value<string>;
    constructor(properties: AlarmIdentifier);
}
export declare class HealthCheckConfig {
    EnableSNI?: Value<boolean>;
    ChildHealthChecks?: List<Value<string>>;
    MeasureLatency?: Value<boolean>;
    Port?: Value<number>;
    Regions?: List<Value<string>>;
    InsufficientDataHealthStatus?: Value<string>;
    SearchString?: Value<string>;
    Type: Value<string>;
    ResourcePath?: Value<string>;
    RoutingControlArn?: Value<string>;
    FullyQualifiedDomainName?: Value<string>;
    Inverted?: Value<boolean>;
    HealthThreshold?: Value<number>;
    RequestInterval?: Value<number>;
    AlarmIdentifier?: AlarmIdentifier;
    FailureThreshold?: Value<number>;
    IPAddress?: Value<string>;
    constructor(properties: HealthCheckConfig);
}
export declare class HealthCheckTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: HealthCheckTag);
}
export interface HealthCheckProperties {
    HealthCheckConfig: HealthCheckConfig;
    HealthCheckTags?: List<HealthCheckTag>;
}
export default class HealthCheck extends ResourceBase<HealthCheckProperties> {
    static AlarmIdentifier: typeof AlarmIdentifier;
    static HealthCheckConfig: typeof HealthCheckConfig;
    static HealthCheckTag: typeof HealthCheckTag;
    constructor(properties: HealthCheckProperties);
}
