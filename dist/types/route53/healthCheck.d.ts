import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HealthCheckConfigProperties {
    AlarmIdentifier?: AlarmIdentifier;
    ChildHealthChecks?: Value<string>[];
    EnableSNI?: Value<boolean>;
    FailureThreshold?: Value<number>;
    FullyQualifiedDomainName?: Value<string>;
    HealthThreshold?: Value<number>;
    IPAddress?: Value<string>;
    InsufficientDataHealthStatus?: Value<string>;
    Inverted?: Value<boolean>;
    MeasureLatency?: Value<boolean>;
    Port?: Value<number>;
    RequestInterval?: Value<number>;
    ResourcePath?: Value<string>;
    SearchString?: Value<string>;
    Type: Value<string>;
}
export declare class HealthCheckConfig extends ResourceBase {
    constructor(properties: HealthCheckConfigProperties, dependsOn?: Value<string>);
}
export interface HealthCheckTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class HealthCheckTag extends ResourceBase {
    constructor(properties: HealthCheckTagProperties, dependsOn?: Value<string>);
}
export interface AlarmIdentifierProperties {
    Name: Value<string>;
    Region: Value<string>;
}
export declare class AlarmIdentifier extends ResourceBase {
    constructor(properties: AlarmIdentifierProperties, dependsOn?: Value<string>);
}
export interface HealthCheckProperties {
    HealthCheckConfig: HealthCheckConfig;
    HealthCheckTags?: HealthCheckTag[];
}
export default class HealthCheck extends ResourceBase {
    constructor(properties: HealthCheckProperties, dependsOn?: Value<string>);
}
