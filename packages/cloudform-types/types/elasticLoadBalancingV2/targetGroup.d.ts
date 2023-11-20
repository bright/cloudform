import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Matcher {
    GrpcCode?: Value<string>;
    HttpCode?: Value<string>;
    constructor(properties: Matcher);
}
export declare class TargetDescription {
    Port?: Value<number>;
    AvailabilityZone?: Value<string>;
    Id: Value<string>;
    constructor(properties: TargetDescription);
}
export declare class TargetGroupAttribute {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: TargetGroupAttribute);
}
export interface TargetGroupProperties {
    IpAddressType?: Value<string>;
    HealthCheckIntervalSeconds?: Value<number>;
    Matcher?: Matcher;
    HealthCheckPath?: Value<string>;
    Port?: Value<number>;
    Targets?: List<TargetDescription>;
    HealthCheckEnabled?: Value<boolean>;
    ProtocolVersion?: Value<string>;
    UnhealthyThresholdCount?: Value<number>;
    HealthCheckTimeoutSeconds?: Value<number>;
    Name?: Value<string>;
    VpcId?: Value<string>;
    HealthyThresholdCount?: Value<number>;
    HealthCheckProtocol?: Value<string>;
    TargetGroupAttributes?: List<TargetGroupAttribute>;
    TargetType?: Value<string>;
    HealthCheckPort?: Value<string>;
    Protocol?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TargetGroup extends ResourceBase<TargetGroupProperties> {
    static Matcher: typeof Matcher;
    static TargetDescription: typeof TargetDescription;
    static TargetGroupAttribute: typeof TargetGroupAttribute;
    constructor(properties?: TargetGroupProperties);
}
