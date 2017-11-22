import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface TargetGroupAttributeProperties {
    Key?: Value<string>;
    Value?: Value<string>;
}
export declare class TargetGroupAttribute extends ResourceBase {
    constructor(properties: TargetGroupAttributeProperties, dependsOn?: Value<string>);
}
export interface MatcherProperties {
    HttpCode: Value<string>;
}
export declare class Matcher extends ResourceBase {
    constructor(properties: MatcherProperties, dependsOn?: Value<string>);
}
export interface TargetDescriptionProperties {
    AvailabilityZone?: Value<string>;
    Id: Value<string>;
    Port?: Value<number>;
}
export declare class TargetDescription extends ResourceBase {
    constructor(properties: TargetDescriptionProperties, dependsOn?: Value<string>);
}
export interface TargetGroupProperties {
    HealthCheckIntervalSeconds?: Value<number>;
    HealthCheckPath?: Value<string>;
    HealthCheckPort?: Value<string>;
    HealthCheckProtocol?: Value<string>;
    HealthCheckTimeoutSeconds?: Value<number>;
    HealthyThresholdCount?: Value<number>;
    Matcher?: Matcher;
    Name?: Value<string>;
    Port: Value<number>;
    Protocol: Value<string>;
    Tags?: ResourceTag[];
    TargetGroupAttributes?: TargetGroupAttribute[];
    TargetType?: Value<string>;
    Targets?: TargetDescription[];
    UnhealthyThresholdCount?: Value<number>;
    VpcId: Value<string>;
}
export default class TargetGroup extends ResourceBase {
    constructor(properties: TargetGroupProperties, dependsOn?: Value<string>);
}
