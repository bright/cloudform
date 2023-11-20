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
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AbortConfig {
    CriteriaList!: List<AbortCriteria>

    constructor(properties: AbortConfig) {
        Object.assign(this, properties)
    }
}

export class AbortCriteria {
    Action!: Value<string>
    FailureType!: Value<string>
    ThresholdPercentage!: Value<number>
    MinNumberOfExecutedThings!: Value<number>

    constructor(properties: AbortCriteria) {
        Object.assign(this, properties)
    }
}

export class ExponentialRolloutRate {
    RateIncreaseCriteria!: RateIncreaseCriteria
    BaseRatePerMinute!: Value<number>
    IncrementFactor!: Value<number>

    constructor(properties: ExponentialRolloutRate) {
        Object.assign(this, properties)
    }
}

export class JobExecutionsRetryConfig {
    RetryCriteriaList?: List<RetryCriteria>

    constructor(properties: JobExecutionsRetryConfig) {
        Object.assign(this, properties)
    }
}

export class JobExecutionsRolloutConfig {
    MaximumPerMinute?: Value<number>
    ExponentialRolloutRate?: ExponentialRolloutRate

    constructor(properties: JobExecutionsRolloutConfig) {
        Object.assign(this, properties)
    }
}

export class MaintenanceWindow {
    DurationInMinutes?: Value<number>
    StartTime?: Value<string>

    constructor(properties: MaintenanceWindow) {
        Object.assign(this, properties)
    }
}

export class PresignedUrlConfig {
    ExpiresInSec?: Value<number>
    RoleArn!: Value<string>

    constructor(properties: PresignedUrlConfig) {
        Object.assign(this, properties)
    }
}

export class RateIncreaseCriteria {
    NumberOfSucceededThings?: Value<number>
    NumberOfNotifiedThings?: Value<number>

    constructor(properties: RateIncreaseCriteria) {
        Object.assign(this, properties)
    }
}

export class RetryCriteria {
    FailureType?: Value<string>
    NumberOfRetries?: Value<number>

    constructor(properties: RetryCriteria) {
        Object.assign(this, properties)
    }
}

export class TimeoutConfig {
    InProgressTimeoutInMinutes!: Value<number>

    constructor(properties: TimeoutConfig) {
        Object.assign(this, properties)
    }
}

export interface JobTemplateProperties {
    TimeoutConfig?: TimeoutConfig
    Description: Value<string>
    JobExecutionsRetryConfig?: JobExecutionsRetryConfig
    AbortConfig?: AbortConfig
    JobTemplateId: Value<string>
    Document?: Value<string>
    DestinationPackageVersions?: List<Value<string>>
    JobArn?: Value<string>
    JobExecutionsRolloutConfig?: JobExecutionsRolloutConfig
    DocumentSource?: Value<string>
    MaintenanceWindows?: List<MaintenanceWindow>
    PresignedUrlConfig?: PresignedUrlConfig
    Tags?: List<ResourceTag>
}

export default class JobTemplate extends ResourceBase<JobTemplateProperties> {
    static AbortConfig = AbortConfig
    static AbortCriteria = AbortCriteria
    static ExponentialRolloutRate = ExponentialRolloutRate
    static JobExecutionsRetryConfig = JobExecutionsRetryConfig
    static JobExecutionsRolloutConfig = JobExecutionsRolloutConfig
    static MaintenanceWindow = MaintenanceWindow
    static PresignedUrlConfig = PresignedUrlConfig
    static RateIncreaseCriteria = RateIncreaseCriteria
    static RetryCriteria = RetryCriteria
    static TimeoutConfig = TimeoutConfig

    constructor(properties: JobTemplateProperties) {
        super('AWS::IoT::JobTemplate', properties)
    }
}
