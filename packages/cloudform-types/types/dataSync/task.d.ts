import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Deleted {
    ReportLevel?: Value<string>;
    constructor(properties: Deleted);
}
export declare class Destination {
    S3?: S3;
    constructor(properties: Destination);
}
export declare class FilterRule {
    FilterType?: Value<string>;
    Value?: Value<string>;
    constructor(properties: FilterRule);
}
export declare class Options {
    VerifyMode?: Value<string>;
    Gid?: Value<string>;
    Atime?: Value<string>;
    OverwriteMode?: Value<string>;
    PreserveDevices?: Value<string>;
    Mtime?: Value<string>;
    TaskQueueing?: Value<string>;
    TransferMode?: Value<string>;
    LogLevel?: Value<string>;
    ObjectTags?: Value<string>;
    Uid?: Value<string>;
    BytesPerSecond?: Value<number>;
    PosixPermissions?: Value<string>;
    PreserveDeletedFiles?: Value<string>;
    SecurityDescriptorCopyFlags?: Value<string>;
    constructor(properties: Options);
}
export declare class Overrides {
    Verified?: Verified;
    Skipped?: Skipped;
    Transferred?: Transferred;
    Deleted?: Deleted;
    constructor(properties: Overrides);
}
export declare class S3 {
    Subdirectory?: Value<string>;
    S3BucketArn?: Value<string>;
    BucketAccessRoleArn?: Value<string>;
    constructor(properties: S3);
}
export declare class Skipped {
    ReportLevel?: Value<string>;
    constructor(properties: Skipped);
}
export declare class TaskReportConfig {
    Destination: Destination;
    ReportLevel?: Value<string>;
    ObjectVersionIds?: Value<string>;
    Overrides?: Overrides;
    OutputType: Value<string>;
    constructor(properties: TaskReportConfig);
}
export declare class TaskSchedule {
    ScheduleExpression: Value<string>;
    constructor(properties: TaskSchedule);
}
export declare class Transferred {
    ReportLevel?: Value<string>;
    constructor(properties: Transferred);
}
export declare class Verified {
    ReportLevel?: Value<string>;
    constructor(properties: Verified);
}
export interface TaskProperties {
    Includes?: List<FilterRule>;
    DestinationLocationArn: Value<string>;
    Options?: Options;
    Schedule?: TaskSchedule;
    CloudWatchLogGroupArn?: Value<string>;
    SourceLocationArn: Value<string>;
    TaskReportConfig?: TaskReportConfig;
    Excludes?: List<FilterRule>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Task extends ResourceBase<TaskProperties> {
    static Deleted: typeof Deleted;
    static Destination: typeof Destination;
    static FilterRule: typeof FilterRule;
    static Options: typeof Options;
    static Overrides: typeof Overrides;
    static S3: typeof S3;
    static Skipped: typeof Skipped;
    static TaskReportConfig: typeof TaskReportConfig;
    static TaskSchedule: typeof TaskSchedule;
    static Transferred: typeof Transferred;
    static Verified: typeof Verified;
    constructor(properties: TaskProperties);
}
