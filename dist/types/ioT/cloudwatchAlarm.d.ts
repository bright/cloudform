import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CloudwatchAlarmProperties {
    AlarmName: Value<string>;
    RoleArn: Value<string>;
    StateReason: Value<string>;
    StateValue: Value<string>;
}
export default class CloudwatchAlarm extends ResourceBase {
    constructor(properties: CloudwatchAlarmProperties, dependsOn?: Value<string>);
}
