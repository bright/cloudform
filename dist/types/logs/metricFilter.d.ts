import { ResourceBase } from '../resource';
import { Value } from '../internal';
import MetricTransformation from './metricTransformation';
export interface MetricFilterProperties {
    FilterPattern: Value<string>[];
    LogGroupName: Value<string>;
    MetricTransformations: MetricTransformation[];
}
export default class MetricFilter extends ResourceBase {
    constructor(properties: MetricFilterProperties, dependsOn?: Value<string>);
}
