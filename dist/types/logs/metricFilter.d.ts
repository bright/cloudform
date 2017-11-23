import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricTransformation {
    MetricName: Value<string>;
    MetricNamespace: Value<string>;
    MetricValue: Value<string>;
    constructor(properties: MetricTransformation);
}
export interface MetricFilterProperties {
    FilterPattern: Value<string>;
    LogGroupName: Value<string>;
    MetricTransformations: List<MetricTransformation>;
}
export default class MetricFilter extends ResourceBase {
    constructor(properties: MetricFilterProperties);
}
