import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LifecycleHookProperties {
    LifecycleHookName?: Value<string>;
    LifecycleTransition: Value<string>;
    AutoScalingGroupName: Value<string>;
    HeartbeatTimeout?: Value<number>;
    NotificationMetadata?: Value<string>;
    DefaultResult?: Value<string>;
    NotificationTargetARN?: Value<string>;
    RoleARN?: Value<string>;
}
export default class LifecycleHook extends ResourceBase<LifecycleHookProperties> {
    constructor(properties: LifecycleHookProperties);
}
