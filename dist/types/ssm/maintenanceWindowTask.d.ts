import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface MaintenanceWindowLambdaParametersProperties {
    ClientContext?: Value<string>;
    Qualifier?: Value<string>;
    Payload?: Value<string>;
}
export declare class MaintenanceWindowLambdaParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowLambdaParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface NotificationConfigProperties {
    NotificationArn?: Value<string>;
    NotificationType?: Value<string>;
    NotificationEvents?: List<Value<string>>;
}
export declare class NotificationConfig extends ResourceBase {
    constructor(properties: NotificationConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MaintenanceWindowAutomationParametersProperties {
    Parameters?: any;
    DocumentVersion?: Value<string>;
}
export declare class MaintenanceWindowAutomationParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowAutomationParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TaskInvocationParametersProperties {
    MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters;
    MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters;
    MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters;
    MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters;
}
export declare class TaskInvocationParameters extends ResourceBase {
    constructor(properties: TaskInvocationParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LoggingInfoProperties {
    S3Bucket: Value<string>;
    Region: Value<string>;
    S3Prefix?: Value<string>;
}
export declare class LoggingInfo extends ResourceBase {
    constructor(properties: LoggingInfoProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TargetProperties {
    Values?: List<Value<string>>;
    Key: Value<string>;
}
export declare class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MaintenanceWindowStepFunctionsParametersProperties {
    Input?: Value<string>;
    Name?: Value<string>;
}
export declare class MaintenanceWindowStepFunctionsParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowStepFunctionsParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MaintenanceWindowRunCommandParametersProperties {
    TimeoutSeconds?: Value<number>;
    Comment?: Value<string>;
    OutputS3KeyPrefix?: Value<string>;
    Parameters?: any;
    DocumentHashType?: Value<string>;
    ServiceRoleArn?: Value<string>;
    NotificationConfig?: NotificationConfig;
    OutputS3BucketName?: Value<string>;
    DocumentHash?: Value<string>;
}
export declare class MaintenanceWindowRunCommandParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowRunCommandParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MaintenanceWindowTaskProperties {
    MaxErrors: Value<string>;
    Description?: Value<string>;
    ServiceRoleArn: Value<string>;
    Priority: Value<number>;
    MaxConcurrency: Value<string>;
    Targets: List<Target>;
    Name?: Value<string>;
    TaskArn: Value<string>;
    TaskInvocationParameters?: TaskInvocationParameters;
    WindowId?: Value<string>;
    TaskParameters?: any;
    TaskType: Value<string>;
    LoggingInfo?: LoggingInfo;
}
export default class MaintenanceWindowTask extends ResourceBase {
    constructor(properties: MaintenanceWindowTaskProperties, dependsOn?: Value<string> | Value<string>[]);
}
