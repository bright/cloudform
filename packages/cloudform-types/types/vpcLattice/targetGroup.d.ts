import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HealthCheckConfig {
    Path?: Value<string>;
    HealthCheckIntervalSeconds?: Value<number>;
    Matcher?: Matcher;
    HealthyThresholdCount?: Value<number>;
    Port?: Value<number>;
    Enabled?: Value<boolean>;
    Protocol?: Value<string>;
    ProtocolVersion?: Value<string>;
    UnhealthyThresholdCount?: Value<number>;
    HealthCheckTimeoutSeconds?: Value<number>;
    constructor(properties: HealthCheckConfig);
}
export declare class Matcher {
    HttpCode: Value<string>;
    constructor(properties: Matcher);
}
export declare class Target {
    Port?: Value<number>;
    Id: Value<string>;
    constructor(properties: Target);
}
export declare class TargetGroupConfig {
    IpAddressType?: Value<string>;
    Port?: Value<number>;
    HealthCheck?: HealthCheckConfig;
    LambdaEventStructureVersion?: Value<string>;
    VpcIdentifier?: Value<string>;
    Protocol?: Value<string>;
    ProtocolVersion?: Value<string>;
    constructor(properties: TargetGroupConfig);
}
export interface TargetGroupProperties {
    Type: Value<string>;
    Config?: TargetGroupConfig;
    Targets?: List<Target>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class TargetGroup extends ResourceBase<TargetGroupProperties> {
    static HealthCheckConfig: typeof HealthCheckConfig;
    static Matcher: typeof Matcher;
    static Target: typeof Target;
    static TargetGroupConfig: typeof TargetGroupConfig;
    constructor(properties: TargetGroupProperties);
}
