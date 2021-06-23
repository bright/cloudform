import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TargetDescription {
    AvailabilityZone?: Value<string>;
    Id: Value<string>;
    Port?: Value<number>;
    constructor(properties: TargetDescription);
}
export declare class TargetGroupAttribute {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: TargetGroupAttribute);
}
export declare class Matcher {
    GrpcCode?: Value<string>;
    HttpCode?: Value<string>;
    constructor(properties: Matcher);
}
export interface TargetGroupProperties {
    HealthCheckEnabled?: Value<boolean>;
    HealthCheckIntervalSeconds?: Value<number>;
    HealthCheckPath?: Value<string>;
    HealthCheckPort?: Value<string>;
    HealthCheckProtocol?: Value<string>;
    HealthCheckTimeoutSeconds?: Value<number>;
    HealthyThresholdCount?: Value<number>;
    Matcher?: Matcher;
    Name?: Value<string>;
    Port?: Value<number>;
    Protocol?: Value<string>;
    ProtocolVersion?: Value<string>;
    Tags?: List<ResourceTag>;
    TargetGroupAttributes?: List<TargetGroupAttribute>;
    TargetType?: Value<string>;
    Targets?: List<TargetDescription>;
    UnhealthyThresholdCount?: Value<number>;
    VpcId?: Value<string>;
}
export default class TargetGroup extends ResourceBase<TargetGroupProperties> {
    static TargetDescription: typeof TargetDescription;
    static TargetGroupAttribute: typeof TargetGroupAttribute;
    static Matcher: typeof Matcher;
    constructor(properties?: TargetGroupProperties);
}
