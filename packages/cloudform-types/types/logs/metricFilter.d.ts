import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MetricTransformation {
    DefaultValue?: Value<number>;
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
export default class MetricFilter extends ResourceBase<MetricFilterProperties> {
    static MetricTransformation: typeof MetricTransformation;
    constructor(properties: MetricFilterProperties);
}
