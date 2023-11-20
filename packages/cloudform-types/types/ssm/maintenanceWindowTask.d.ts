import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchOutputConfig {
    CloudWatchOutputEnabled?: Value<boolean>;
    CloudWatchLogGroupName?: Value<string>;
    constructor(properties: CloudWatchOutputConfig);
}
export declare class LoggingInfo {
    S3Bucket: Value<string>;
    Region: Value<string>;
    S3Prefix?: Value<string>;
    constructor(properties: LoggingInfo);
}
export declare class MaintenanceWindowAutomationParameters {
    Parameters?: {
        [key: string]: any;
    };
    DocumentVersion?: Value<string>;
    constructor(properties: MaintenanceWindowAutomationParameters);
}
export declare class MaintenanceWindowLambdaParameters {
    ClientContext?: Value<string>;
    Qualifier?: Value<string>;
    Payload?: Value<string>;
    constructor(properties: MaintenanceWindowLambdaParameters);
}
export declare class MaintenanceWindowRunCommandParameters {
    TimeoutSeconds?: Value<number>;
    Comment?: Value<string>;
    OutputS3KeyPrefix?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
    DocumentHashType?: Value<string>;
    ServiceRoleArn?: Value<string>;
    NotificationConfig?: NotificationConfig;
    DocumentVersion?: Value<string>;
    OutputS3BucketName?: Value<string>;
    DocumentHash?: Value<string>;
    constructor(properties: MaintenanceWindowRunCommandParameters);
}
export declare class MaintenanceWindowStepFunctionsParameters {
    Input?: Value<string>;
    Name?: Value<string>;
    constructor(properties: MaintenanceWindowStepFunctionsParameters);
}
export declare class NotificationConfig {
    NotificationArn: Value<string>;
    NotificationType?: Value<string>;
    NotificationEvents?: List<Value<string>>;
    constructor(properties: NotificationConfig);
}
export declare class Target {
    Values: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: Target);
}
export declare class TaskInvocationParameters {
    MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters;
    MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters;
    MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters;
    MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters;
    constructor(properties: TaskInvocationParameters);
}
export interface MaintenanceWindowTaskProperties {
    MaxErrors?: Value<string>;
    Description?: Value<string>;
    ServiceRoleArn?: Value<string>;
    Priority: Value<number>;
    MaxConcurrency?: Value<string>;
    Targets?: List<Target>;
    Name?: Value<string>;
    TaskArn: Value<string>;
    TaskInvocationParameters?: TaskInvocationParameters;
    WindowId: Value<string>;
    TaskParameters?: {
        [key: string]: any;
    };
    TaskType: Value<string>;
    CutoffBehavior?: Value<string>;
    LoggingInfo?: LoggingInfo;
}
export default class MaintenanceWindowTask extends ResourceBase<MaintenanceWindowTaskProperties> {
    static CloudWatchOutputConfig: typeof CloudWatchOutputConfig;
    static LoggingInfo: typeof LoggingInfo;
    static MaintenanceWindowAutomationParameters: typeof MaintenanceWindowAutomationParameters;
    static MaintenanceWindowLambdaParameters: typeof MaintenanceWindowLambdaParameters;
    static MaintenanceWindowRunCommandParameters: typeof MaintenanceWindowRunCommandParameters;
    static MaintenanceWindowStepFunctionsParameters: typeof MaintenanceWindowStepFunctionsParameters;
    static NotificationConfig: typeof NotificationConfig;
    static Target: typeof Target;
    static TaskInvocationParameters: typeof TaskInvocationParameters;
    constructor(properties: MaintenanceWindowTaskProperties);
}
