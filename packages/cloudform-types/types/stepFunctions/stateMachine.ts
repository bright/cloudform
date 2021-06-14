/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LogDestination {


    constructor(properties: LogDestination) {
        Object.assign(this, properties)
    }
}

export class TagsEntry {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: TagsEntry) {
        Object.assign(this, properties)
    }
}

export class LoggingConfiguration {
    Level?: Value<string>
    IncludeExecutionData?: Value<boolean>

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    Key!: Value<string>
    Version?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogsLogGroup {
    LogGroupArn?: Value<string>

    constructor(properties: CloudWatchLogsLogGroup) {
        Object.assign(this, properties)
    }
}

export class TracingConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: TracingConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StateMachineProperties {
    DefinitionString?: Value<string>
    RoleArn: Value<string>
    StateMachineName?: Value<string>
    StateMachineType?: Value<string>
}

export default class StateMachine extends ResourceBase<StateMachineProperties> {
    static LogDestination = LogDestination
    static TagsEntry = TagsEntry
    static LoggingConfiguration = LoggingConfiguration
    static S3Location = S3Location
    static CloudWatchLogsLogGroup = CloudWatchLogsLogGroup
    static TracingConfiguration = TracingConfiguration

    constructor(properties: StateMachineProperties) {
        super('AWS::StepFunctions::StateMachine', properties)
    }
}
