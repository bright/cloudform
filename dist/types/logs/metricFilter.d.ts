import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MetricTransformationProperties {
    MetricName: Value<string>;
    MetricNamespace: Value<string>;
    MetricValue: Value<string>;
}
export declare class MetricTransformation extends ResourceBase {
    constructor(properties: MetricTransformationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MetricFilterProperties {
    FilterPattern: Value<string>;
    LogGroupName: Value<string>;
    MetricTransformations: MetricTransformation[];
}
export default class MetricFilter extends ResourceBase {
    constructor(properties: MetricFilterProperties, dependsOn?: Value<string> | Value<string>[]);
}
