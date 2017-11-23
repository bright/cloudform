/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface MaintenanceWindowLambdaParametersProperties {
    ClientContext?: Value<string>
    Qualifier?: Value<string>
    Payload?: Value<string>
}

export class MaintenanceWindowLambdaParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowLambdaParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::MaintenanceWindowLambdaParameters', properties, dependsOn)
    }
}

export interface NotificationConfigProperties {
    NotificationArn?: Value<string>
    NotificationType?: Value<string>
    NotificationEvents?: Value<string>[]
}

export class NotificationConfig extends ResourceBase {
    constructor(properties: NotificationConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::NotificationConfig', properties, dependsOn)
    }
}

export interface MaintenanceWindowAutomationParametersProperties {
    Parameters?: any
    DocumentVersion?: Value<string>
}

export class MaintenanceWindowAutomationParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowAutomationParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::MaintenanceWindowAutomationParameters', properties, dependsOn)
    }
}

export interface TaskInvocationParametersProperties {
    MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters
    MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters
    MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters
    MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters
}

export class TaskInvocationParameters extends ResourceBase {
    constructor(properties: TaskInvocationParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::TaskInvocationParameters', properties, dependsOn)
    }
}

export interface LoggingInfoProperties {
    S3Bucket: Value<string>
    Region: Value<string>
    S3Prefix?: Value<string>
}

export class LoggingInfo extends ResourceBase {
    constructor(properties: LoggingInfoProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::LoggingInfo', properties, dependsOn)
    }
}

export interface TargetProperties {
    Values?: Value<string>[]
    Key: Value<string>
}

export class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::Target', properties, dependsOn)
    }
}

export interface MaintenanceWindowStepFunctionsParametersProperties {
    Input?: Value<string>
    Name?: Value<string>
}

export class MaintenanceWindowStepFunctionsParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowStepFunctionsParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::MaintenanceWindowStepFunctionsParameters', properties, dependsOn)
    }
}

export interface MaintenanceWindowRunCommandParametersProperties {
    TimeoutSeconds?: Value<number>
    Comment?: Value<string>
    OutputS3KeyPrefix?: Value<string>
    Parameters?: any
    DocumentHashType?: Value<string>
    ServiceRoleArn?: Value<string>
    NotificationConfig?: NotificationConfig
    OutputS3BucketName?: Value<string>
    DocumentHash?: Value<string>
}

export class MaintenanceWindowRunCommandParameters extends ResourceBase {
    constructor(properties: MaintenanceWindowRunCommandParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::MaintenanceWindowRunCommandParameters', properties, dependsOn)
    }
}

export interface MaintenanceWindowTaskProperties {
    MaxErrors: Value<string>
    Description?: Value<string>
    ServiceRoleArn: Value<string>
    Priority: Value<number>
    MaxConcurrency: Value<string>
    Targets: Target[]
    Name?: Value<string>
    TaskArn: Value<string>
    TaskInvocationParameters?: TaskInvocationParameters
    WindowId?: Value<string>
    TaskParameters?: any
    TaskType: Value<string>
    LoggingInfo?: LoggingInfo
}

export default class MaintenanceWindowTask extends ResourceBase {
    constructor(properties: MaintenanceWindowTaskProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SSM::MaintenanceWindowTask', properties, dependsOn)
    }
}
