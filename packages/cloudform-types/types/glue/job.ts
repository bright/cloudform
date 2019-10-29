/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class JobCommand {
    PythonVersion?: Value<string>
    ScriptLocation?: Value<string>
    Name?: Value<string>

    constructor(properties: JobCommand) {
        Object.assign(this, properties)
    }
}

export class ConnectionsList {
    Connections?: List<Value<string>>

    constructor(properties: ConnectionsList) {
        Object.assign(this, properties)
    }
}

export class NotificationProperty {
    NotifyDelayAfter?: Value<number>

    constructor(properties: NotificationProperty) {
        Object.assign(this, properties)
    }
}

export class ExecutionProperty {
    MaxConcurrentRuns?: Value<number>

    constructor(properties: ExecutionProperty) {
        Object.assign(this, properties)
    }
}

export interface JobProperties {
    Connections?: ConnectionsList
    MaxRetries?: Value<number>
    Description?: Value<string>
    Timeout?: Value<number>
    AllocatedCapacity?: Value<number>
    Name?: Value<string>
    Role: Value<string>
    DefaultArguments?: {[key: string]: any}
    NotificationProperty?: NotificationProperty
    WorkerType?: Value<string>
    LogUri?: Value<string>
    Command: JobCommand
    GlueVersion?: Value<string>
    ExecutionProperty?: ExecutionProperty
    SecurityConfiguration?: Value<string>
    NumberOfWorkers?: Value<number>
    Tags?: {[key: string]: any}
    MaxCapacity?: Value<number>
}

export default class Job extends ResourceBase<JobProperties> {
    static JobCommand = JobCommand
    static ConnectionsList = ConnectionsList
    static NotificationProperty = NotificationProperty
    static ExecutionProperty = ExecutionProperty

    constructor(properties: JobProperties) {
        super('AWS::Glue::Job', properties)
    }
}
