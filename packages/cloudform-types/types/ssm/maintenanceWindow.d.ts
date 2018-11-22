import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MaintenanceWindowProperties {
    StartDate?: Value<string>;
    Description?: Value<string>;
    AllowUnassociatedTargets: Value<boolean>;
    Cutoff: Value<number>;
    Schedule: Value<string>;
    Duration: Value<number>;
    EndDate?: Value<string>;
    Name: Value<string>;
    ScheduleTimezone?: Value<string>;
}
export default class MaintenanceWindow extends ResourceBase {
    constructor(properties?: MaintenanceWindowProperties);
}
