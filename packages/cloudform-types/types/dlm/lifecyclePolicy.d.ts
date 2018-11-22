import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Schedule {
    TagsToAdd?: List<ResourceTag>;
    CreateRule?: CreateRule;
    RetainRule?: RetainRule;
    Name?: Value<string>;
    CopyTags?: Value<boolean>;
    constructor(properties: Schedule);
}
export declare class CreateRule {
    IntervalUnit: Value<string>;
    Times?: List<Value<string>>;
    Interval: Value<number>;
    constructor(properties: CreateRule);
}
export declare class RetainRule {
    Count: Value<number>;
    constructor(properties: RetainRule);
}
export declare class PolicyDetails {
    ResourceTypes?: List<Value<string>>;
    Schedules?: List<Schedule>;
    TargetTags?: List<ResourceTag>;
    constructor(properties: PolicyDetails);
}
export interface LifecyclePolicyProperties {
    ExecutionRoleArn?: Value<string>;
    Description?: Value<string>;
    State?: Value<string>;
    PolicyDetails?: PolicyDetails;
}
export default class LifecyclePolicy extends ResourceBase {
    static Schedule: typeof Schedule;
    static CreateRule: typeof CreateRule;
    static RetainRule: typeof RetainRule;
    static PolicyDetails: typeof PolicyDetails;
    constructor(properties?: LifecyclePolicyProperties);
}
