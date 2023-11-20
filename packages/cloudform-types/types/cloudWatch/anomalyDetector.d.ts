import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Configuration {
    MetricTimeZone?: Value<string>;
    ExcludedTimeRanges?: List<Range>;
    constructor(properties: Configuration);
}
export declare class Dimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: Dimension);
}
export declare class Metric {
    MetricName: Value<string>;
    Dimensions?: List<Dimension>;
    Namespace: Value<string>;
    constructor(properties: Metric);
}
export declare type MetricDataQueries = List<MetricDataQuery>;
export declare class MetricDataQuery {
    AccountId?: Value<string>;
    ReturnData?: Value<boolean>;
    Expression?: Value<string>;
    MetricStat?: MetricStat;
    Label?: Value<string>;
    Period?: Value<number>;
    Id: Value<string>;
    constructor(properties: MetricDataQuery);
}
export declare class MetricMathAnomalyDetector {
    MetricDataQueries?: List<MetricDataQuery>;
    constructor(properties: MetricMathAnomalyDetector);
}
export declare class MetricStat {
    Stat: Value<string>;
    Period: Value<number>;
    Metric: Metric;
    Unit?: Value<string>;
    constructor(properties: MetricStat);
}
export declare class Range {
    EndTime: Value<string>;
    StartTime: Value<string>;
    constructor(properties: Range);
}
export declare class SingleMetricAnomalyDetector {
    MetricName?: Value<string>;
    Stat?: Value<string>;
    Dimensions?: List<Dimension>;
    Namespace?: Value<string>;
    constructor(properties: SingleMetricAnomalyDetector);
}
export interface AnomalyDetectorProperties {
    MetricName?: Value<string>;
    Stat?: Value<string>;
    Configuration?: Configuration;
    MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
    Dimensions?: List<Dimension>;
    Namespace?: Value<string>;
    SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
}
export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static Configuration: typeof Configuration;
    static Dimension: typeof Dimension;
    static Metric: typeof Metric;
    static MetricDataQuery: typeof MetricDataQuery;
    static MetricMathAnomalyDetector: typeof MetricMathAnomalyDetector;
    static MetricStat: typeof MetricStat;
    static Range: typeof Range;
    static SingleMetricAnomalyDetector: typeof SingleMetricAnomalyDetector;
    constructor(properties?: AnomalyDetectorProperties);
}
