import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ExecutionStatusObject {
    Status: Value<string>;
    DesiredState?: Value<string>;
    Reason?: Value<string>;
    constructor(properties: ExecutionStatusObject);
}
export declare class GroupToWeight {
    GroupName: Value<string>;
    SplitWeight: Value<number>;
    constructor(properties: GroupToWeight);
}
export declare class LaunchGroupObject {
    GroupName: Value<string>;
    Description?: Value<string>;
    Variation: Value<string>;
    Feature: Value<string>;
    constructor(properties: LaunchGroupObject);
}
export declare class MetricDefinitionObject {
    EntityIdKey: Value<string>;
    MetricName: Value<string>;
    EventPattern?: Value<string>;
    ValueKey: Value<string>;
    UnitLabel?: Value<string>;
    constructor(properties: MetricDefinitionObject);
}
export declare class SegmentOverride {
    Weights: List<GroupToWeight>;
    EvaluationOrder: Value<number>;
    Segment: Value<string>;
    constructor(properties: SegmentOverride);
}
export declare class StepConfig {
    GroupWeights: List<GroupToWeight>;
    SegmentOverrides?: List<SegmentOverride>;
    StartTime: Value<string>;
    constructor(properties: StepConfig);
}
export interface LaunchProperties {
    Project: Value<string>;
    Description?: Value<string>;
    ExecutionStatus?: ExecutionStatusObject;
    Groups: List<LaunchGroupObject>;
    RandomizationSalt?: Value<string>;
    MetricMonitors?: List<MetricDefinitionObject>;
    ScheduledSplitsConfig: List<StepConfig>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Launch extends ResourceBase<LaunchProperties> {
    static ExecutionStatusObject: typeof ExecutionStatusObject;
    static GroupToWeight: typeof GroupToWeight;
    static LaunchGroupObject: typeof LaunchGroupObject;
    static MetricDefinitionObject: typeof MetricDefinitionObject;
    static SegmentOverride: typeof SegmentOverride;
    static StepConfig: typeof StepConfig;
    constructor(properties: LaunchProperties);
}
