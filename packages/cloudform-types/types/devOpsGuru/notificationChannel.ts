/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NotificationChannelConfig {


    constructor(properties: NotificationChannelConfig) {
        Object.assign(this, properties)
    }
}

export class SnsChannelConfig {
    TopicArn?: Value<string>

    constructor(properties: SnsChannelConfig) {
        Object.assign(this, properties)
    }
}

export interface NotificationChannelProperties {

}

export default class NotificationChannel extends ResourceBase<NotificationChannelProperties> {
    static NotificationChannelConfig = NotificationChannelConfig
    static SnsChannelConfig = SnsChannelConfig

    constructor(properties: NotificationChannelProperties) {
        super('AWS::DevOpsGuru::NotificationChannel', properties)
    }
}
