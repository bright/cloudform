import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ScheduleProperties {
    JobNames?: List<Value<string>>;
    CronExpression: Value<string>;
    Name: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Schedule extends ResourceBase<ScheduleProperties> {
    constructor(properties: ScheduleProperties);
}
