import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomizedMetricSpecification {
    MetricName: Value<string>;
    Statistic: Value<string>;
    Dimensions?: List<MetricDimension>;
    Unit?: Value<string>;
    Namespace: Value<string>;
    constructor(properties: CustomizedMetricSpecification);
}
export declare class Metric {
    MetricName: Value<string>;
    Dimensions?: List<MetricDimension>;
    Namespace: Value<string>;
    constructor(properties: Metric);
}
export declare class MetricDataQuery {
    ReturnData?: Value<boolean>;
    Expression?: Value<string>;
    Label?: Value<string>;
    MetricStat?: MetricStat;
    Id: Value<string>;
    constructor(properties: MetricDataQuery);
}
export declare class MetricDimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class MetricStat {
    Stat: Value<string>;
    Metric: Metric;
    Unit?: Value<string>;
    constructor(properties: MetricStat);
}
export declare class PredefinedMetricSpecification {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
    constructor(properties: PredefinedMetricSpecification);
}
export declare class PredictiveScalingConfiguration {
    MaxCapacityBreachBehavior?: Value<string>;
    MaxCapacityBuffer?: Value<number>;
    Mode?: Value<string>;
    MetricSpecifications: List<PredictiveScalingMetricSpecification>;
    SchedulingBufferTime?: Value<number>;
    constructor(properties: PredictiveScalingConfiguration);
}
export declare class PredictiveScalingCustomizedCapacityMetric {
    MetricDataQueries: List<MetricDataQuery>;
    constructor(properties: PredictiveScalingCustomizedCapacityMetric);
}
export declare class PredictiveScalingCustomizedLoadMetric {
    MetricDataQueries: List<MetricDataQuery>;
    constructor(properties: PredictiveScalingCustomizedLoadMetric);
}
export declare class PredictiveScalingCustomizedScalingMetric {
    MetricDataQueries: List<MetricDataQuery>;
    constructor(properties: PredictiveScalingCustomizedScalingMetric);
}
export declare class PredictiveScalingMetricSpecification {
    CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric;
    PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric;
    TargetValue: Value<number>;
    PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric;
    CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric;
    CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric;
    PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair;
    constructor(properties: PredictiveScalingMetricSpecification);
}
export declare class PredictiveScalingPredefinedLoadMetric {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
    constructor(properties: PredictiveScalingPredefinedLoadMetric);
}
export declare class PredictiveScalingPredefinedMetricPair {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
    constructor(properties: PredictiveScalingPredefinedMetricPair);
}
export declare class PredictiveScalingPredefinedScalingMetric {
    PredefinedMetricType: Value<string>;
    ResourceLabel?: Value<string>;
    constructor(properties: PredictiveScalingPredefinedScalingMetric);
}
export declare class StepAdjustment {
    MetricIntervalUpperBound?: Value<number>;
    MetricIntervalLowerBound?: Value<number>;
    ScalingAdjustment: Value<number>;
    constructor(properties: StepAdjustment);
}
export declare class TargetTrackingConfiguration {
    TargetValue: Value<number>;
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    DisableScaleIn?: Value<boolean>;
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    constructor(properties: TargetTrackingConfiguration);
}
export interface ScalingPolicyProperties {
    MetricAggregationType?: Value<string>;
    PolicyType?: Value<string>;
    PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
    ScalingAdjustment?: Value<number>;
    Cooldown?: Value<string>;
    StepAdjustments?: List<StepAdjustment>;
    AutoScalingGroupName: Value<string>;
    MinAdjustmentMagnitude?: Value<number>;
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
    EstimatedInstanceWarmup?: Value<number>;
    AdjustmentType?: Value<string>;
}
export default class ScalingPolicy extends ResourceBase<ScalingPolicyProperties> {
    static CustomizedMetricSpecification: typeof CustomizedMetricSpecification;
    static Metric: typeof Metric;
    static MetricDataQuery: typeof MetricDataQuery;
    static MetricDimension: typeof MetricDimension;
    static MetricStat: typeof MetricStat;
    static PredefinedMetricSpecification: typeof PredefinedMetricSpecification;
    static PredictiveScalingConfiguration: typeof PredictiveScalingConfiguration;
    static PredictiveScalingCustomizedCapacityMetric: typeof PredictiveScalingCustomizedCapacityMetric;
    static PredictiveScalingCustomizedLoadMetric: typeof PredictiveScalingCustomizedLoadMetric;
    static PredictiveScalingCustomizedScalingMetric: typeof PredictiveScalingCustomizedScalingMetric;
    static PredictiveScalingMetricSpecification: typeof PredictiveScalingMetricSpecification;
    static PredictiveScalingPredefinedLoadMetric: typeof PredictiveScalingPredefinedLoadMetric;
    static PredictiveScalingPredefinedMetricPair: typeof PredictiveScalingPredefinedMetricPair;
    static PredictiveScalingPredefinedScalingMetric: typeof PredictiveScalingPredefinedScalingMetric;
    static StepAdjustment: typeof StepAdjustment;
    static TargetTrackingConfiguration: typeof TargetTrackingConfiguration;
    constructor(properties: ScalingPolicyProperties);
}
