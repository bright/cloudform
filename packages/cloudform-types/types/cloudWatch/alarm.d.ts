import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Dimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: Dimension);
}
export declare class Metric {
    MetricName?: Value<string>;
    Dimensions?: List<Dimension>;
    Namespace?: Value<string>;
    constructor(properties: Metric);
}
export declare class MetricDataQuery {
    AccountId?: Value<string>;
    ReturnData?: Value<boolean>;
    Expression?: Value<string>;
    Label?: Value<string>;
    MetricStat?: MetricStat;
    Period?: Value<number>;
    Id: Value<string>;
    constructor(properties: MetricDataQuery);
}
export declare class MetricStat {
    Stat: Value<string>;
    Period: Value<number>;
    Metric: Metric;
    Unit?: Value<string>;
    constructor(properties: MetricStat);
}
export interface AlarmProperties {
    ThresholdMetricId?: Value<string>;
    EvaluateLowSampleCountPercentile?: Value<string>;
    ExtendedStatistic?: Value<string>;
    ComparisonOperator: Value<string>;
    TreatMissingData?: Value<string>;
    Dimensions?: List<Dimension>;
    Period?: Value<number>;
    EvaluationPeriods: Value<number>;
    Unit?: Value<string>;
    Namespace?: Value<string>;
    OKActions?: List<Value<string>>;
    AlarmActions?: List<Value<string>>;
    MetricName?: Value<string>;
    ActionsEnabled?: Value<boolean>;
    Metrics?: List<MetricDataQuery>;
    AlarmDescription?: Value<string>;
    AlarmName?: Value<string>;
    Statistic?: Value<string>;
    InsufficientDataActions?: List<Value<string>>;
    DatapointsToAlarm?: Value<number>;
    Threshold?: Value<number>;
}
export default class Alarm extends ResourceBase<AlarmProperties> {
    static Dimension: typeof Dimension;
    static Metric: typeof Metric;
    static MetricDataQuery: typeof MetricDataQuery;
    static MetricStat: typeof MetricStat;
    constructor(properties: AlarmProperties);
}
