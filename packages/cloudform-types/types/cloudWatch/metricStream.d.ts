import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricStreamFilter {
    Namespace: Value<string>;
    constructor(properties: MetricStreamFilter);
}
export interface MetricStreamProperties {
    ExcludeFilters?: List<MetricStreamFilter>;
    FirehoseArn: Value<string>;
    IncludeFilters?: List<MetricStreamFilter>;
    Name?: Value<string>;
    RoleArn: Value<string>;
    OutputFormat: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class MetricStream extends ResourceBase<MetricStreamProperties> {
    static MetricStreamFilter: typeof MetricStreamFilter;
    constructor(properties: MetricStreamProperties);
}
