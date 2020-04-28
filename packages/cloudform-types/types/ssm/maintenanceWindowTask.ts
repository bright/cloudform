/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class LoggingInfo {
    S3Bucket!: Value<string>
    Region!: Value<string>
    S3Prefix?: Value<string>

    constructor(properties: LoggingInfo) {
        Object.assign(this, properties)
    }
}

export class Target {
    Values?: List<Value<string>>
    Key!: Value<string>

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindowRunCommandParameters {
    TimeoutSeconds?: Value<number>
    Comment?: Value<string>
    OutputS3KeyPrefix?: Value<string>
    Parameters?: {[key: string]: any}
    DocumentHashType?: Value<string>
    ServiceRoleArn?: Value<string>
    NotificationConfig?: NotificationConfig
    OutputS3BucketName?: Value<string>
    DocumentHash?: Value<string>

    constructor(properties: MaintenanceWindowRunCommandParameters) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindowLambdaParameters {
    ClientContext?: Value<string>
    Qualifier?: Value<string>
    Payload?: Value<string>

    constructor(properties: MaintenanceWindowLambdaParameters) {
        Object.assign(this, properties)
    }
}

export class NotificationConfig {
    NotificationArn!: Value<string>
    NotificationType?: Value<string>
    NotificationEvents?: List<Value<string>>

    constructor(properties: NotificationConfig) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindowAutomationParameters {
    Parameters?: {[key: string]: any}
    DocumentVersion?: Value<string>

    constructor(properties: MaintenanceWindowAutomationParameters) {
        Object.assign(this, properties)
    }
}

export class TaskInvocationParameters {
    MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters
    MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters
    MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters
    MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters

    constructor(properties: TaskInvocationParameters) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindowStepFunctionsParameters {
    Input?: Value<string>
    Name?: Value<string>

    constructor(properties: MaintenanceWindowStepFunctionsParameters) {
        Object.assign(this, properties)
    }
}

export interface MaintenanceWindowTaskProperties {
    MaxErrors: Value<string>
    Description?: Value<string>
    ServiceRoleArn?: Value<string>
    Priority: Value<number>
    MaxConcurrency: Value<string>
    Targets: List<Target>
    Name?: Value<string>
    TaskArn: Value<string>
    TaskInvocationParameters?: TaskInvocationParameters
    WindowId: Value<string>
    TaskParameters?: {[key: string]: any}
    TaskType: Value<string>
    LoggingInfo?: LoggingInfo
}

export default class MaintenanceWindowTask extends ResourceBase<MaintenanceWindowTaskProperties> {
    static LoggingInfo = LoggingInfo
    static Target = Target
    static MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters
    static MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters
    static NotificationConfig = NotificationConfig
    static MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters
    static TaskInvocationParameters = TaskInvocationParameters
    static MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters

    constructor(properties: MaintenanceWindowTaskProperties) {
        super('AWS::SSM::MaintenanceWindowTask', properties)
    }
}
