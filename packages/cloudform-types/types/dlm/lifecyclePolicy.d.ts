import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    CrossRegionCopy: List<CrossRegionCopyAction>;
    Name: Value<string>;
    constructor(properties: Action);
}
export declare class ArchiveRetainRule {
    RetentionArchiveTier: RetentionArchiveTier;
    constructor(properties: ArchiveRetainRule);
}
export declare class ArchiveRule {
    RetainRule: ArchiveRetainRule;
    constructor(properties: ArchiveRule);
}
export declare class CreateRule {
    IntervalUnit?: Value<string>;
    Scripts?: List<Script>;
    Times?: List<Value<string>>;
    CronExpression?: Value<string>;
    Interval?: Value<number>;
    Location?: Value<string>;
    constructor(properties: CreateRule);
}
export declare class CrossRegionCopyAction {
    Target: Value<string>;
    EncryptionConfiguration: EncryptionConfiguration;
    RetainRule?: CrossRegionCopyRetainRule;
    constructor(properties: CrossRegionCopyAction);
}
export declare class CrossRegionCopyDeprecateRule {
    IntervalUnit: Value<string>;
    Interval: Value<number>;
    constructor(properties: CrossRegionCopyDeprecateRule);
}
export declare class CrossRegionCopyRetainRule {
    IntervalUnit: Value<string>;
    Interval: Value<number>;
    constructor(properties: CrossRegionCopyRetainRule);
}
export declare class CrossRegionCopyRule {
    TargetRegion?: Value<string>;
    Target?: Value<string>;
    DeprecateRule?: CrossRegionCopyDeprecateRule;
    Encrypted: Value<boolean>;
    CmkArn?: Value<string>;
    RetainRule?: CrossRegionCopyRetainRule;
    CopyTags?: Value<boolean>;
    constructor(properties: CrossRegionCopyRule);
}
export declare class DeprecateRule {
    IntervalUnit?: Value<string>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: DeprecateRule);
}
export declare class EncryptionConfiguration {
    Encrypted: Value<boolean>;
    CmkArn?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class EventParameters {
    EventType: Value<string>;
    SnapshotOwner: List<Value<string>>;
    DescriptionRegex?: Value<string>;
    constructor(properties: EventParameters);
}
export declare class EventSource {
    Type: Value<string>;
    Parameters?: EventParameters;
    constructor(properties: EventSource);
}
export declare class FastRestoreRule {
    IntervalUnit?: Value<string>;
    AvailabilityZones?: List<Value<string>>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: FastRestoreRule);
}
export declare class Parameters {
    ExcludeBootVolume?: Value<boolean>;
    ExcludeDataVolumeTags?: List<ResourceTag>;
    NoReboot?: Value<boolean>;
    constructor(properties: Parameters);
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
export declare class RetainRule {
    IntervalUnit?: Value<string>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: RetainRule);
}
export declare class RetentionArchiveTier {
    IntervalUnit?: Value<string>;
    Count?: Value<number>;
    Interval?: Value<number>;
    constructor(properties: RetentionArchiveTier);
}
export declare class Schedule {
    ShareRules?: List<ShareRule>;
    DeprecateRule?: DeprecateRule;
    TagsToAdd?: List<ResourceTag>;
    CreateRule?: CreateRule;
    VariableTags?: List<ResourceTag>;
    FastRestoreRule?: FastRestoreRule;
    ArchiveRule?: ArchiveRule;
    RetainRule?: RetainRule;
    CrossRegionCopyRules?: List<CrossRegionCopyRule>;
    Name?: Value<string>;
    CopyTags?: Value<boolean>;
    constructor(properties: Schedule);
}
export declare class Script {
    ExecutionHandlerService?: Value<string>;
    ExecutionTimeout?: Value<number>;
    Stages?: List<Value<string>>;
    ExecutionHandler?: Value<string>;
    MaximumRetryCount?: Value<number>;
    ExecuteOperationOnScriptFailure?: Value<boolean>;
    constructor(properties: Script);
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
    static Action: typeof Action;
    static ArchiveRetainRule: typeof ArchiveRetainRule;
    static ArchiveRule: typeof ArchiveRule;
    static CreateRule: typeof CreateRule;
    static CrossRegionCopyAction: typeof CrossRegionCopyAction;
    static CrossRegionCopyDeprecateRule: typeof CrossRegionCopyDeprecateRule;
    static CrossRegionCopyRetainRule: typeof CrossRegionCopyRetainRule;
    static CrossRegionCopyRule: typeof CrossRegionCopyRule;
    static DeprecateRule: typeof DeprecateRule;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static EventParameters: typeof EventParameters;
    static EventSource: typeof EventSource;
    static FastRestoreRule: typeof FastRestoreRule;
    static Parameters: typeof Parameters;
    static PolicyDetails: typeof PolicyDetails;
    static RetainRule: typeof RetainRule;
    static RetentionArchiveTier: typeof RetentionArchiveTier;
    static Schedule: typeof Schedule;
    static Script: typeof Script;
    static ShareRule: typeof ShareRule;
    constructor(properties?: LifecyclePolicyProperties);
}
