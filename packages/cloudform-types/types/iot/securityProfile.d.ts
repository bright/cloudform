import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AlertTarget {
    AlertTargetArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: AlertTarget);
}
export declare class Behavior {
    SuppressAlerts?: Value<boolean>;
    Metric?: Value<string>;
    Criteria?: BehaviorCriteria;
    MetricDimension?: MetricDimension;
    Name: Value<string>;
    constructor(properties: Behavior);
}
export declare class BehaviorCriteria {
    ComparisonOperator?: Value<string>;
    MlDetectionConfig?: MachineLearningDetectionConfig;
    Value?: MetricValue;
    StatisticalThreshold?: StatisticalThreshold;
    DurationSeconds?: Value<number>;
    ConsecutiveDatapointsToAlarm?: Value<number>;
    ConsecutiveDatapointsToClear?: Value<number>;
    constructor(properties: BehaviorCriteria);
}
export declare class MachineLearningDetectionConfig {
    ConfidenceLevel?: Value<string>;
    constructor(properties: MachineLearningDetectionConfig);
}
export declare class MetricDimension {
    Operator?: Value<string>;
    DimensionName: Value<string>;
    constructor(properties: MetricDimension);
}
export declare class MetricToRetain {
    Metric: Value<string>;
    MetricDimension?: MetricDimension;
    constructor(properties: MetricToRetain);
}
export declare class MetricValue {
    Numbers?: List<Value<number>>;
    Number?: Value<number>;
    Ports?: List<Value<number>>;
    Count?: Value<string>;
    Strings?: List<Value<string>>;
    Cidrs?: List<Value<string>>;
    constructor(properties: MetricValue);
}
export declare class StatisticalThreshold {
    Statistic?: Value<string>;
    constructor(properties: StatisticalThreshold);
}
export interface SecurityProfileProperties {
    AdditionalMetricsToRetainV2?: List<MetricToRetain>;
    SecurityProfileDescription?: Value<string>;
    Behaviors?: List<Behavior>;
    SecurityProfileName?: Value<string>;
    AlertTargets?: {
        [key: string]: AlertTarget;
    };
    TargetArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class SecurityProfile extends ResourceBase<SecurityProfileProperties> {
    static AlertTarget: typeof AlertTarget;
    static Behavior: typeof Behavior;
    static BehaviorCriteria: typeof BehaviorCriteria;
    static MachineLearningDetectionConfig: typeof MachineLearningDetectionConfig;
    static MetricDimension: typeof MetricDimension;
    static MetricToRetain: typeof MetricToRetain;
    static MetricValue: typeof MetricValue;
    static StatisticalThreshold: typeof StatisticalThreshold;
    constructor(properties?: SecurityProfileProperties);
}
