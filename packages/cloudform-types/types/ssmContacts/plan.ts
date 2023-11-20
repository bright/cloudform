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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ChannelTargetInfo {
    RetryIntervalInMinutes!: Value<number>
    ChannelId!: Value<string>

    constructor(properties: ChannelTargetInfo) {
        Object.assign(this, properties)
    }
}

export class ContactTargetInfo {
    ContactId!: Value<string>
    IsEssential!: Value<boolean>

    constructor(properties: ContactTargetInfo) {
        Object.assign(this, properties)
    }
}

export class Stage {
    DurationInMinutes!: Value<number>
    Targets?: List<Targets>

    constructor(properties: Stage) {
        Object.assign(this, properties)
    }
}

export class Targets {
    ChannelTargetInfo?: ChannelTargetInfo
    ContactTargetInfo?: ContactTargetInfo

    constructor(properties: Targets) {
        Object.assign(this, properties)
    }
}

export interface PlanProperties {
    RotationIds?: List<Value<string>>
    Stages?: List<Stage>
    ContactId: Value<string>
}

export default class Plan extends ResourceBase<PlanProperties> {
    static ChannelTargetInfo = ChannelTargetInfo
    static ContactTargetInfo = ContactTargetInfo
    static Stage = Stage
    static Targets = Targets

    constructor(properties: PlanProperties) {
        super('AWS::SSMContacts::Plan', properties)
    }
}
