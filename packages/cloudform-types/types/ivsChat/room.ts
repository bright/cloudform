/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MessageReviewHandler {
    FallbackResult?: Value<string>
    Uri?: Value<string>

    constructor(properties: MessageReviewHandler) {
        Object.assign(this, properties)
    }
}

export interface RoomProperties {
    MaximumMessageRatePerSecond?: Value<number>
    MaximumMessageLength?: Value<number>
    MessageReviewHandler?: MessageReviewHandler
    LoggingConfigurationIdentifiers?: List<Value<string>>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class Room extends ResourceBase<RoomProperties> {
    static MessageReviewHandler = MessageReviewHandler

    constructor(properties?: RoomProperties) {
        super('AWS::IVSChat::Room', properties || {})
    }
}
