import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RefreshOnDay {
    DayOfWeek?: Value<string>;
    DayOfMonth?: Value<string>;
    constructor(properties: RefreshOnDay);
}
export declare class RefreshScheduleMap {
    StartAfterDateTime?: Value<string>;
    ScheduleId?: Value<string>;
    ScheduleFrequency?: ScheduleFrequency;
    RefreshType?: Value<string>;
    constructor(properties: RefreshScheduleMap);
}
export declare class ScheduleFrequency {
    TimeZone?: Value<string>;
    RefreshOnDay?: RefreshOnDay;
    TimeOfTheDay?: Value<string>;
    Interval?: Value<string>;
    constructor(properties: ScheduleFrequency);
}
export interface RefreshScheduleProperties {
    Schedule?: RefreshScheduleMap;
    AwsAccountId?: Value<string>;
    DataSetId?: Value<string>;
}
export default class RefreshSchedule extends ResourceBase<RefreshScheduleProperties> {
    static RefreshOnDay: typeof RefreshOnDay;
    static RefreshScheduleMap: typeof RefreshScheduleMap;
    static ScheduleFrequency: typeof ScheduleFrequency;
    constructor(properties?: RefreshScheduleProperties);
}
