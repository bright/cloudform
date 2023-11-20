import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ScheduledAuditProperties {
    DayOfWeek?: Value<string>;
    TargetCheckNames: List<Value<string>>;
    ScheduledAuditName?: Value<string>;
    DayOfMonth?: Value<string>;
    Frequency: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ScheduledAudit extends ResourceBase<ScheduledAuditProperties> {
    constructor(properties: ScheduledAuditProperties);
}
