import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricStreamFilter {
    MetricNames?: List<Value<string>>;
    Namespace: Value<string>;
    constructor(properties: MetricStreamFilter);
}
export declare class MetricStreamStatisticsConfiguration {
    IncludeMetrics: List<MetricStreamStatisticsMetric>;
    AdditionalStatistics: List<Value<string>>;
    constructor(properties: MetricStreamStatisticsConfiguration);
}
export declare class MetricStreamStatisticsMetric {
    MetricName: Value<string>;
    Namespace: Value<string>;
    constructor(properties: MetricStreamStatisticsMetric);
}
export interface MetricStreamProperties {
    StatisticsConfigurations?: List<MetricStreamStatisticsConfiguration>;
    FirehoseArn: Value<string>;
    IncludeLinkedAccountsMetrics?: Value<boolean>;
    IncludeFilters?: List<MetricStreamFilter>;
    OutputFormat: Value<string>;
    ExcludeFilters?: List<MetricStreamFilter>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class MetricStream extends ResourceBase<MetricStreamProperties> {
    static MetricStreamFilter: typeof MetricStreamFilter;
    static MetricStreamStatisticsConfiguration: typeof MetricStreamStatisticsConfiguration;
    static MetricStreamStatisticsMetric: typeof MetricStreamStatisticsMetric;
    constructor(properties: MetricStreamProperties);
}
