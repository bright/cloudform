import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricToRetain {
    Metric: Value<string>;
    MetricDimension?: MetricDimension;
    constructor(properties: MetricToRetain);
}
export declare class MachineLearningDetectionConfig {
    ConfidenceLevel?: Value<string>;
    constructor(properties: MachineLearningDetectionConfig);
}
export declare class MetricDimension {
    DimensionName: Value<string>;
    Operator?: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class MetricValue {
    Count?: Value<string>;
    Cidrs?: List<Value<string>>;
    Ports?: List<Value<number>>;
    Number?: Value<number>;
    Numbers?: List<Value<number>>;
    Strings?: List<Value<string>>;
    constructor(properties: MetricValue);
}
export declare class AlertTarget {
    AlertTargetArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: AlertTarget);
}
export declare class Behavior {
    Name: Value<string>;
    Metric?: Value<string>;
    MetricDimension?: MetricDimension;
    Criteria?: BehaviorCriteria;
    SuppressAlerts?: Value<boolean>;
    constructor(properties: Behavior);
}
export declare class BehaviorCriteria {
    ComparisonOperator?: Value<string>;
    Value?: MetricValue;
    DurationSeconds?: Value<number>;
    ConsecutiveDatapointsToAlarm?: Value<number>;
    ConsecutiveDatapointsToClear?: Value<number>;
    StatisticalThreshold?: StatisticalThreshold;
    MlDetectionConfig?: MachineLearningDetectionConfig;
    constructor(properties: BehaviorCriteria);
}
export declare class StatisticalThreshold {
    Statistic?: Value<string>;
    constructor(properties: StatisticalThreshold);
}
export interface SecurityProfileProperties {
    SecurityProfileName?: Value<string>;
    SecurityProfileDescription?: Value<string>;
    Behaviors?: List<Behavior>;
    AlertTargets?: {
        [key: string]: AlertTarget;
    };
    AdditionalMetricsToRetainV2?: List<MetricToRetain>;
    Tags?: List<ResourceTag>;
    TargetArns?: List<Value<string>>;
}
export default class SecurityProfile extends ResourceBase<SecurityProfileProperties> {
    static MetricToRetain: typeof MetricToRetain;
    static MachineLearningDetectionConfig: typeof MachineLearningDetectionConfig;
    static MetricDimension: typeof MetricDimension;
    static MetricValue: typeof MetricValue;
    static AlertTarget: typeof AlertTarget;
    static Behavior: typeof Behavior;
    static BehaviorCriteria: typeof BehaviorCriteria;
    static StatisticalThreshold: typeof StatisticalThreshold;
    constructor(properties?: SecurityProfileProperties);
}
