import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface MaintenanceWindowProperties {
    StartDate?: Value<string>;
    Description?: Value<string>;
    AllowUnassociatedTargets: Value<boolean>;
    Cutoff: Value<number>;
    Schedule: Value<string>;
    Duration: Value<number>;
    EndDate?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    ScheduleTimezone?: Value<string>;
}
export default class MaintenanceWindow extends ResourceBase<MaintenanceWindowProperties> {
    constructor(properties: MaintenanceWindowProperties);
}
