/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NetworkConfiguration {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class ModuleLoggingConfiguration {
    Enabled?: Value<boolean>
    LogLevel?: Value<string>
    CloudWatchLogGroupArn?: Value<string>

    constructor(properties: ModuleLoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class LoggingConfiguration {
    DagProcessingLogs?: ModuleLoggingConfiguration
    SchedulerLogs?: ModuleLoggingConfiguration
    WebserverLogs?: ModuleLoggingConfiguration
    WorkerLogs?: ModuleLoggingConfiguration
    TaskLogs?: ModuleLoggingConfiguration

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentProperties {
    Name: Value<string>
    ExecutionRoleArn?: Value<string>
    KmsKey?: Value<string>
    AirflowVersion?: Value<string>
    SourceBucketArn?: Value<string>
    DagS3Path?: Value<string>
    PluginsS3Path?: Value<string>
    PluginsS3ObjectVersion?: Value<string>
    RequirementsS3Path?: Value<string>
    RequirementsS3ObjectVersion?: Value<string>
    AirflowConfigurationOptions?: {[key: string]: any}
    EnvironmentClass?: Value<string>
    MaxWorkers?: Value<number>
    MinWorkers?: Value<number>
    Schedulers?: Value<number>
    NetworkConfiguration?: NetworkConfiguration
    LoggingConfiguration?: LoggingConfiguration
    WeeklyMaintenanceWindowStart?: Value<string>
    Tags?: TagMap
    WebserverAccessMode?: Value<string>
}

export default class Environment extends ResourceBase<EnvironmentProperties> {
    static NetworkConfiguration = NetworkConfiguration
    static ModuleLoggingConfiguration = ModuleLoggingConfiguration
    static LoggingConfiguration = LoggingConfiguration

    constructor(properties: EnvironmentProperties) {
        super('AWS::MWAA::Environment', properties)
    }
}
