import { ResourceBase } from '../resource';
import { Value } from '../internal';
import AlarmIdentifier from './alarmIdentifier';
export declare type Type = "*" | "HTTP" | "HTTPS" | "HTTP_STR_MATCH" | "HTTPS_STR_MATCH" | "TCP";
export interface HealthCheckConfigProperties {
    AlarmIdentifier?: AlarmIdentifier;
    ChildHealthChecks?: Value<string>[];
    EnableSNI?: Value<boolean>;
    FailureThreshold?: Value<number>;
    FullyQualifiedDomainName?: Value<string>;
    HealthThreshold?: Value<number>;
    InsufficientDataHealthStatus?: Value<string>;
    Inverted?: Value<boolean>;
    IPAddress?: Value<string>;
    MeasureLatency?: Value<boolean>;
    Port?: Value<number>;
    RequestInterval?: Value<number>;
    ResourcePath?: Value<string>;
    SearchString?: Value<string>;
    Type: Value<Type>;
}
export default class HealthCheckConfig extends ResourceBase {
    constructor(properties: HealthCheckConfigProperties, dependsOn?: Value<string>);
}
