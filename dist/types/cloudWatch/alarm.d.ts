import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Dimension from './dimension';
export declare type ComparisonOperator = "GreaterThanOrEqualToThreshold" | "GreaterThanThreshold" | "LessThanThreshold" | "LessThanOrEqualToThreshold";
export declare type Statistic = "SampleCount" | "Average" | "Sum" | "Minimum" | "Maximum";
export declare type Unit = "Seconds" | "Microseconds" | "Milliseconds" | "Bytes" | "Kilobytes" | "Megabytes" | "Gigabytes" | "Terabytes" | "Bits" | "Kilobits" | "Megabits" | "Gigabits" | "Terabits" | "Percent" | "Count" | "Bytes/Second" | "Kilobytes/Second" | "Megabytes/Second" | "Gigabytes/Second" | "Terabytes/Second" | "Bits/Second" | "Kilobits/Second" | "Megabits/Second" | "Gigabits/Second" | "Terabits/Second" | "Count/Second" | "None";
export interface AlarmProperties {
    ActionsEnabled?: Value<string>;
    AlarmActions?: Value<string>[];
    AlarmDescription?: Value<string>;
    AlarmName?: Value<string>;
    ComparisonOperator: Value<ComparisonOperator>;
    Dimensions?: Dimension[];
    EvaluationPeriods: Value<string>;
    InsufficientDataActions?: Value<string>[];
    MetricName: Value<string>;
    Namespace: Value<string>;
    OKActions?: Value<string>[];
    Period: Value<string>;
    Statistic: Value<Statistic>;
    Threshold: Value<string>;
    Unit?: Value<Unit>;
}
export default class Alarm extends ResourceBase {
    constructor(properties: AlarmProperties, dependsOn?: Value<string>);
}
