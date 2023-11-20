/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoggingConfiguration {
    SchedulerLogs?: ModuleLoggingConfiguration
    TaskLogs?: ModuleLoggingConfiguration
    DagProcessingLogs?: ModuleLoggingConfiguration
    WebserverLogs?: ModuleLoggingConfiguration
    WorkerLogs?: ModuleLoggingConfiguration

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class ModuleLoggingConfiguration {
    CloudWatchLogGroupArn?: Value<string>
    Enabled?: Value<boolean>
    LogLevel?: Value<string>

    constructor(properties: ModuleLoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentProperties {
    AirflowConfigurationOptions?: {[key: string]: any}
    MaxWorkers?: Value<number>
    EnvironmentClass?: Value<string>
    Schedulers?: Value<number>
    RequirementsS3Path?: Value<string>
    PluginsS3Path?: Value<string>
    MinWorkers?: Value<number>
    AirflowVersion?: Value<string>
    StartupScriptS3Path?: Value<string>
    Name: Value<string>
    RequirementsS3ObjectVersion?: Value<string>
    SourceBucketArn?: Value<string>
    ExecutionRoleArn?: Value<string>
    WeeklyMaintenanceWindowStart?: Value<string>
    PluginsS3ObjectVersion?: Value<string>
    StartupScriptS3ObjectVersion?: Value<string>
    DagS3Path?: Value<string>
    LoggingConfiguration?: LoggingConfiguration
    WebserverAccessMode?: Value<string>
    NetworkConfiguration?: NetworkConfiguration
    KmsKey?: Value<string>
    Tags?: {[key: string]: any}
}

export default class Environment extends ResourceBase<EnvironmentProperties> {
    static LoggingConfiguration = LoggingConfiguration
    static ModuleLoggingConfiguration = ModuleLoggingConfiguration
    static NetworkConfiguration = NetworkConfiguration

    constructor(properties: EnvironmentProperties) {
        super('AWS::MWAA::Environment', properties)
    }
}
