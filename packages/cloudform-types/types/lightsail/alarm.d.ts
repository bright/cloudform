import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface AlarmProperties {
    MetricName: Value<string>;
    ComparisonOperator: Value<string>;
    TreatMissingData?: Value<string>;
    AlarmName: Value<string>;
    ContactProtocols?: List<Value<string>>;
    MonitoredResourceName: Value<string>;
    EvaluationPeriods: Value<number>;
    NotificationEnabled?: Value<boolean>;
    DatapointsToAlarm?: Value<number>;
    NotificationTriggers?: List<Value<string>>;
    Threshold: Value<number>;
}
export default class Alarm extends ResourceBase<AlarmProperties> {
    constructor(properties: AlarmProperties);
}
