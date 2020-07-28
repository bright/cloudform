import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export declare class LoggingConfiguration {
    IncludeExecutionData?: Value<boolean>;
    Destinations?: List<LogDestination>;
    Level?: Value<string>;
    constructor(properties: LoggingConfiguration);
}
export declare class S3Location {
    Bucket: Value<string>;
    Version?: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Location);
}
export declare class CloudWatchLogsLogGroup {
    LogGroupArn: Value<string>;
    constructor(properties: CloudWatchLogsLogGroup);
}
export declare class LogDestination {
    CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
    constructor(properties: LogDestination);
}
export declare type DefinitionSubstitutions = {
    [key: string]: any;
};
export declare class TracingConfiguration {
    Enabled: Value<boolean>;
    constructor(properties: TracingConfiguration);
}
export interface StateMachineProperties {
    DefinitionString?: Value<string>;
    LoggingConfiguration?: LoggingConfiguration;
    DefinitionSubstitutions?: DefinitionSubstitutions;
    DefinitionS3Location?: S3Location;
    StateMachineName?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<TagsEntry>;
    StateMachineType?: Value<string>;
    TracingConfiguration?: TracingConfiguration;
}
export default class StateMachine extends ResourceBase<StateMachineProperties> {
    static TagsEntry: typeof TagsEntry;
    static LoggingConfiguration: typeof LoggingConfiguration;
    static S3Location: typeof S3Location;
    static CloudWatchLogsLogGroup: typeof CloudWatchLogsLogGroup;
    static LogDestination: typeof LogDestination;
    static TracingConfiguration: typeof TracingConfiguration;
    constructor(properties: StateMachineProperties);
}
