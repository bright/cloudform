import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricGoalObject {
    EntityIdKey: Value<string>;
    DesiredChange: Value<string>;
    MetricName: Value<string>;
    EventPattern?: Value<string>;
    ValueKey: Value<string>;
    UnitLabel?: Value<string>;
    constructor(properties: MetricGoalObject);
}
export declare class OnlineAbConfigObject {
    TreatmentWeights?: List<TreatmentToWeight>;
    ControlTreatmentName?: Value<string>;
    constructor(properties: OnlineAbConfigObject);
}
export declare class RunningStatusObject {
    Status: Value<string>;
    DesiredState?: Value<string>;
    AnalysisCompleteTime?: Value<string>;
    Reason?: Value<string>;
    constructor(properties: RunningStatusObject);
}
export declare class TreatmentObject {
    Description?: Value<string>;
    Variation: Value<string>;
    Feature: Value<string>;
    TreatmentName: Value<string>;
    constructor(properties: TreatmentObject);
}
export declare class TreatmentToWeight {
    Treatment: Value<string>;
    SplitWeight: Value<number>;
    constructor(properties: TreatmentToWeight);
}
export interface ExperimentProperties {
    Project: Value<string>;
    RunningStatus?: RunningStatusObject;
    Description?: Value<string>;
    MetricGoals: List<MetricGoalObject>;
    OnlineAbConfig: OnlineAbConfigObject;
    RemoveSegment?: Value<boolean>;
    RandomizationSalt?: Value<string>;
    Treatments: List<TreatmentObject>;
    SamplingRate?: Value<number>;
    Segment?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Experiment extends ResourceBase<ExperimentProperties> {
    static MetricGoalObject: typeof MetricGoalObject;
    static OnlineAbConfigObject: typeof OnlineAbConfigObject;
    static RunningStatusObject: typeof RunningStatusObject;
    static TreatmentObject: typeof TreatmentObject;
    static TreatmentToWeight: typeof TreatmentToWeight;
    constructor(properties: ExperimentProperties);
}
