import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Dimension from './dimension';
export interface TriggerProperties {
    AutoScalingGroupName: Value<string>;
    BreachDuration: Value<string>;
    Dimensions: Dimension[];
    LowerBreachScaleIncrement?: Value<string>;
    LowerThreshold: Value<string>;
    MetricName: Value<string>;
    Namespace?: Value<string>;
    Period?: Value<string>;
    Statistic?: Value<string>;
    Unit?: Value<string>;
    UpperBreachScaleIncrement?: Value<string>;
    UpperThreshold?: Value<string>;
}
export default class Trigger extends ResourceBase {
    constructor(properties: TriggerProperties, dependsOn?: Value<string>);
}
