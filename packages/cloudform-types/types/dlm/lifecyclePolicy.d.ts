import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FastRestoreRule {
    IntervalUnit?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: FastRestoreRule);
}
export declare class EventSource {
    Type: Value<string>;
    Parameters?: EventParameters;
    constructor(properties: EventSource);
}
export declare class EventParameters {
    EventType: Value<string>;
    SnapshotOwner: List<Value<string>>;
    DescriptionRegex?: Value<string>;
    constructor(properties: EventParameters);
}
export declare class Action {
    CrossRegionCopy: List<CrossRegionCopyAction>;
    Name: Value<string>;
    constructor(properties: Action);
}
export declare class CreateRule {
    IntervalUnit?: Value<string>;
    Times?: List<Value<string>>;
    CronExpression?: Value<string>;
    Interval?: Value<number>;
    Location?: Value<string>;
    constructor(properties: CreateRule);
}
export declare class RetainRule {
    IntervalUnit?: Value<string>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: RetainRule);
}
export declare class PolicyDetails {
    ResourceTypes?: List<Value<string>>;
    Schedules?: List<Schedule>;
    PolicyType?: Value<string>;
    EventSource?: EventSource;
    Parameters?: Parameters;
    Actions?: List<Action>;
    TargetTags?: List<ResourceTag>;
    ResourceLocations?: List<Value<string>>;
    constructor(properties: PolicyDetails);
}
export declare class Parameters {
    ExcludeBootVolume?: Value<boolean>;
    NoReboot?: Value<boolean>;
    constructor(properties: Parameters);
}
export declare class EncryptionConfiguration {
    Encrypted: Value<boolean>;
    CmkArn?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class Schedule {
    ShareRules?: List<ShareRule>;
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
    TargetRegion?: Value<string>;
    Target?: Value<string>;
    Encrypted: Value<boolean>;
    CmkArn?: Value<string>;
    RetainRule?: CrossRegionCopyRetainRule;
    CopyTags?: Value<boolean>;
    constructor(properties: CrossRegionCopyRule);
}
export declare class CrossRegionCopyAction {
    Target: Value<string>;
    EncryptionConfiguration: EncryptionConfiguration;
    RetainRule?: CrossRegionCopyRetainRule;
    constructor(properties: CrossRegionCopyAction);
}
export declare class ShareRule {
    TargetAccounts?: List<Value<string>>;
    UnshareIntervalUnit?: Value<string>;
    UnshareInterval?: Value<number>;
    constructor(properties: ShareRule);
}
export interface LifecyclePolicyProperties {
    ExecutionRoleArn?: Value<string>;
    Description?: Value<string>;
    State?: Value<string>;
    PolicyDetails?: PolicyDetails;
    Tags?: List<ResourceTag>;
}
export default class LifecyclePolicy extends ResourceBase<LifecyclePolicyProperties> {
    static FastRestoreRule: typeof FastRestoreRule;
    static EventSource: typeof EventSource;
    static EventParameters: typeof EventParameters;
    static Action: typeof Action;
    static CreateRule: typeof CreateRule;
    static RetainRule: typeof RetainRule;
    static PolicyDetails: typeof PolicyDetails;
    static Parameters: typeof Parameters;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static Schedule: typeof Schedule;
    static CrossRegionCopyRetainRule: typeof CrossRegionCopyRetainRule;
    static CrossRegionCopyRule: typeof CrossRegionCopyRule;
    static CrossRegionCopyAction: typeof CrossRegionCopyAction;
    static ShareRule: typeof ShareRule;
    constructor(properties?: LifecyclePolicyProperties);
}
