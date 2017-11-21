import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StepAdjustmentsProperties {
    MetricIntervalLowerBound?: Value<number>;
    MetricIntervalUpperBound?: Value<number>;
    ScalingAdjustment: Value<number>;
}
export default class StepAdjustments extends ResourceBase {
    constructor(properties: StepAdjustmentsProperties, dependsOn?: Value<string>);
}
