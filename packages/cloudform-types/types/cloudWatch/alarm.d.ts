import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricStat {
    Metric: Metric;
    Period: Value<number>;
    Stat: Value<string>;
    Unit?: Value<string>;
    constructor(properties: MetricStat);
}
export declare class MetricDataQuery {
    Expression?: Value<string>;
    Id: Value<string>;
    Label?: Value<string>;
    MetricStat?: MetricStat;
    ReturnData?: Value<boolean>;
    constructor(properties: MetricDataQuery);
}
export declare class Dimension {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: Dimension);
}
export declare class Metric {
    Dimensions?: List<Dimension>;
    MetricName?: Value<string>;
    Namespace?: Value<string>;
    constructor(properties: Metric);
}
export interface AlarmProperties {
    ActionsEnabled?: Value<boolean>;
    AlarmActions?: List<Value<string>>;
    AlarmDescription?: Value<string>;
    AlarmName?: Value<string>;
    ComparisonOperator: Value<string>;
    DatapointsToAlarm?: Value<number>;
    Dimensions?: List<Dimension>;
    EvaluateLowSampleCountPercentile?: Value<string>;
    EvaluationPeriods: Value<number>;
    ExtendedStatistic?: Value<string>;
    InsufficientDataActions?: List<Value<string>>;
    MetricName?: Value<string>;
    Metrics?: List<MetricDataQuery>;
    Namespace?: Value<string>;
    OKActions?: List<Value<string>>;
    Period?: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    TreatMissingData?: Value<string>;
    Unit?: Value<string>;
}
export default class Alarm extends ResourceBase<AlarmProperties> {
    static MetricStat: typeof MetricStat;
    static MetricDataQuery: typeof MetricDataQuery;
    static Dimension: typeof Dimension;
    static Metric: typeof Metric;
    constructor(properties: AlarmProperties);
}
