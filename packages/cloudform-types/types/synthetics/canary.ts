/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Code {
    S3Bucket?: Value<string>
    S3Key?: Value<string>
    S3ObjectVersion?: Value<string>
    Script?: Value<string>
    Handler?: Value<string>

    constructor(properties: Code) {
        Object.assign(this, properties)
    }
}

export class VPCConfig {
    VpcId?: Value<string>
    SubnetIds!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: VPCConfig) {
        Object.assign(this, properties)
    }
}

export class RunConfig {
    TimeoutInSeconds!: Value<number>

    constructor(properties: RunConfig) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    Expression!: Value<string>
    DurationInSeconds!: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export interface CanaryProperties {
    Name: Value<string>
    Code: Code
    ArtifactS3Location: Value<string>
    Schedule: Schedule
    ExecutionRoleArn: Value<string>
    RuntimeVersion: Value<string>
    SuccessRetentionPeriod?: Value<number>
    FailureRetentionPeriod?: Value<number>
    Tags?: List<ResourceTag>
    VPCConfig?: VPCConfig
    RunConfig?: RunConfig
    StartCanaryAfterCreation: Value<boolean>
}

export default class Canary extends ResourceBase<CanaryProperties> {
    static Code = Code
    static VPCConfig = VPCConfig
    static RunConfig = RunConfig
    static Schedule = Schedule

    constructor(properties: CanaryProperties) {
        super('AWS::Synthetics::Canary', properties)
    }
}
