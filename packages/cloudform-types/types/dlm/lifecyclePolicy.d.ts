import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FastRestoreRule {
    IntervalUnit?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: FastRestoreRule);
}
export declare class Schedule {
    TagsToAdd?: List<ResourceTag>;
    CreateRule?: CreateRule;
    VariableTags?: List<ResourceTag>;
    FastRestoreRule?: FastRestoreRule;
    RetainRule?: RetainRule;
    CrossRegionCopyRules?: List<CrossRegionCopyRule>;
    Name?: Value<string>;
    CopyTags?: Value<boolean>;
    constructor(properties: Schedule);
}
export declare class CrossRegionCopyRetainRule {
    IntervalUnit: Value<string>;
    Interval: Value<number>;
    constructor(properties: CrossRegionCopyRetainRule);
}
export declare class CrossRegionCopyRule {
    TargetRegion: Value<string>;
    Encrypted: Value<boolean>;
    CmkArn?: Value<string>;
    RetainRule?: CrossRegionCopyRetainRule;
    CopyTags?: Value<boolean>;
    constructor(properties: CrossRegionCopyRule);
}
export declare class CreateRule {
    IntervalUnit?: Value<string>;
    Times?: List<Value<string>>;
    CronExpression?: Value<string>;
    Interval?: Value<number>;
    constructor(properties: CreateRule);
}
export declare class RetainRule {
    IntervalUnit?: Value<string>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: RetainRule);
}
export declare class PolicyDetails {
    ResourceTypes: List<Value<string>>;
    Schedules: List<Schedule>;
    PolicyType?: Value<string>;
    Parameters?: Parameters;
    TargetTags: List<ResourceTag>;
    constructor(properties: PolicyDetails);
}
export declare class Parameters {
    ExcludeBootVolume?: Value<boolean>;
    constructor(properties: Parameters);
}
export interface LifecyclePolicyProperties {
    ExecutionRoleArn?: Value<string>;
    Description?: Value<string>;
    State?: Value<string>;
    PolicyDetails?: PolicyDetails;
}
export default class LifecyclePolicy extends ResourceBase<LifecyclePolicyProperties> {
    static FastRestoreRule: typeof FastRestoreRule;
    static Schedule: typeof Schedule;
    static CrossRegionCopyRetainRule: typeof CrossRegionCopyRetainRule;
    static CrossRegionCopyRule: typeof CrossRegionCopyRule;
    static CreateRule: typeof CreateRule;
    static RetainRule: typeof RetainRule;
    static PolicyDetails: typeof PolicyDetails;
    static Parameters: typeof Parameters;
    constructor(properties?: LifecyclePolicyProperties);
}
