/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Schedule {
    TagsToAdd?: List<ResourceTag>
    CreateRule?: CreateRule
    RetainRule?: RetainRule
    Name?: Value<string>
    CopyTags?: Value<boolean>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class CreateRule {
    IntervalUnit!: Value<string>
    Times?: List<Value<string>>
    Interval!: Value<number>

    constructor(properties: CreateRule) {
        Object.assign(this, properties)
    }
}

export class RetainRule {
    Count!: Value<number>

    constructor(properties: RetainRule) {
        Object.assign(this, properties)
    }
}

export class PolicyDetails {
    ResourceTypes?: List<Value<string>>
    Schedules?: List<Schedule>
    TargetTags?: List<ResourceTag>

    constructor(properties: PolicyDetails) {
        Object.assign(this, properties)
    }
}

export interface LifecyclePolicyProperties {
    ExecutionRoleArn?: Value<string>
    Description?: Value<string>
    State?: Value<string>
    PolicyDetails?: PolicyDetails
}

export default class LifecyclePolicy extends ResourceBase<LifecyclePolicyProperties> {
    static Schedule = Schedule
    static CreateRule = CreateRule
    static RetainRule = RetainRule
    static PolicyDetails = PolicyDetails

    constructor(properties?: LifecyclePolicyProperties) {
        super('AWS::DLM::LifecyclePolicy', properties || {})
    }
}
