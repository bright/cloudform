import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AggregationType {
    Values: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: AggregationType);
}
export interface FleetMetricProperties {
    IndexName?: Value<string>;
    MetricName: Value<string>;
    Description?: Value<string>;
    QueryString?: Value<string>;
    Period?: Value<number>;
    QueryVersion?: Value<string>;
    Unit?: Value<string>;
    AggregationType?: AggregationType;
    AggregationField?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FleetMetric extends ResourceBase<FleetMetricProperties> {
    static AggregationType: typeof AggregationType;
    constructor(properties: FleetMetricProperties);
}
