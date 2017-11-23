import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface DimensionProperties {
    Name: Value<string>;
    Value: Value<string>;
}
export declare class Dimension extends ResourceBase {
    constructor(properties: DimensionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AlarmProperties {
    ActionsEnabled?: Value<boolean>;
    AlarmActions?: List<Value<string>>;
    AlarmDescription?: Value<string>;
    AlarmName?: Value<string>;
    ComparisonOperator: Value<string>;
    Dimensions?: List<Dimension>;
    EvaluateLowSampleCountPercentile?: Value<string>;
    EvaluationPeriods: Value<number>;
    ExtendedStatistic?: Value<string>;
    InsufficientDataActions?: List<Value<string>>;
    MetricName: Value<string>;
    Namespace: Value<string>;
    OKActions?: List<Value<string>>;
    Period: Value<number>;
    Statistic?: Value<string>;
    Threshold: Value<number>;
    TreatMissingData?: Value<string>;
    Unit?: Value<string>;
}
export default class Alarm extends ResourceBase {
    constructor(properties: AlarmProperties, dependsOn?: Value<string> | Value<string>[]);
}
