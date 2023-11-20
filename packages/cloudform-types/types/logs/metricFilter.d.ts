import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Dimension {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: Dimension);
}
export declare class MetricTransformation {
    DefaultValue?: Value<number>;
    MetricName: Value<string>;
    MetricValue: Value<string>;
    MetricNamespace: Value<string>;
    Dimensions?: List<Dimension>;
    Unit?: Value<string>;
    constructor(properties: MetricTransformation);
}
export interface MetricFilterProperties {
    MetricTransformations: List<MetricTransformation>;
    FilterPattern: Value<string>;
    LogGroupName: Value<string>;
    FilterName?: Value<string>;
}
export default class MetricFilter extends ResourceBase<MetricFilterProperties> {
    static Dimension: typeof Dimension;
    static MetricTransformation: typeof MetricTransformation;
    constructor(properties: MetricFilterProperties);
}
