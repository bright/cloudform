import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ScheduleGroupProperties {
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ScheduleGroup extends ResourceBase<ScheduleGroupProperties> {
    constructor(properties?: ScheduleGroupProperties);
}
