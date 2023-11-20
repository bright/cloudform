import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HoursOfOperationConfig {
    EndTime: HoursOfOperationTimeSlice;
    StartTime: HoursOfOperationTimeSlice;
    Day: Value<string>;
    constructor(properties: HoursOfOperationConfig);
}
export declare class HoursOfOperationTimeSlice {
    Hours: Value<number>;
    Minutes: Value<number>;
    constructor(properties: HoursOfOperationTimeSlice);
}
export interface HoursOfOperationProperties {
    TimeZone: Value<string>;
    Description?: Value<string>;
    Config: List<HoursOfOperationConfig>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class HoursOfOperation extends ResourceBase<HoursOfOperationProperties> {
    static HoursOfOperationConfig: typeof HoursOfOperationConfig;
    static HoursOfOperationTimeSlice: typeof HoursOfOperationTimeSlice;
    constructor(properties: HoursOfOperationProperties);
}
