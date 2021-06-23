/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ContactTargetInfo {
    ContactId!: Value<string>
    IsEssential!: Value<boolean>

    constructor(properties: ContactTargetInfo) {
        Object.assign(this, properties)
    }
}

export class Targets {
    ContactTargetInfo?: ContactTargetInfo
    ChannelTargetInfo?: ChannelTargetInfo

    constructor(properties: Targets) {
        Object.assign(this, properties)
    }
}

export class ChannelTargetInfo {
    ChannelId!: Value<string>
    RetryIntervalInMinutes!: Value<number>

    constructor(properties: ChannelTargetInfo) {
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

export interface ContactProperties {
    Alias: Value<string>
    DisplayName: Value<string>
    Type: Value<string>
    Plan: List<Stage>
}

export default class Contact extends ResourceBase<ContactProperties> {
    static ContactTargetInfo = ContactTargetInfo
    static Targets = Targets
    static ChannelTargetInfo = ChannelTargetInfo
    static Stage = Stage

    constructor(properties: ContactProperties) {
        super('AWS::SSMContacts::Contact', properties)
    }
}
