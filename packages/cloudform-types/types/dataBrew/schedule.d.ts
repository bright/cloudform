import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ScheduleProperties {
    JobNames?: List<Value<string>>;
    CronExpression: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Schedule extends ResourceBase<ScheduleProperties> {
    constructor(properties: ScheduleProperties);
}
