import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Target {
    TargetType: Value<string>;
    TargetAddress: Value<string>;
    constructor(properties: Target);
}
export interface NotificationRuleProperties {
    EventTypeIds: List<Value<string>>;
    Status?: Value<string>;
    CreatedBy?: Value<string>;
    DetailType: Value<string>;
    Resource: Value<string>;
    EventTypeId?: Value<string>;
    TargetAddress?: Value<string>;
    Targets: List<Target>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class NotificationRule extends ResourceBase<NotificationRuleProperties> {
    static Target: typeof Target;
    constructor(properties: NotificationRuleProperties);
}
