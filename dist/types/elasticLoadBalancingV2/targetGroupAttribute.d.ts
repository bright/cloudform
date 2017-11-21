import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Key = "*" | "deregistration_delay.timeout_seconds" | "stickiness.enabled" | "stickiness.type" | "stickiness.lb_cookie.duration_seconds";
export interface TargetGroupAttributeProperties {
    Key?: Value<Key>;
    Value?: Value<string>;
}
export default class TargetGroupAttribute extends ResourceBase {
    constructor(properties: TargetGroupAttributeProperties, dependsOn?: Value<string>);
}
