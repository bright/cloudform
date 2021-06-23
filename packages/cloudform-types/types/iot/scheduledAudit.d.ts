import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ScheduledAuditProperties {
    ScheduledAuditName?: Value<string>;
    Frequency: Value<string>;
    DayOfMonth?: Value<string>;
    DayOfWeek?: Value<string>;
    TargetCheckNames: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ScheduledAudit extends ResourceBase<ScheduledAuditProperties> {
    constructor(properties: ScheduledAuditProperties);
}
