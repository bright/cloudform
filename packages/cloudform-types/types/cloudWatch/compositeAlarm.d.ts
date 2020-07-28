import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface CompositeAlarmProperties {
    AlarmName: Value<string>;
    AlarmRule: Value<string>;
    AlarmDescription?: Value<string>;
    ActionsEnabled?: Value<boolean>;
    OKActions?: List<Value<string>>;
    AlarmActions?: List<Value<string>>;
    InsufficientDataActions?: List<Value<string>>;
}
export default class CompositeAlarm extends ResourceBase<CompositeAlarmProperties> {
    constructor(properties: CompositeAlarmProperties);
}
