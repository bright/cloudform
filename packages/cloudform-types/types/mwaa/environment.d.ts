import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoggingConfiguration {
    SchedulerLogs?: ModuleLoggingConfiguration;
    TaskLogs?: ModuleLoggingConfiguration;
    DagProcessingLogs?: ModuleLoggingConfiguration;
    WebserverLogs?: ModuleLoggingConfiguration;
    WorkerLogs?: ModuleLoggingConfiguration;
    constructor(properties: LoggingConfiguration);
}
export declare class ModuleLoggingConfiguration {
    CloudWatchLogGroupArn?: Value<string>;
    Enabled?: Value<boolean>;
    LogLevel?: Value<string>;
    constructor(properties: ModuleLoggingConfiguration);
}
export declare class NetworkConfiguration {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: NetworkConfiguration);
}
export interface EnvironmentProperties {
    AirflowConfigurationOptions?: {
        [key: string]: any;
    };
    MaxWorkers?: Value<number>;
    EnvironmentClass?: Value<string>;
    Schedulers?: Value<number>;
    RequirementsS3Path?: Value<string>;
    PluginsS3Path?: Value<string>;
    MinWorkers?: Value<number>;
    AirflowVersion?: Value<string>;
    StartupScriptS3Path?: Value<string>;
    Name: Value<string>;
    RequirementsS3ObjectVersion?: Value<string>;
    SourceBucketArn?: Value<string>;
    ExecutionRoleArn?: Value<string>;
    WeeklyMaintenanceWindowStart?: Value<string>;
    PluginsS3ObjectVersion?: Value<string>;
    StartupScriptS3ObjectVersion?: Value<string>;
    DagS3Path?: Value<string>;
    LoggingConfiguration?: LoggingConfiguration;
    WebserverAccessMode?: Value<string>;
    NetworkConfiguration?: NetworkConfiguration;
    KmsKey?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static LoggingConfiguration: typeof LoggingConfiguration;
    static ModuleLoggingConfiguration: typeof ModuleLoggingConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    constructor(properties: EnvironmentProperties);
}
