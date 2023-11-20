/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Deleted {
    ReportLevel?: Value<string>

    constructor(properties: Deleted) {
        Object.assign(this, properties)
    }
}

export class Destination {
    S3?: S3

    constructor(properties: Destination) {
        Object.assign(this, properties)
    }
}

export class FilterRule {
    FilterType?: Value<string>
    Value?: Value<string>

    constructor(properties: FilterRule) {
        Object.assign(this, properties)
    }
}

export class Options {
    VerifyMode?: Value<string>
    Gid?: Value<string>
    Atime?: Value<string>
    OverwriteMode?: Value<string>
    PreserveDevices?: Value<string>
    Mtime?: Value<string>
    TaskQueueing?: Value<string>
    TransferMode?: Value<string>
    LogLevel?: Value<string>
    ObjectTags?: Value<string>
    Uid?: Value<string>
    BytesPerSecond?: Value<number>
    PosixPermissions?: Value<string>
    PreserveDeletedFiles?: Value<string>
    SecurityDescriptorCopyFlags?: Value<string>

    constructor(properties: Options) {
        Object.assign(this, properties)
    }
}

export class Overrides {
    Verified?: Verified
    Skipped?: Skipped
    Transferred?: Transferred
    Deleted?: Deleted

    constructor(properties: Overrides) {
        Object.assign(this, properties)
    }
}

export class S3 {
    Subdirectory?: Value<string>
    S3BucketArn?: Value<string>
    BucketAccessRoleArn?: Value<string>

    constructor(properties: S3) {
        Object.assign(this, properties)
    }
}

export class Skipped {
    ReportLevel?: Value<string>

    constructor(properties: Skipped) {
        Object.assign(this, properties)
    }
}

export class TaskReportConfig {
    Destination!: Destination
    ReportLevel?: Value<string>
    ObjectVersionIds?: Value<string>
    Overrides?: Overrides
    OutputType!: Value<string>

    constructor(properties: TaskReportConfig) {
        Object.assign(this, properties)
    }
}

export class TaskSchedule {
    ScheduleExpression!: Value<string>

    constructor(properties: TaskSchedule) {
        Object.assign(this, properties)
    }
}

export class Transferred {
    ReportLevel?: Value<string>

    constructor(properties: Transferred) {
        Object.assign(this, properties)
    }
}

export class Verified {
    ReportLevel?: Value<string>

    constructor(properties: Verified) {
        Object.assign(this, properties)
    }
}

export interface TaskProperties {
    Includes?: List<FilterRule>
    DestinationLocationArn: Value<string>
    Options?: Options
    Schedule?: TaskSchedule
    CloudWatchLogGroupArn?: Value<string>
    SourceLocationArn: Value<string>
    TaskReportConfig?: TaskReportConfig
    Excludes?: List<FilterRule>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class Task extends ResourceBase<TaskProperties> {
    static Deleted = Deleted
    static Destination = Destination
    static FilterRule = FilterRule
    static Options = Options
    static Overrides = Overrides
    static S3 = S3
    static Skipped = Skipped
    static TaskReportConfig = TaskReportConfig
    static TaskSchedule = TaskSchedule
    static Transferred = Transferred
    static Verified = Verified

    constructor(properties: TaskProperties) {
        super('AWS::DataSync::Task', properties)
    }
}
