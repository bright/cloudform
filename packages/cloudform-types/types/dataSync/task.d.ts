import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FilterRule {
    FilterType?: Value<string>;
    Value?: Value<string>;
    constructor(properties: FilterRule);
}
export declare class Options {
    Atime?: Value<string>;
    BytesPerSecond?: Value<number>;
    Gid?: Value<string>;
    LogLevel?: Value<string>;
    Mtime?: Value<string>;
    OverwriteMode?: Value<string>;
    PosixPermissions?: Value<string>;
    PreserveDeletedFiles?: Value<string>;
    PreserveDevices?: Value<string>;
    TaskQueueing?: Value<string>;
    TransferMode?: Value<string>;
    Uid?: Value<string>;
    VerifyMode?: Value<string>;
    constructor(properties: Options);
}
export declare class TaskSchedule {
    ScheduleExpression: Value<string>;
    constructor(properties: TaskSchedule);
}
export interface TaskProperties {
    Excludes?: List<FilterRule>;
    Tags?: List<ResourceTag>;
    CloudWatchLogGroupArn?: Value<string>;
    DestinationLocationArn: Value<string>;
    Name?: Value<string>;
    Options?: Options;
    Schedule?: TaskSchedule;
    SourceLocationArn: Value<string>;
}
export default class Task extends ResourceBase<TaskProperties> {
    static FilterRule: typeof FilterRule;
    static Options: typeof Options;
    static TaskSchedule: typeof TaskSchedule;
    constructor(properties: TaskProperties);
}
