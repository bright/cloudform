/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TagsEntry {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TagsEntry) {
        Object.assign(this, properties)
    }
}

export class LoggingConfiguration {
    IncludeExecutionData?: Value<boolean>
    Destinations?: List<LogDestination>
    Level?: Value<string>

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    Version?: Value<string>
    Key!: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogsLogGroup {
    LogGroupArn!: Value<string>

    constructor(properties: CloudWatchLogsLogGroup) {
        Object.assign(this, properties)
    }
}

export class LogDestination {
    CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup

    constructor(properties: LogDestination) {
        Object.assign(this, properties)
    }
}

export type DefinitionSubstitutions = {[key: string]: any}

export class TracingConfiguration {
    Enabled!: Value<boolean>

    constructor(properties: TracingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StateMachineProperties {
    DefinitionString?: Value<string>
    LoggingConfiguration?: LoggingConfiguration
    DefinitionSubstitutions?: DefinitionSubstitutions
    DefinitionS3Location?: S3Location
    StateMachineName?: Value<string>
    RoleArn: Value<string>
    Tags?: List<TagsEntry>
    StateMachineType?: Value<string>
    TracingConfiguration?: TracingConfiguration
}

export default class StateMachine extends ResourceBase<StateMachineProperties> {
    static TagsEntry = TagsEntry
    static LoggingConfiguration = LoggingConfiguration
    static S3Location = S3Location
    static CloudWatchLogsLogGroup = CloudWatchLogsLogGroup
    static LogDestination = LogDestination
    static TracingConfiguration = TracingConfiguration

    constructor(properties: StateMachineProperties) {
        super('AWS::StepFunctions::StateMachine', properties)
    }
}
