import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface CompositeAlarmProperties {
    AlarmActions?: List<Value<string>>;
    ActionsSuppressorWaitPeriod?: Value<number>;
    ActionsEnabled?: Value<boolean>;
    AlarmName?: Value<string>;
    AlarmDescription?: Value<string>;
    ActionsSuppressor?: Value<string>;
    AlarmRule: Value<string>;
    InsufficientDataActions?: List<Value<string>>;
    OKActions?: List<Value<string>>;
    ActionsSuppressorExtensionPeriod?: Value<number>;
}
export default class CompositeAlarm extends ResourceBase<CompositeAlarmProperties> {
    constructor(properties: CompositeAlarmProperties);
}
